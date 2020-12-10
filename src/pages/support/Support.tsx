import React from 'react';

export const Support: React.FC = () => {
    const arrayObjects = [
        {
            name: 'John',
            surname: 'Doe',
            idnp: '2008009048000589',
            phone: '+373 789 678232',
            panCard: '2019 3820 2323 4477',
            createdAt: '14:45 12/12/18'
        },
        {
            name: 'John',
            surname: 'Doe',
            idnp: '2008009048000589',
            phone: '+373 789 678232',
            panCard: '2019 3820 2323 4477',
            createdAt: '14:45 12/12/18'
        },
        {
            name: 'John',
            surname: 'Doe',
            idnp: '2008009048000589',
            phone: '+373 789 678232',
            panCard: '2019 3820 2323 4477',
            createdAt: '14:45 12/12/18'
        }
    ]

    const arrayTitle = [
        'Name Surname',
        'IDNP',
        'Phone',
        'PAN Card',
        'Last transaction'
    ]

    return <>
        <div className="container-fluid mx-auto bg-lime-color py-3 pl-12">
            <div className="flex flex-row items-center">
                <h1 className="text-2xl text-white font-semibold">Support</h1>
            </div>
        </div>


        <form>
            <h2 className="pl-12 pt-8 text-lg font-bold">Search user:</h2>
            <div className="flex flex-row items-center">
                <div className="pl-12 py-2">
                    <label className="block text-sm font-normal text-gray-500" htmlFor="username">IDNP</label>
                    <input className="text-sm w-44 py-2 mb-4 border-b-2 border-gray-500 outline-none" type="text" name="username" />
                </div>

                <div className="pl-5 py-2">
                    <label className="block text-sm font-normal text-gray-500" htmlFor="username">Phone</label>
                    <input className="text-sm w-44 py-2 mb-4 border-b-2 border-gray-500 outline-none" type="text" name="username" />
                </div>

                <div className="pl-5 py-2">
                    <label className="block text-sm font-normal text-gray-500" htmlFor="username">Access date</label>
                    <input className="text-sm w-44 py-2 mb-4 border-b-2 border-gray-500 outline-none" type="text" name="username" />
                </div>

                <div className="pl-5 py-2">
                    <button className="bg-lime-color px-10 py-2 rounded-sm shadow-md text-white text-base uppercase">Search</button>
                </div>
            </div>
        </form>

        <div className="p-4">
            <h2 className="px-8 pb-2 text-lg font-bold">Search results: John Doe</h2>
            <table className="">
                <tr style={{ borderBottom: '1px solid #dddddd' }}>
                    {arrayTitle.map((title) => {
                        return (
                            <th className="text-base text-left px-8 py-4">{title}</th>
                        )
                    })}
                </tr>

                {arrayObjects.map((value) => {
                    return (
                        <tr style={{ borderBottom: '1px solid #dddddd' }}>
                            <td className="text-sm text-left px-8 py-4 underline">{value.name + ' ' + value.surname} </td>
                            <td className="text-sm text-left px-8 py-4">{value.idnp}</td>
                            <td className="text-sm text-left px-8 py-4">{value.phone}</td>
                            <td className="text-sm text-left px-8 py-4">{value.panCard}</td>
                            <td className="text-sm text-left px-8 py-4">{value.createdAt}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    </>;
}