import {useEffect, useState, useRef} from 'react'

// @ts-ignore
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/jsvectormap.min.css'
import '@/maps/russia.js'
import '@/maps/belarus.js'

import ToggleButton from "@/ui/ToggleButton/ToggleButton.tsx";
import MapLabel from "@/ui/MapLabel/MapLabel.tsx";

type Regions = {
    old_prods: string[];
    trad_prods: string[];
    new_prods: string[];
}

type RegionData = {
    name: string;
    type: 'Стародавний' | 'Традиционный' | 'Новый',
    startValue: number;
    endValue: number;
}
type RegionsData = {[key: string]: RegionData}



const REGIONS_DATA: RegionsData = {
    'RU-ORL' : {name: 'Орловская область', type: 'Стародавний', startValue: 160, endValue: 960},
    'RU-KOS' : {name: 'Костромская область', type: 'Стародавний', startValue: 160, endValue: 960},
    'RU-IVA': {name: 'Ивановская область', type: 'Стародавний', startValue: 160, endValue: 960},
    'RU-RYA': {name: 'Рязанская область', type: 'Стародавний', startValue: 160, endValue: 960},
    'RU-KDA': {name: 'Краснодарский край', type: 'Стародавний', startValue: 370, endValue: 1170},
    'RU-VLA': {name: 'Владимирская область', type: 'Стародавний', startValue: 160, endValue: 960},
    'RU-NIZ': {name: 'Нижегородская область', type: 'Стародавний', startValue: 160, endValue: 960},
    'RU-TA': {name: 'Республика Татарстан', type: 'Стародавний', startValue: 160, endValue: 960},
    'RU-BA': {name: 'Республика Башкортостан', type: 'Стародавний', startValue: 160, endValue: 960},
    'RU-SVE': {name: 'Свердловская область', type: 'Стародавний', startValue: 160, endValue: 960},
    'RU-CU': {name: 'Чувашская Республика', type: 'Традиционный', startValue: 362.7, endValue: 1162.7},
    'RU-ME': {name: 'Марий Эл', type: 'Традиционный', startValue: 160, endValue: 960},
    'RU-ALT': {name: 'Алтайский край', type: 'Традиционный', startValue: 167.5, endValue: 968},
    'RU-BRY': {name: 'Брянская область', type: 'Традиционный', startValue: 160, endValue: 960},
    'RU-MOS': {name: 'Московская область', type: 'Традиционный', startValue: 160, endValue: 960},
    'RU-PNZ': {name: 'Пензенская область', type: 'Традиционный', startValue: 160, endValue: 960},
    'RU-AL': {name: 'Республика Алтай', type: 'Традиционный', startValue: 262, endValue: 1062},
    'RU-KIR': {name: 'Кировская область', type: 'Традиционный', startValue: 262, endValue: 1062},
    'RU-VOR': {name: 'Воронежская область', type: 'Традиционный', startValue: 262, endValue: 1062},
    'RU-KRS': {name: 'Курская область', type: 'Традиционный', startValue: 262, endValue: 1062},
    'RU-TVE': {name: 'Тверская область', type: 'Новый', startValue: 160, endValue: 960},
    'RU-TAM': {name: 'Тамбовская область', type: 'Новый', startValue: 160, endValue: 960},
    'RU-AD': {name: 'Адыгея', type: 'Новый', startValue: 160, endValue: 960},
    'RU-KB': {name: 'Кабардино-Балкария', type: 'Новый', startValue: 160, endValue: 960},
    'RU-DA': {name: 'Дагестан', type: 'Новый', startValue: 160, endValue: 960},
    'RU-UD': {name: 'Удмуртия', type: 'Новый', startValue: 160, endValue: 960},
    'RU-OMS': {name: 'Омская область', type: 'Новый', startValue: 160, endValue: 960},
    'RU-SAM': {name: 'Самарская область', type: 'Новый', startValue: 160, endValue: 960},
    'RU-ORE': {name: 'Оренбургская область', type: 'Новый', startValue: 160, endValue: 960},
    'RU-KHA': {name: 'Хабаровский край', type: 'Новый', startValue: 160, endValue: 960},



}
const SELECTED_REGIONS: Regions = {
    old_prods: ['RU-ORL', 'RU-KOS', 'RU-IVA', 'RU-RYA', 'RU-KDA', 'RU-VLA', 'RU-NIZ', 'RU-TA', 'RU-BA', 'RU-SVE'],
    trad_prods: ['RU-VOR', 'RU-KRS', 'RU-BRY', 'RU-MOS', 'RU-PNZ', 'RU-CU',  'RU-KIR', 'RU-ME', 'RU-ALT', 'RU-AL' ],
    new_prods: ['RU-TVE', 'RU-NIZ', 'RU-TAM', 'RU-AD', 'RU-KB', 'RU-DA', 'RU-UD', 'RU-SAM', 'RU-ORE', 'RU-OMS', 'RU-KHA']
}

const seriesValues = {
    ...Object.fromEntries(SELECTED_REGIONS.old_prods.map(k => [k, 'old'])),
    ...Object.fromEntries(SELECTED_REGIONS.trad_prods.map(k => [k, 'trad'])),
    ...Object.fromEntries(SELECTED_REGIONS.new_prods.map(k => [k, 'new'])),
};

const ALL_REGIONS = new Set<string>(SELECTED_REGIONS.old_prods.concat(
    SELECTED_REGIONS.trad_prods,
    SELECTED_REGIONS.new_prods));

const BY_REGIONS = ['BY-BR', 'BY-HO'];

const LABEL_STYLES = {
    'Стародавний': ['#C26829', '#FFF'],
    'Традиционный': ['#D49600', '#FFF'],
    'Новый': ['#6584D5', '#FFF'],
}

export default function VectorMap() {
    const [curMap, setCurMap] = useState<0 | 1>(0);
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<any>(null);
    useEffect(() => {
        try { mapRef.current?.destroy?.() } catch {}
        if (mapContainerRef.current != null) {
            mapContainerRef.current.innerHTML = '';
        }

        // @ts-ignore
        let map = (curMap == 0) ?
            new jsVectorMap({
            selector: '#mapContainer',
            map: 'russia',

            regionStyle: {
                initial: {
                    stroke: 'green',
                },
                selected: {},        // заменяет дефолтный объект и убирает дефолтный fill
                selectedHover: {},


            },
            series: {
                regions: [
                    {
                        attribute: 'fill',

                        scale: {
                            "old": "#C26829",
                            "trad": "#D49600",
                            "new": "#6584D5"
                        },
                        values: seriesValues,
                    }
                ],
            },

            zoomOnScroll: false,
            onRegionSelected: (_index: number, _isSelected: boolean, _selected: string[], code: string) => {
                // при любом выборе переустанавливаем серию, чтобы перекрыть наглую заливку selected
                // @ts-ignore
                map.series.regions[0].setValues(seriesValues);
                // если хочешь подсветку выбранного — задаём только обводку напрямую
                // @ts-ignore
                const el = map.regions[code]?.element;
                if (el) {
                    el.setStyle({ stroke: '#13DE00', 'stroke-width': 2 });
                }
            },
            onRegionTooltipShow: (event: { preventDefault: () => void; }, tooltip: {
                text: (arg0: string, arg1: boolean) => void;
                css: (arg0: { color: string; backgroundColor: string; }) => void;
            }, code: string) => {
                console.log(code)

                if (ALL_REGIONS.has(code)) {
                    console.log('yes')
                    tooltip.text(
                        `<p>${REGIONS_DATA[code].name}
                         <br />
                         Регион: ${REGIONS_DATA[code].type}
                         <br />
                         Площадь посевов в 2024: ${REGIONS_DATA[code].startValue} га
                         <br />
                         План. площадь посевов в 2035: ${REGIONS_DATA[code].endValue} га
                         <br />
                         Ср. годовой прирост: ${Math.floor((REGIONS_DATA[code].endValue - REGIONS_DATA[code].startValue) / 11)} га
                         </p>`, true);
                    tooltip.css({color:LABEL_STYLES[REGIONS_DATA[code].type][1], backgroundColor: LABEL_STYLES[REGIONS_DATA[code].type][0]});
                } else {
                    console.log('no')
                    event.preventDefault();
                    //tooltip.css({color:'#515151', backgroundColor: '#FFF'});
                }



            }
        }) :
            new jsVectorMap({
                selector: '#mapContainer',
                map: 'belarus',
                selectedRegions: BY_REGIONS,
                regionStyle: {
                    initial: {
                        stroke: 'white',
                        strokeWidth: 3
                    },
                    selected: { fill: '#6584D5' },
                    selectedHover: { fill: '#6584D5' },
                },
                zoomOnScroll: false,
                onRegionTooltipShow: (event: { preventDefault: () => void; }, tooltip: {
                    text: (arg0: string, arg1: boolean) => void;
                    css: (arg0: { color: string; backgroundColor: string; }) => void;
                }, code: string) => {
                    console.log(code)

                    if (BY_REGIONS.includes(code)) {
                        console.log('yes')
                        tooltip.text(
                            `<p>${code === 'BY-BR' ? 'Брестская облать' : 'Гомельская область'}
                         <br />
                         Потенциальный производитель 
                         </p>`, true);
                        tooltip.css({color: '#FFF', backgroundColor: '#6584D5'});
                    } else {
                        console.log('no')
                        event.preventDefault();
                        //tooltip.css({color:'#515151', backgroundColor: '#FFF'});
                    }
                }
            })

        if (curMap === 0) {
            map.series.regions[0].setValues(seriesValues);
        }



        console.log(map)
        mapRef.current = map
        const ro = new ResizeObserver(() => {
            const width = window.innerWidth;
            console.log(width);
            if (width > 900) {
                if (curMap === 0) {
                    map.scale = 1.7;
                    map.transY = -600;
                    map.transX = -40;
                } else {
                    console.log('resized')
                    map.scale = 0.8;
                    map.transY = -0;
                    map.transX = 0;
                }

            } else if (width > 540) {
                if (curMap === 0) {
                    map.scale = 3;
                    map.transY = -600;
                    map.transX = -40;
                } else {
                    map.scale = 0.8;
                    map.transY = 0;
                    map.transX = 0;
                }

            } else {
                if (curMap === 0) {
                    map.scale = 2.5;
                    map.transY = -600;
                    map.transX = -40;
                } else {
                    map.scale = 0.4;
                    map.transY = -100;
                    map.transX = -40;

                }
            }
            map.updateSize()});


        if (mapContainerRef.current !== null) {
            ro.observe(mapContainerRef.current);
        }

        return () => {
            ro.disconnect()
            try { map.destroy() } catch {}
        }

    }, [curMap]);

    return (
        <div className='w-screen h-screen relative bg-white'>
            <ToggleButton state={curMap} handler={setCurMap} />
            <MapLabel rus={!Boolean(curMap)} />
            <div ref={mapContainerRef} id='mapContainer' />
        </div>
    )
}