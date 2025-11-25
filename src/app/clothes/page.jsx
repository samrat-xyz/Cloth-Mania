import ClothCard from '@/components/ClothCard/ClothCard'
import React from 'react'

async function allClothes() {
    const data = await fetch('https://cloth-mania-server.vercel.app/clothes')
    const clothes = await data.json()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {
        clothes.map(cloth => <ClothCard cloth={cloth} key={cloth._id}></ClothCard>)
      }
    </div>
  )
}

export default allClothes
