import Image from 'next/image'
import React from 'react'
import Fish from './Fishes/Fish'

const WaterBackGround = () => {
  return (
    <div 
      className='bg-cover bg-center bg-no-repeat opacity-80 relative h-[calc(100vh-80px)]'
      style={{ 
        backgroundImage: 'url(/water.jpg)',
      }}
    >
      <Fish fishWidth={260} fishSpeed={3}/>
       
      <div className='absolute bottom-40'>
        <Image src="/fish-01.svg" width={100} height={100} alt='fish-01'/>
      </div>
    </div>
  )
}

export default WaterBackGround