import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import Button from '../button';
import { IoClose, IoMenu } from "react-icons/io5"
import { useEffect, useState } from 'react';
import { FaBlog } from "react-icons/fa";

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [sticky, setSticky] = useState(false);

    // To show the navbar shadow after scroll
    useEffect(() => {
        const handelScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handelScroll)
        return () => {
            window.addEventListener('scroll', handelScroll)
        }
    }, []);

    const navItems = [
        { link: "Home", path: '/' },
        { link: "Shop", path: '/shop' },
        { link: "Sell Your Book", path: '/sell-a-book' },
        { link: "About", path: '/about' },
        { link: "Blog", path: '/blog' },
    ]


    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 '>
            <nav className={` ${sticky ? "sticky top-0 left-0 right-0 transition-all ease-in duration-300 bg-white" : ""} `}>
                <div className='flex items-center font-medium justify-around'>
                    <div className='flex items-center justify-between z-50 md:w-auto w-full p-5 md:p-0'>
                        <div className='flex items-center'>

                            <Link to='/' className={`text-3xl font-bold flex items-center gap-2  ${sticky ? 'text-blue-700': 'text-blue-700'}`}><FaBlog className='inline-block' />Books</Link>
                        </div>
                        <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
                            {
                                open ? <IoClose /> : <IoMenu />
                            }
                        </div>
                    </div>
                    <ul className='md:flex hidden uppercase items-center gap-8 font-mono'>
                        {/* <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            <h1>Home</h1>
                        </Link>
                    </li> */}
                        {
                            navItems.map(({ link, path }) => <li key={path} className={`py-5 px-3 inline-block`}><Link to={path}>{link}</Link></li>)
                        }
                        <NavLinks />
                    </ul>
                    <div className='md:block hidden'>
                        <Button></Button>
                    </div>

                    {/* Mobile Nav */}
                    <ul className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] -z-10"}
        `}>
                        {/* <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            Home
                        </Link>
                    </li> */}
                        {
                            navItems.map(({ link, path }) => <li className='py-7 px-3' key={path}><Link to={path}>{link}</Link></li>)
                        }
                        <NavLinks />
                        <div className='py-5'>
                            <Button></Button>
                        </div>
                    </ul>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;