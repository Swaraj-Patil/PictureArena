import React, { FC } from 'react'

interface TypographyProps {
    title: string;
    description?: string;
}

const Typography: FC<TypographyProps> = ({ title, description}) => {
    return (
        <div>
            <p className='font-bold text-3xl'>{title}</p>
            {description && <p className='text-grey-60 text-md mt-4'>{description}</p>}
        </div>
    )
}

export default Typography