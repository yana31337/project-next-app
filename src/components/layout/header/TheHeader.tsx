import Link from "next/link";
import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const TheHeader: FC = () => {

    // const { pathname } = useRouter()

    return (
        <header className='text-sm px-4 h-12 flex flex-row justify-between items-center bg-white'>
            <Link href='/'
            // className={pathname === '/' ? active : ''} 
            >
                <img src='../ng-logo.png' alt="logo" className='h-8 my-2' />
            </Link>
            <div className="flex flex-row items-center justify-end min-h-min">
                <Link href='/login' className='bg-none mr-4  text-sm font-sans font-medium uppercase tracking-widest'
                //  className={pathname === '/about' ? styles.active : ''}
                >
                    Login
                </Link>
                <Link href='#' className="mr-4">
                    <Image src='../search.svg' alt="search" width={20} height={20} />
                </Link>
                <Link href='/newsletters' className='mr-4 text-sm underline decoration-yellow-500 decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400'>
                    Newsletters
                </Link>
                <Link href='/subscribe' className='mr-4 text-white text-xs bg-black p-4 px-5 uppercase h-full  hover:bg-yellow-400 hover:text-black'>
                    Subscribe
                </Link>
                <button className='bg-none flex flex-row'>
                    Menu
                    <Image src='/doubleDown.png' alt='doubleDown' className="ml-2 my-1" width={16} height={16} />
                </button>
            </div>
        </header>
    )
}

export default TheHeader;