'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

interface AmountRangeSelectorProps {
  value: number[]
  min?: number
  max?: number
  step?: number
  className?: string
}

const AmountRangeSelector: React.FC<AmountRangeSelectorProps> = ({
  value,
  min = 0,
  max = 10000,
  step = 100,
  className = '',
}) => {
  return (
    <div className={` ${className} py-2`}>
      <div className='relative w-full'>
        <SliderPrimitive.Root
          className='relative flex w-full touch-none select-none items-center'
          min={min}
          max={max}
          step={step}
          value={value}
        >
          <SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-[#E6E6E6]'>
            <SliderPrimitive.Range className='absolute h-full bg-[#FF77A5]' />
          </SliderPrimitive.Track>

          {value.map((val, index) => {
            const percent = ((val - min) / (max - min)) * 100

            return (
              <React.Fragment key={index}>
                <SliderPrimitive.Thumb className='transition-all duration-200 ease-in-out relative z-10 block size-4 rounded-full border-4 border-white bg-[#FF77A5] shadow-md focus:outline-none p-[6px]' />
                <div
                  className='text-gray-700 absolute top-6 text-xs'
                  style={{ left: `calc(${percent}% - 22px)` }}
                >
                  ${val}
                </div>
              </React.Fragment>
            )
          })}
        </SliderPrimitive.Root>
      </div>
    </div>
  )
}

export default AmountRangeSelector
