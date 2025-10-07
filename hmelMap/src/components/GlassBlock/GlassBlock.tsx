type GlassBlockProps = {
    title: string;
    text: string;
    size?: 'sm' | 'lg',
}

export default function GlassBlock({title, text, size='sm'} : GlassBlockProps) {
    return (
        <div
            style={size === 'sm' ? {maxWidth: '340px'} : {maxWidth: '1000px'}}
            className={`relative h-fit  rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.3)] backdrop-blur-sm bg-[rgba(255,255,255,0.3)] overflow-hidden border-[1px] border-[rgba(255,255,255,0.4)]`}>
            <div className='bg-green-600 relative top- left-0 right-0 px-2 py-1.5 rounded-tl-2xl rounded-br-2xl w-fit'>
                <h5 className='m-0 text-white text-2xl'>{title}</h5>
            </div>
            <p className='px-4  pb-4 pt-3 text-black'>{text}</p>

        </div>

    )
}