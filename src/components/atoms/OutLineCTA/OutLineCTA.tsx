import { LimeRightArrowIcon } from '@/assets/images';
interface OutlineCTAProps {
  leftArrow?: boolean;
  rightArrow?: boolean;
  text: string;
  isDisabled?: boolean;
}

export function OutLineCTA({ leftArrow, rightArrow, text, isDisabled }: OutlineCTAProps) {
  return (
    <button
      className={`flex gap-2 items-start ${
        !isDisabled ? 'cursor-pointer text-white' : 'cursor-not-allowed text-grey600'
      }`}
      disabled={isDisabled}
    >
      {leftArrow && <LimeRightArrowIcon className="rotate-180" />}
      <div className="underline underline-offset-2 font-body text-[14px] leading-[14px]">
        {text}
      </div>
      <div className={`${isDisabled && 'opacity-30'}`}>{rightArrow && <LimeRightArrowIcon />}</div>
    </button>
  );
}
