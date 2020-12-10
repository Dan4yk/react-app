import React from 'react';
import './Dashboard.css'

export const Dashboard: React.FC = () => {
    return <>
        <div className="container-fluid mx-auto bg-lime-color py-3 pl-12">
            <div className="flex flex-row items-center">
                <h2 className="text-2xl text-white font-semibold">Dashboard</h2>
            </div>
        </div>
    </>
}