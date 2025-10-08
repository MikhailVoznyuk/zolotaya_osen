import React from 'react'

type TextSectionProps = {
    title?: string;
    content?: string;
    children?: React.ReactNode;
}

export default function TextSection({title, content, children}: TextSectionProps) {
    return (
        <div className='flex flex-col justify-center items-center gap-5 mt-4 my-8 mx-2'>
            <h3 className='text-green-600 text-4xl max-w-[800px] font-bold text-center'>{title}</h3>
            <p className={'max-w-[1000px] text-center text-2xl text-[#393939]'}>{content}</p>
            {children}
        </div>
    )
}