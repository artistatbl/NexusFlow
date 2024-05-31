import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

function Category({ selected }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top-left box */}
       <circle
  cx="5" // Center x-coordinate
  cy="6" // Center y-coordinate
  r="4"   // Radius
  className={clsx(
    'transition-all fill-[#5B5966] group-hover:fill-[#BD8AFF]',
    { 'fill-[#BD8AFF]': selected }
  )}
/> 
      {/* Top-right box */}
      <rect
        x="14"
        y="2"
        width="8"
        height="8"
        rx="2"
        className={clsx(
          'transition-all fill-[#5B5966] group-hover:fill-[#BD8AFF]',
          { 'fill-[#BD8AFF]': selected }
        )}
      />
      {/* Bottom-left box */}
      <rect
        x="2"
        y="14"
        width="8"
        height="8"
        rx="2"
        className={clsx(
          'transition-all fill-[#BABABB] group-hover:fill-[#7540A9]',
          { 'fill-[#7540A9]': selected }
        )}
      />
      {/* Bottom-right box */}
    

<polygon
        points="14,22 22,22 18,14"
        className={clsx(
          'transition-all fill-[#5B5966] group-hover:fill-[#BD8AFF]',
          { 'fill-[#BD8AFF]': selected }
        )}
      />
    



    </svg>
  )
}

export default Category