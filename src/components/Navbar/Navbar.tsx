import React from 'react';
import pieIcon from '../../assets/icons/pie-chart.svg'
import './Navbar.css';

export const Navbar: React.FC = () => {
    return (
        <div className="container-fluid mx-auto bg-green-700 py-3 px-6">
            <nav className="flex justify-between  items-center">
                <div className="flex flex-row items-center">
                    <img src={pieIcon} className="w-11" alt="pie-chart"/>
                    <a href="/" className="pl-4 text-xl text-white font-semibold">Page Title</a>
                </div>

                <ul className="flex flex-row">
                    <li>
                        <a href="/" className="text-lg text-white font-medium">Logout</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}