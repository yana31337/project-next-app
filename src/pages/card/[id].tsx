import { NextPage } from "next";

const CardPage: NextPage = () => {
    return (
        <div className='flex flex-row mb-5'>
            <img src='' alt='Image' className='h-24 w-24 mr-5' />
            <div>
                <a href="#" className=''>
                    <div className='tracking-wider text-sm pb-1'>title</div>
                    <div className=' text-base tracking-wide hover:underline'>Description</div>
                </a>
            </div>
        </div>
    )
}

export default CardPage