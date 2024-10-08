import React from 'react';

interface SpeechBubbleProps {
  title?: string;
  children?: React.ReactNode;
  isAvatarSelected: boolean;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  title,
  children,

  isAvatarSelected,
}) => {
  return (
    <div
      className={`mt-3.5 relative ${
        isAvatarSelected
          ? 'max-w-[520px]'
          : 'w-[180px] top-1 left-1/2 transform -translate-x-1/2'
      }  bg-white p-[20px] rounded-[5px] shadow-md border-black border-4`}
    >
      <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-[4px] border-4 border-b-0 border-r-0 border-black rotate-45"></div>
      {isAvatarSelected ? (
        <div className="flex justify-center">{children}</div>
      ) : (
        <div className="w-[180px] flex flex-col items-start gap-[10px]">
          <h3 className="text-base font-cherry">{title}</h3>
          <p className="text-black text-xs font-bold">{children}</p>
        </div>
      )}
    </div>
  );
};

export default SpeechBubble;
