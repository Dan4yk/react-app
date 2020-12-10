import React from 'react';
import './Dashboard.css'
import { Line } from 'react-chartjs-2';

const state = {
    labels: ['Page A', 'Page B', 'Page C',
        'Page D', 'Page E', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
    datasets: [
        {
            label: 'Numar de utilizatori',
            backgroundColor: '#b3dec3',
            borderColor: '#a6cab3',
            borderWidth: 2,
            data: [2490, 2100, 9956, 4500, 4900, 9956, 4500, 4900, 4500, 9956]
        }
    ]
}

export const Dashboard: React.FC = () => {
    const dataSource = [
        {
            date: '21/08/2018',
            totalNumber: '79',
            uniqueNumber1: '50',
            uniqueNumber2: '39',
        },
        {
            date: '21/08/2018',
            totalNumber: '32',
            uniqueNumber1: '40',
            uniqueNumber2: '12',
        },
        {
            date: '21/08/2018',
            totalNumber: '64',
            uniqueNumber1: '10',
            uniqueNumber2: '67',
        },
        {
            date: '21/08/2018',
            totalNumber: '64',
            uniqueNumber1: '10',
            uniqueNumber2: '67',
        },
        {
            date: '21/08/2018',
            totalNumber: '64',
            uniqueNumber1: '10',
            uniqueNumber2: '67',
        },

    ]

    const arrayTitle = [
        'Data',
        'Numar utilizatori total',
        'Numar utilizatori unici',
        'Numar utilizatori unici'
    ]

    return <>
        <div className="container-fluid mx-auto bg-lime-color py-3 pl-12">
            <div className="flex flex-row items-center">
                <h2 className="text-2xl text-white font-semibold">Dashboard</h2>
            </div>
        </div>

        <div className="overflow-auto h-4/5">
            <div className="w-9/12 h-auto border m-3 shadowBox px-3">
                <h2 className="text-sm font-bold mt-4 ml-2 float-left">Numar de utilizatori</h2>
                <h2 className="text-sm font-bold mt-4 mr-6 float-right">23 Aug - 21 Sep</h2>
                <Line
                    data={state}
                    options={{
                        type: 'line',
                        responsive: true,
                        responsiveAnimationDuration: 2000,
                        title: {
                            display: true,
                            fontSize: 20
                        },
                        legend: {
                            display: false,
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    stepSize: 2500
                                },
                                gridLines: {
                                    borderDash: [3]
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    borderDash: [3]
                                }
                            }]
                        }
                    }}
                />
            </div>

            <div className="bg-white m-3 px-5 shadowBox w-9/12">
                <table>
                    <tr className="borderBottom">
                        {arrayTitle.map((title) => {
                            return (
                                <th className="text-base text-left px-8 pt-4 pb-1">{title}</th>
                            )
                        })}
                    </tr>

                    {dataSource.map((value) => {
                        return (
                            <tr className="borderBottom">
                                <td className="text-sm text-left px-8 py-4">{value.date} </td>
                                <td className="text-sm text-left px-8 py-4">{value.totalNumber}</td>
                                <td className="text-sm text-left px-8 py-4">{value.uniqueNumber1}</td>
                                <td className="text-sm text-left px-8 py-4">{value.uniqueNumber2}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    </>
}