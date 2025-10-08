import { useState, useCallback } from 'react';
import type { MenuProps } from 'antd';
import { Button, Drawer, Grid, Menu } from 'antd';
import { MenuOutlined} from '@ant-design/icons';
import { ConfigProvider, theme } from 'antd';

const { useBreakpoint } = Grid;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    { label: <a href="#map">Карта</a>, key: 'map' },
    { label: <a href="#metodics">Методика</a>, key: 'metodics' },
    { label: <a href="#implementation">Внедрение</a>, key: 'implementation' },
    {
        label: 'Обучение',
        key: 'learning',
        children: [
            {
                type: 'group',
                label: 'Образование',
                children: [
                    { label: <a href="#universities">Университеты</a>, key: 'universities' },
                    { label: <a href="#scientists">Ученые</a>, key: 'scientists' },
                ],
            },
        ],
    },
    { key: 'manufacturers', label: <a href="#manufacturers">Производители</a> },
];

export default function Navigation() {
    const screens = useBreakpoint();
    const isMobile = !screens.md; // md ~ ≥768px
    const [open, setOpen] = useState(false);

    const onMenuClick = useCallback<NonNullable<MenuProps['onClick']>>(() => {
        // закрываем меню после выбора пункта на мобилке
        if (isMobile) setOpen(false);
    }, [isMobile]);

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#00a63e',
                    colorInfo:    '#00a63e',         // инфо = праймари, чтобы не лез синий
                    colorLink:    '#00a63e',
                    colorLinkHover:  '#06b24a',
                    colorLinkActive: '#008a34',
                    controlOutline:  'rgba(0,166,62,0.35)', // фокус-обводка
                },
                components: {
                    Button: {
                        colorPrimary:       '#00a63e',
                        colorPrimaryHover:  '#06b24a',
                        colorPrimaryActive: '#008a34',
                        // primaryShadow: '0 2px 0 rgba(0,166,62,0.15)', // если нужен тенёк
                    },
                    Menu: {
                        itemSelectedColor:          '#00a63e',
                        horizontalItemSelectedColor:'#00a63e',
                        itemActiveBg:  'rgba(0,166,62,0.08)',
                        itemSelectedBg:'rgba(0,166,62,0.12)',
                        activeBarHeight: 2, // нижнее подчёркивание в горизонтальном меню
                    },
                    Tabs: {
                        itemSelectedColor: '#00a63e',
                        inkBarColor:       '#00a63e',
                        itemHoverColor:    '#06b24a',
                    },
                    Anchor: {
                        // анкер берёт colorLink, дополнительных танцев не надо
                    },
                    Switch: {
                        colorPrimary:      '#00a63e',
                        colorPrimaryHover: '#06b24a',
                    },
                    Slider: {
                        colorPrimary: '#00a63e',
                    },
                    Radio: {
                        colorPrimary: '#00a63e',
                    },
                    Checkbox: {
                        colorPrimary: '#00a63e',
                    },
                    Drawer: {
                        colorIcon:       '#00a63e',
                        colorIconHover:  '#06b24a',
                    },
                },
            }}
        >
            <div className="fixed top-0 left-0 z-50 w-full border-b bg-white">
            {/* Верхняя панель */}
            <div className="flex h-10 items-center px-2">
                {isMobile ? (
                    <>
                        <Button
                            type="text"
                            aria-label="Открыть меню"
                            icon={<MenuOutlined />}
                            onClick={() => setOpen(true)}
                            className="mr-2"
                        />
                        <div className="font-medium">Навигация</div>
                        <Drawer
                            placement="left"
                            open={open}
                            onClose={() => setOpen(false)}
                            width="86vw"                 // не выезжает за экран, хватает места
                            maskClosable
                            destroyOnClose
                            rootStyle={{ zIndex: 1000 }} // выше остального хлама
                            styles={{
                                header: { padding: '8px 12px', borderBottom: '1px solid #e5e7eb' },
                                body: { padding: 8 },
                            }}
                            title={
                                <div className="flex items-center justify-between">
                                    <span className="text-base">Меню</span>

                                </div>
                            }
                        >
                            <Menu
                                mode="inline"
                                items={items}
                                onClick={onMenuClick}
                                selectedKeys={[]}
                            />
                        </Drawer>
                    </>
                ) : (
                    // Десктоп: горизонтальное меню
                    <Menu
                        mode="horizontal"
                        overflowedIndicator={<MenuOutlined />}
                        items={items}
                        className="w-full border-0"
                    />
                )}
            </div>
        </div>
        </ConfigProvider>
    );
}