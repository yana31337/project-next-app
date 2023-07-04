

export default function TheFooter() {
    return (
        <footer className='bg-black text-white '>

            <div className='grid grid-cols-4 gap-4 py-5 px-5'>

                <div className='uppercase font-medium '>
                    Legal
                </div>
                <div className='uppercase font-medium'>
                    Our Sites
                </div>
                <div className='uppercase font-medium'>
                    Join Us
                </div>
                <div className='uppercase font-medium'>
                    Follow us
                </div>

                <div className='flex flex-col  text-sm'>
                    <a href="#" className='hover:underline pb-1'> Terms of Use</a>
                    <a href="#" className='hover:underline pb-1'> Privacy Policy</a>
                    <a href="#" className='hover:underline pb-1'> Your California Privacy Rights</a>
                    <a href="#" className='hover:underline pb-1'> Children's Online Privacy Policy</a>
                    <a href="#" className='hover:underline pb-1'> Interest-Based Ads</a>
                    <a href="#" className='hover:underline pb-1'> About Nielsen Measurement</a>
                    <a href="#" className='hover:underline pb-1'> Do Not Sell My Info</a>
                </div>

                <div className='flex flex-col text-sm'>
                    <a href="#" className='hover:underline pb-1'>  Nat Geo Home</a>
                    <a href="#" className='hover:underline pb-1'> Attend a Live Event</a>
                    <a href="#" className='hover:underline pb-1'> Book a Trip</a>
                    <a href="#" className='hover:underline pb-1'> Buy Maps</a>
                    <a href="#" className='hover:underline pb-1'> IInspire Your Kids</a>
                    <a href="#" className='hover:underline pb-1'> Shop Nat Geo</a>
                    <a href="#" className='hover:underline pb-1'> Visit the D.C. Museum</a>
                    <a href="#" className='hover:underline pb-1'> Watch TV</a>
                    <a href="#" className='hover:underline pb-1'> Learn About Our Impact</a>
                    <a href="#" className='hover:underline pb-1'> Support our Mission</a>
                    <a href="#" className='hover:underline pb-1'> Nat Geo Partners</a>
                    <a href="#" className='hover:underline pb-1'> Masthead</a>
                    <a href="#" className='hover:underline pb-1'> Press Room</a>
                    <a href="#" className='hover:underline pb-1'> Advertise With Us</a>
                </div>

                <div className='flex flex-col text-sm'>
                    <a href="#" className='hover:underline pb-1'> Subscribe</a>
                    <a href="#" className='hover:underline pb-1'> Customer Service</a>
                    <a href="#" className='hover:underline pb-1'> Renew Subscription</a>
                    <a href="#" className='hover:underline pb-1'> Manage Your Subscription</a>
                    <a href="#" className='hover:underline pb-1'> Work at Nat Geo</a>
                    <a href="#" className='hover:underline pb-1'> Sign up for Our Newsletters</a>
                    <a href="#" className='hover:underline pb-1'> Contribute to Protect the Planet</a>
                    <a href="#" className='hover:underline pb-1'> Pitch a Story</a>
                </div>

                <div>
                    <div className='flex flex-row w-2/6 justify-between '>
                        <a href="#"><img src='../facebook.svg' alt="facebook" className='w-6 h-6' /></a>
                        <a href="#"><img src='../twitter.svg' alt="twitter" className='w-6 h-6' /></a>
                        <a href="#"><img src='../instagram.svg' alt="instagram" className='w-6 h-6' /></a>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
            <hr className='border-gray-500' />
            <div className='bg-black h-10'>
            </div>

        </footer>
    )
}

