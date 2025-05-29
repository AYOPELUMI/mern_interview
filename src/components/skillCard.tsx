import React from 'react';

interface SkillCardProps {
    icon: React.ComponentType<{ className?: string }>; // Accepts any component that takes a className prop
    heading: string;
    paragraph: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, heading, paragraph }) => {
    return (
        <div className='flex pt-2.5 pb-8'>
            <div className='pb-1.5'>
                <Icon className='text-[#007ced] size-8' />
            </div>
            <div className='pl-[15px]'>
                <h2 className='text-base mb-1.5 leading-[1.2] font-semibold text-[#f5f5f5]'>
                    {heading}
                </h2>
                <p className='text-[.92em] font-normal leading-[1.75em] text-[#d5d5d5] text-wrap break-all'>
                    {paragraph}
                </p>
            </div>
        </div>
    );
};

export default SkillCard;