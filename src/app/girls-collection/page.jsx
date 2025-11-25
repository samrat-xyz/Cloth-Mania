import ClothCard from '@/components/ClothCard/ClothCard'
import Collections from '@/components/Collections/Collections'
import React from 'react'

async function page() {
    const data = await fetch("https://cloth-mania-server.vercel.app/girls-collection")
    const clothes = await data.json()
  return (
   <div className='container mx-auto'>
    <Collections></Collections>
    <h2 className="text-3xl font-bold mb-6 text-gray-800 pl-4">
        Girls Collection
      </h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {
        clothes.map(cloth => <ClothCard cloth={cloth} key={cloth._id}></ClothCard>)
      }
    </div>
   </div>
  )
}

export default page
