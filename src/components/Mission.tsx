import Image from "next/image";


export default function Mission() {
    return (
        <div className='bg-gray-200'>

            <div className=' grid grid-cols-10 gap-x-10 col-start-auto max-w-4xl mx-auto text-black pb-14'>

                <div className='col-span-10 text-center py-16 min-h-min'>
                    <h2 className='text-5xl font-semibold uppercase tracking-wider'> The National Geographic Society Mission</h2>
                    <div className='h-1 mt-5 mx-auto mb-0 w-14 bg-yellow-400 '>
                    </div>
                </div>

                <div className='col-span-6'>
                    <Image src='/selvagens.jpg' alt='' width={1440} height={300}/>
                </div>

                <div className='col-span-4 flex flex-col justify-between'>
                    <h3 className='text-4xl font-medium leading-tight mb-6 mt-3'>National Geographic’s nonprofit work</h3>
                    <p className=' text-lg'>The National Geographic Society invests in innovative leaders in science, exploration, education and storytelling to illuminate and protect the wonder of our world.</p>
                </div>
            </div>
        </div>
    )
}
