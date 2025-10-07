import React from "react";

type GlassCardProps = {
    title?: string;
    text?: string;
    imageSrc: string;
    rounded?: boolean;
    styles?: React.CSSProperties;
    tailwindStyles?: string;
}

export default function GlassCard(props: GlassCardProps) {
    return (
        <div
            className={`${props.tailwindStyles ?? ''} p-4 flex flex-col w-[240px] items-center gap-4 relative h-fit rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.3)] backdrop-blur-sm bg-[rgba(255,255,255,0.3)] overflow-hidden border-[1px] border-[rgba(255,255,255,0.4)]`}
            style={props.styles ?? {}}
        >
            <img className={`${props.rounded ? 'rounded-full' : ''} h-[120px]`} src={props.imageSrc} alt='' />
            {props.title ? <span className='text-green-800 text-lg font-medium max-w-[180px] text-center'>{props.title}</span> : null}
            {props.text ? <p className={'text-[#393939]'}>{props.text}</p> : null}


        </div>
    )
}