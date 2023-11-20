import { Link } from "react-router-dom";
// import { links } from "./MyLinks";
import { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";


const NavLinks = () => {

    const [heading, setHeading] = useState();
    const [subHeading, setSubHeading] = useState()

    const links = [
        {name: 'Women', submenu: true, sublinks: []}
    ]

    return (
        <>
            {
                links.map((link) => (
                    <div key={link.name}>
                        <div className="px-3 text-left md:cursor-pointer group">
                            <h1 className="py-5 flex justify-between items-center md:pr-0 pr-5 group" onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading('');
                                setSubHeading('')
                            }}>
                                {link.name}
                                <span className="text-xl md:hidden md:ml-2 inline">

                                    {
                                        heading === link.name ? <IoChevronUpOutline /> : <IoChevronDownOutline />
                                    }
                                </span>
                                <span className="text-xl md:mt- md:ml-2 md:block hidden group-hover:rotate-180 duration-100">

                                    {
                                        heading === link.name ? <IoChevronUpOutline /> : <IoChevronDownOutline />
                                    }
                                </span>
                            </h1>
                            {link.submenu && (
                                <div>
                                    <div className="absolute top-20 hidden group-hover:md:block hover:md:block ">
                                        <div className="py-3">
                                            <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45">

                                            </div>
                                        </div>
                                        <div className="bg-white p-5 grid grid-cols-3 gap-12 rounded-lg">
                                            {
                                                link.sublinks.map((mysublinks) => (
                                                    <div key={mysublinks}>
                                                        <h1 className="text-lg font-semibold">{mysublinks.Head}
                                                        </h1>
                                                        {mysublinks.sublink.map((slink) => (
                                                            <li key={slink.name} className="text-sm text-gray-600 my-2.5">
                                                                <Link className="hover:text-primary"
                                                                    to={slink.link}>{slink.name}</Link>
                                                            </li>
                                                        ))}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>

                        {/* Mobile Menu */}
                        <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
                            {
                                link.sublinks.map((slinks) => (
                                    <div key={slinks}>
                                        <div>
                                            <h1 onClick={() => {
                                                subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading('');
                                            }}
                                                className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center">{slinks.Head}
                                                <span className="text-xl md:mt-2 md:ml-2 inline">

                                                    {
                                                        subHeading === slinks.Head ? <IoChevronUpOutline /> : <IoChevronDownOutline />
                                                    }
                                                </span>
                                            </h1>
                                            <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                                                {slinks.sublink.map((slink) => (
                                                    <li key={slink} className="py-3 pl-14">
                                                        <Link className="hover:text-primary" to={slink.link}>{slink.name}</Link>
                                                    </li>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default NavLinks;