'use client';

import React, { useEffect, useState } from 'react';
import Resize from '../../hooks/Resize/Resize';

interface NamePlateProps {
  title: string;
  isDrawingActive?: boolean;
  score?: number; // 점수가 있는 경우, 옵션으로 표시
  isWinner?: boolean;
  isWaiting?: boolean;
}

const NamePlate: React.FC<NamePlateProps> = ({
  title,
  score,
  isDrawingActive,
  isWinner,
  isWaiting,
}) => {
  const length = Resize();

  return (
    <div
      className={`flex items-center justify-center bg-white rounded-[5px] drop-shadow-namePlate max-w-xs p-[5px] border-2 border-neutral-default`}
      style={
        isDrawingActive
          ? {
              width: `${isWinner ? '200px' : `${length * 2}px`}`,
              height: `${length * 0.6}px`,
            }
          : isWaiting
          ? { width: `${length * 1.45}px`, height: `${length * 0.6}px` }
          : { width: `${length}px`, height: `${length * 0.7}px` }
      }
    >
      <div
        className={`border-2 border-primary-default p-1 flex rounded-[5px] items-center justify-center ${
          isDrawingActive
            ? `flex-row gap-2.5 w-[200px] px-[8px] py-[5px]`
            : `flex-col`
        }`}
        style={
          isDrawingActive
            ? {
                width: `${isWinner ? '200px' : `${length * 2}px`}`,
                height: `${length * 0.45}px`,
              }
            : isWaiting
            ? { width: `${length * 1.45}px`, height: `${length * 0.49}px` }
            : {
                width: `${length}px`,
                height: `${length * 0.56}px`,
              }
        }
      >
        <span
          className={`text-black font-bold ${
            window.innerHeight < 800 ? 'text-[10px]' : 'text-[14px]'
          } text-ellipsis whitespace-nowrap`}
          style={{
            fontSize: isWinner ? '1.4rem' : '',
          }}
        >
          {title}
        </span>
        {score !== undefined && (
          <span
            className={`text-secondary-default ${
              window.innerHeight < 800 ? 'text-[10px]' : 'text-[14px]'
            } font-bold`}
            style={{
              fontSize: isWinner ? '1.2rem' : '',
            }}
          >
            {score}점
          </span>
        )}
      </div>
    </div>
  );
};

export default NamePlate;
