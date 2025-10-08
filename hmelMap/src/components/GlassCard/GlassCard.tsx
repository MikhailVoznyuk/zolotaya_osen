import React from "react";

type GlassCardProps = {
    title?: string;
    text?: string;
    imageSrc: string;
    rounded?: boolean;
    styles?: React.CSSProperties;
    tailwindStyles?: string;
    horizontal?: boolean;
    imgFull?: boolean;
}

export default function GlassCard(props: GlassCardProps) {
    if (props.horizontal) {
        return (
            <div
                className={`${props.tailwindStyles ?? ''} p-2 flex flex-row max-w-[600px] items-start gap-4 relative h-fit rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.3)] backdrop-blur-sm bg-[rgba(255,255,255,0.3)] overflow-hidden border-[1px] border-[rgba(255,255,255,0.4)]`}
                style={props.styles ?? {}}
            >
                <img className={`${props.rounded ? 'rounded-xl' : ''} ${props.imgFull ? 'w-full rounded-2xl' : 'h-[120px]'} `} src={props.imageSrc} alt='' />
                <div className='flex flex-col gap-0'>
                    {props.title ? <span className='text-green-800 text-lg font-medium max-w-[200px] text-start'>{props.title}</span> : null}
                    {props.text ? <p className={'max-w-[240px] text-[#393939]'}>{props.text}</p> : null}
                </div>



            </div>
        )
    } else {
        return (
            <div
                className={`${props.tailwindStyles ?? ''} flex flex-col ${props.imgFull ? 'w-[320px] p-3' : 'w-[240px] p-4'}  items-center gap-4 relative h-fit rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.3)] backdrop-blur-sm bg-[rgba(255,255,255,0.3)] overflow-hidden border-[1px] border-[rgba(255,255,255,0.4)] transition-[0.4s_ease] hover:bg-[rgba(0,166,62,0.2)] hover:text-white transform-[scale(1)] hover:transform-[scale(1.05)]`}
                style={props.styles ?? {}}
            >
                <img className={`${props.rounded ? 'rounded-full' : ''}  ${props.imgFull ? 'w-full rounded-2xl' : 'h-[120px]'}`} src={props.imageSrc} alt='' />
                <div className='flex flex-col items-center gap-1'>
                    {props.title ? <span className='text-green-800 text-lg font-medium max-w-[180px] text-center'>{props.title}</span> : null}
                    {props.text ? <p className={`text-[#393939] ${props.imgFull ? 'text-center' : ''}`}>{props.text}</p> : null}
                </div>



            </div>
        )
    }

}