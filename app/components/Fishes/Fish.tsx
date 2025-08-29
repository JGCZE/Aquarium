"use client"
import Image from 'next/image'
import React from 'react'
import useFish, { EFishSpeed } from './hook/useFish'
import clsx from 'clsx'

interface IFishProps {
  fishWidth: number
  fishSpeed: EFishSpeed
}

const Fish = ({ fishWidth, fishSpeed }: IFishProps) => {
  const { coordLeft, coordTop, isFlipped } = useFish(fishWidth, fishSpeed)

  return (
     <div 
      className={clsx("absolute", isFlipped && `rotate-y-180`)}
      style={{
        left: `${coordLeft}px`,
        top: `${coordTop}px`
      }}
    >
      <Image priority src="/fish-01.svg" width={fishWidth} height={fishWidth} alt='fish-01'/>
    </div>
  )
}

export default Fish