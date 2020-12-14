import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { IoIosSpeedometer } from 'react-icons/io';
import { HiOutlineSupport } from 'react-icons/hi';
import './SideNav.css';

import { Dashboard } from '../../pages/dashboard/Dashboard';
import { Support } from '../../pages/support/Support';

export const SideNav: React.FC = () => {
    return (
        <div className="flex h-full">
            <div className="flex-1 container max-w-max separate-right-line h-full">
                <ul className="pl-5 pr-20">
                    <li className="p-3 text-left  items-center">
                        <NavLink
                            to="/dashboard"
                            className="text-base font-medium w-full flex flex-row"
                            activeClassName="active"
                        >
                            <IoIosSpeedometer fontSize="24" className="mr-3" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="p-3 text-left items-center">
                        <NavLink
                            to="/support"
                            className="text-base font-medium w-full flex flex-row"
                            activeClassName="active">
                            <HiOutlineSupport fontSize="24" className="mr-3" />
                            Support
                        </NavLink>
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