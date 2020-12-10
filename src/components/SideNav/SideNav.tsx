import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { IoIosSpeedometer } from 'react-icons/io';
import { GrSupport } from 'react-icons/gr';
import './SideNav.css';

import { Dashboard } from '../../pages/dashboard/Dashboard';
import { Support } from '../../pages/support/Support';

export const SideNav: React.FC = () => {
    return (
        <div className="flex flex-row h-full">
            <div className="container w-1/5 separate-right-line">
                <ul className="px-5">
                    <li className="p-3 text-left flex flex-row items-center">
                        <IoIosSpeedometer fontSize="24" />
                        <NavLink to="/dashboard" className="pl-3 text-base">Dashboard</NavLink>
                    </li>
                    <li className="p-3 text-left flex flex-row items-center">
                        <GrSupport fontSize="24" />
                        <NavLink to="/support" className="pl-3 text-base">Support</NavLink>
                    </li>
                </ul>
            </div>

            <div className="w-full">
                <Switch>
                    <Route component={Dashboard} path="/dashboard" exact />
                    <Route component={Support} path="/support" />
                </Switch>
            </div>
        </div>
    );
}