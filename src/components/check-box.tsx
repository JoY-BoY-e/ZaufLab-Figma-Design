'use client'

import * as React from 'react'
import { Check } from 'lucide-react'

interface CheckboxBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const CheckboxBox = React.forwardRef<HTMLInputElement, CheckboxBoxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className={`relative flex items-center ${className || ''}`}>
        <input
          ref={ref}
          type='checkbox'
          className='peer h-5 w-5 appearance-none rounded-sm border-2 border-gray-300 bg-white checked:bg-[#FF77A5] checked:border-[#FF77A5] focus:ring-2 focus:ring-[#FF77A5] focus:ring-opacity-50 focus:outline-none transition-all cursor-pointer'
          {...props}
        />
        <span className='pointer-events-none absolute left-[2px] top-[2px] hidden size-3 peer-checked:block'>
          <Check className='h-4 w-4 text-white' strokeWidth={3} />
        </span>

        {label && (
          <label 
            htmlFor={props.id} 
            className="ml-3 text-sm font-normal text-gray-800 cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

CheckboxBox.displayName = 'CheckboxBox'

export { CheckboxBox }
