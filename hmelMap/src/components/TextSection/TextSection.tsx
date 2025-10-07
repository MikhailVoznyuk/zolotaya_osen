type TextSectionProps = {
    title?: string;
    content?: string;
}

export default function TextSection({title, content}: TextSectionProps) {
    return (
        <div className='flex flex-col justify-center items-center gap-5 mt-4 my-8'>
            <h3 className='text-green-600 text-4xl max-w-[800px] font-bold text-center'>{title}</h3>
            <p className={'max-w-[1000px] text-center text-2xl text-[#393939]'}>{content}</p>
        </div>
    )
}