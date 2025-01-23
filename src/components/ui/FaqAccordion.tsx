/* eslint-disable prettier/prettier */
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export type FaqProps = {
  title: string;
  description: string;
  introText?: string;
};

export default function FaqAccordion(props: FaqProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="text-gray-light bg-white mb-5 flex cursor-pointer flex-col rounded-xl border border-[#000000] p-3"
    >
      <div className="flex flex-row items-center">
        <p
          className={
            'flex-auto flex-1 w-full text-[20px] leading-[24px] font-bold text-[#404040]'
          }
        >
          {props.title}
        </p>
        <div className="flex items-center justify-center">
          {expanded ? (
            <ArrowUpIcon className={'text-lumma-neutral w-5 h-5'} />
          ) : (
            <ArrowDownIcon className={'text-lumma-neutral w-5 h-5'} />
          )}
        </div>
      </div>
      <div
        className={`transition-max-height text-[#404040] text-[18px] font-normal font-roboto leading-[24px] overflow-hidden duration-500 ease-in-out ${
          expanded ? 'mt-4 max-h-[550px]' : 'mt-0 max-h-0'
        }`}
      >
        <div dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>
    </div>
  );
}
