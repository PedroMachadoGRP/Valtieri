import React, { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card({}:CardProps) {
  return (
    <div className='bg-[--color-surface] border rounded-[--radius] p-[--space-2]'>

    </div>
  )
}
