import Image from "next/image";


export default function SingUp() {
    return (
        <main>
            <div className='relative text-center  text-white mx-auto  '>
                <div className='absolute py-10   px-16 text-gray-100'>
                    <h2 className='uppercase font-normal text-5xl mb-1'>The best of National Geographic delivered to your inbox</h2>
                    <div className='mt-5 text-lg '>
                        Sign up for more inspiring photos, stories, and special offers from National Geographic.
                    </div>
                    <div className='mt-16'>
                        <button className='bg-yellow-300 p-3 text-black text-lg font-medium hover:bg-white uppercase'>Sing Up</button>
                    </div>
                </div>
                {/* <Image src='/forest.jpg' alt='' width={1440} height={384}/> */}
                <img src='/forest.jpg' alt="" className=' max-h-96 w-full ' />
            </div>
        </main>
    )
}
