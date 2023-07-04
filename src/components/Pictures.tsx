import Image from 'next/image'
import React from 'react'

export default function Pictures() {
  return (
    <div>
    <div className='relative text-center  text-yellow-500 mx-auto  '>
      <div className='absolute py-16  my-10 w-fit px-16 flex-col'>
        <h2 className='uppercase font-normal text-5xl mb-5'>The real-life MacGyver in Nat Geo’s basement</h2>
        <div className='mt-32 text-lg '>
          How do you photograph beavers under ice—something no one’s ever done before? You enlist the help of Nat Geo’s gadget guru, aka Tom O’Brien,
          whose job is to figure out how to capture images and sounds that have never been seen or heard.
        </div>
        <div className='mt-16'>
          <button className='bg-yellow-400 p-3 text-black text-lg font-medium hover:bg-white'>Listen on Apple Podcasts</button>
        </div>
      </div>
      <Image src='/block.jpg' alt='' width={1440} height={300}/>
    </div>
  </div>
  )
}
