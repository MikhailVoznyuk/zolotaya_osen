import {useEffect, useState, useRef} from 'react'

import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/jsvectormap.min.css'
import '@/maps/russia.js'

type Regions = {
    old_prods: string[];
    trad_prods: string[];
    new_prods: string[];
}



const REGIONS_DATA = {
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

const ALL_REGIONS = new Set<string>(SELECTED_REGIONS.old_prods.concat(
    SELECTED_REGIONS.trad_prods,
    SELECTED_REGIONS.new_prods));

export default function VectorMap() {
    const mapContainerRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (mapContainerRef.current != null) {
            mapContainerRef.current.innerHTML = '';
        }
        const map = new jsVectorMap({
            selector: '#mapRussia',
            map: 'russia',
            selectedRegions: SELECTED_REGIONS.old_prods.concat(
                SELECTED_REGIONS.trad_prods,
                SELECTED_REGIONS.new_prods),
            regionStyle: {
                initial: {
                    stroke: 'green',
                },
                selected: { fill: 'green' },
                selectedHover: { fill: '#13DE00' },
            },
            zoomOnScroll: false,
            onRegionTooltipShow: (event, tooltip, code) => {
                console.log(code)

                if (ALL_REGIONS.has(code)) {
                    console.log('yes')
                    tooltip.text(
                        `<p>${REGIONS_DATA[code].name}
                         <br />
                         Регион: ${REGIONS_DATA[code].type}
                         <br />
                         Площадь посевов в 2024: ${REGIONS_DATA[code].startValue}
                         <br />
                         План. площадь посевов в 2035: ${REGIONS_DATA[code].endValue}
                         <br />
                         Ср. годовой прирост: ${Math.floor((REGIONS_DATA[code].endValue - REGIONS_DATA[code].startValue) / 11)}
                         </p>`, true);
                    tooltip.css({color:'#FFF', backgroundColor: '#13DE00'});
                } else {
                    console.log('no')
                    event.preventDefault();
                    //tooltip.css({color:'#515151', backgroundColor: '#FFF'});
                };



            }
        });
        console.log(map)

        const ro = new ResizeObserver(() => {
            const width = window.innerWidth;
            console.log(width);
            if (width > 900) {
                map.scale = 1.7;
                map.transY = -600;
                map.transX = -40;
            } else if (width > 540) {
                map.scale = 3;
                map.transY = -600;
                map.transX = -40;
            }
            map.updateSize()});


        if (mapContainerRef.current !== null) {
            ro.observe(mapContainerRef.current);
        }



    }, []);

    return (
        <div className='w-screen h-screen relative bg-white'>
            <div ref={mapContainerRef} id='mapRussia' />
        </div>
    )
}