import Image from "next/image"

export default function Movies() {
    return (
        <div className=' bg-black'>
            <div className='h-auto  text-center text-white  max-w-3xl mx-auto pb-16 px-10'>
                <div className='text-9xl'>
                    Movie
                </div>
                <div className='uppercase text-2xl mb-9 mt-24' >
                    LIMITLESS WITH CHRIS HEMSWORTH
                </div>
                <div className='text-base mb-6'>
                    What if you could combat aging and discover the full potential of the human body? With the help of world-class experts, family, and friends, Chris Hemsworth is embarking on a series of immense challenges to push himself to new limits and stop the diseases of old age before they take hold.
                </div>
                <div className='mx-auto uppercase text-lg decoration-yellow-500 underline decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400 hover:text-black px-1 max-w-max'>
                    STREAMING ON DISNEY+
                </div>
                <div>
                    <div className='flex flex-row justify-between mt-8'>
                        <div>
                            <a href="#" className='text-lg font-bold'>Discover More on Disney+</a>
                        </div>
                        <div>
                            <a href="#" className='uppercase text-sm font-medium tracking-wide underline decoration-yellow-500 decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400 hover:text-black'>See More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-evenly mx-12 px-5 items-center mb-10'>
                <a href="#">
                    <Image src='/movie_1.jpg' alt="" width={176} height={256} />
                </a>
                <a href="#">
                    <Image src='/movie_2.jpg' alt="" width={176} height={256} />
                </a>
                <a href="#">
                    <Image src='/movie_1.jpg' alt="" width={176} height={256} />
                </a>
                <a href="#">
                    <Image src='/movie_2.jpg' alt="" width={176} height={256} />
                </a>
                <a href="#">
                    <Image src='/movie_1.jpg' alt="" width={176} height={256} />
                </a>
                <div>
                    <button>
                        <Image src='/chevronRight.png' alt="" width={12} height={24} className="text-white " />
                    </button>
                </div>
            </div>
            <div className='h-auto text-white pb-10'>

                <div className='mb-10'>
                    <div className='uppercase text-5xl text-center '>
                        Nat Geo TV
                    </div>
                    <div className='h-1 mt-5 mx-auto mb-0 w-14 bg-yellow-400 '>
                    </div>
                </div>

                <div className='flex flex-row items-center max-w-5xl mx-auto' >
                    <div>
                        <button>
                            <Image src='/leftChevron.png' alt="" width={20} height={24} className="text-white " />
                        </button>
                    </div>
                    <div className='relative flex flex-row items-center '>
                        <a href="#">
                            <Image src='/cousteau.jpg' alt="" width={384} height={520} className="text-white z-0" />
                        </a>
                        <a href="#">
                            <Image src='/freeSolo.jpg' alt="" width={384} height={520} className="text-white z-0" />
                        </a>
                        <a href="#">
                            <Image src='/cousteau.jpg' alt="" width={384} height={520} className="text-white z-0" />
                        </a>
                        <a href="#">
                            <Image src='/freeSolo.jpg' alt="" width={384} height={520} className="text-white z-0" />
                        </a>
                        <a href="#">
                            <Image src='/cousteau.jpg' alt="" width={384} height={520} className="text-white z-0" />
                        </a>
                    </div>

                    <div>
                        <button>
                        <Image src='/chevronRight.png' alt="" width={20} height={24} className="text-white " />
                        </button>
                    </div>

                </div>
            </div>
            <div className='h-auto text-white text-center text-3xl pb-10'>
                Gallery
            </div>
        </div>
    )
}
