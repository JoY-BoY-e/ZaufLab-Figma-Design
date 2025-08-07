'use client'

import * as React from 'react'
import { Check } from 'lucide-react'

interface CheckboxBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const CheckboxBox = React.forwardRef<HTMLInputElement, CheckboxBoxProps>(
  ({ label, ...props }, ref) => {
    return (
      <label className='relative flex cursor-pointer items-center gap-2 text-sm text-gray-800'>
        <input
          ref={ref}
          type='checkbox'
className='peer h-5 w-5 appearance-none rounded-sm border border-gray-300 bg-white checked:bg-white focus:ring-2 focus:ring-[#FF77A5]'
          {...props}
        />
        <span className='pointer-events-none absolute left-[2px] top-[2px] hidden size-3 peer-checked:block'>
          <Check className='h-4 w-4 text-[#ce205a]' />
        </span>

        {label && <span>{label}</span>}
      </label>
    )
  }
)

CheckboxBox.displayName = 'CheckboxBox'

export { CheckboxBox }
