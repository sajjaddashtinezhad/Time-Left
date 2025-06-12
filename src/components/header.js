import React, { useState } from "react";
import Logo from '../images/timeleft-with-text.svg';
import Menu from '../images/menu.svg';
import Right from '../images/right.svg';
import { Link } from "gatsby"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between gap-10 bg-gray-800 pb-9">
            {/* Logo */}
            <div >
                <img src={Logo} alt="Time Left Logo" className="mx-auto h-12" />
            </div>

            {/* Menu Icon */}
            <button
                className="focus:outline-none cursor-pointer"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
            >
                <img src={Menu} alt="Menu Icon" className="w-6 h-6" />
            </button>

            {/* Slide-in Menu */}
            <div
                className={`absolute top-0 right-0 h-full w-full bg-gray-800/70 backdrop-blur-xl transform transition-transform duration-300 z-50 ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button
                    className="mt-8 w-full focus:outline-none cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <div className="bg-gray-600/40 ml-8 p-4 rounded-l-full">
                        <img src={Right} alt="Close Menu Icon" className="w-6 h-6" />
                    </div>
                </button>
                <div className="flex flex-col gap-8">
                    <nav className="mt-8 flex flex-col space-y-4 px-8">
                        <Link to="/" className="text-white">Home</Link>
                        <Link to="/why" className="text-white">Why I Created This?</Link>
                        <a href="https://sajjaddashti.ir/" className="text-white">About Me</a>
                    </nav>
                    <div className="px-8">
                        <p className='text-gray-500 text-sm mb-2'>All data is taken from <a className='underline' href='https://www.worldometers.info/demographics/life-expectancy/'>worldometers.info</a></p>
                        <p className='text-gray-500 text-sm'>Made by love by <a href="https://sajjaddashti.ir/" className="underline">Sajjad Dashti</a></p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;