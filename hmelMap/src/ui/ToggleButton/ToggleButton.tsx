import React from "react";

type ToggleButtonProps = {
    state: number
    handler: React.Dispatch<React.SetStateAction<0 | 1>>
}
export default function ToggleButton({state, handler}: ToggleButtonProps) {
    const stateToggle = () => {
        console.log('fired')
        handler(state == 1 ? 0 : 1);
    }
    console.log('state', state)
    return (
        <div className='absolute top-4 right-5 z-10'>
            <div className='relative flex justify-between bg-green-600 rounded-[100px] w-[200px] h-8 box-border'>
                <div className='absolute bg-white rounded-[100px] h-full transition-[0.4s_ease] transform-[translateX(0)] shadow-[0_0_4px_rgba(0,0,0,0.5)]'
                     style={state ? {width: '96px', transform: 'translateX(104px)'} : {width: '80px'}}>

                </div>
                <button onClick={stateToggle} disabled={state === 0}  className='relative border-0 px-3'>
                    <span className='transition-[0.3s_ease]' style={state === 0 ? {color: '#00a63e'} : {color: '#FFF'}}>Россия</span>
                </button>
                <button onClick={stateToggle}  disabled={state === 1} className='relative border-0 px-3'>
                    <span className='transition-[0.3s_ease]' style={state === 1 ? {color: '#00a63e'} : {color: '#FFF'}}>Беларусь</span>
                </button>

            </div>
        </div>

    )
}