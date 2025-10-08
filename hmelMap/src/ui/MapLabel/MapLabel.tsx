export default function MapLabel({rus} : {rus: boolean}) {
    return (
        <div className='absolute z-2 bg-white p-2 rounded-xl shadow-[0_0_4px_rgba(0,0,0,0.4)] top-18 justify-between text-black text-xs right-6 w-[160px] flex flex-col gap-2'>
            {rus && <div className='flex gap-3'>
                <div className='w-8 h-4 rounded-sm bg-[#C26829]'></div>
                <span>Стародавние</span>
            </div>
            }
            {rus && <div className='flex gap-3'>
                <div className='w-8 h-4  rounded-sm bg-[#D49600]'></div>
                <span>Традиционные</span>
            </div>
            }
            <div className='flex gap-3'>
                <div className='w-8 h-4 rounded-sm bg-[#6584D5]'></div>
                <span>{rus ? 'Новые' : 'Потенциальные'}</span>
            </div>
        </div>
    )
}