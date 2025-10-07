import React from "react";

type GlassCardProps = {
    title: string;
    text?: string;
    imageSrc: string;
    rounded?: boolean;
    styles?: React.CSSProperties;
    tailwindStyles?: string;
}

export default function GlassCard(props: GlassCardProps) {
    return (
        <div
            className={`${props.tailwindStyles ?? ''} flex flex-col w-[100px] gap-4 relative h-fit rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.3)] backdrop-blur-sm bg-[rgba(255,255,255,0.3)] overflow-hidden border-[1px] border-[rgba(255,255,255,0.4)]`}
            style={props.styles ?? {}}
        >
            <img className={`${props.rounded ? 'rounded-full' : ''} size-14`} src={props.imageSrc} alt='' />
            <title className='text-green-800 text-3xl'>{props.title}</title>
            {props.text ? <p className={'text-[#393939]'}>{props.text}</p> : null}


        </div>
    )
}