import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { Line } from 'react-chartjs-2';
import reportData from '../../data/reportData.json'

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

interface ReportData {
    date: string;
    totalNumber: number;
    uniqueNumber1: number;
    uniqueNumber2: number;
}

export const Dashboard: React.FC = () => {
    const dataSource = reportData;
    const [data, setData] = useState<ReportData[]>([]);
    const arrayTitle = [
        'Data',
        'Numar utilizatori total',
        'Numar utilizatori unici',
        'Numar utilizatori unici'
    ]

    const getData = () => {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        fetch("../../data/reportData.json", { headers })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    useEffect(() => {
        getData();
    }, [])

    return <>
        <div className="container-fluid mx-auto bg-lime-color py-3 pl-12">
            <div className="flex flex-row items-center">
                <h2 className="text-2xl text-white font-semibold">Dashboard</h2>
            </div>
        </div>

        <div className="container-fluid shadowBox-segment-toolbar mx-auto bg-lime-color pl-12">
            <ul className="segmented-control">
                <li className="segmented-control-item">
                    <input className="segmented-control-input" type="radio" value="1" name="option" id="option-1" checked />
                    <label className="segmented-control-label uppercase text-sm tracking-wide" htmlFor="option-1">Chart</label>
                </li>
                <li className="segmented-control-item">
                    <input className="segmented-control-input" type="radio" value="2" name="option" id="option-2" />
                    <label className="segmented-control-label uppercase text-sm tracking-wide" htmlFor="option-2">Report</label>
                </li>
            </ul>
        </div>

        <div className="overflow-auto h-3/4">
            <div className="flex flex-row w-full items-center">
                <div className="w-full">
                    <button className="uppercase text-base font-medium mt-6 mb-3 ml-14 tracking-wide rounded-sm shadow-md px-6 py-2 bg-lime-color text-white focus:outline-none float-left">Configura raport</button>
                </div>
                <div className="w-full mt-5">
                    <div className="flex flex-col w-2/4 bg-gray-200 px-2 pt-2 pb-1 mr-20 float-right">
                        <span className="text-xs text-gray-600">Last 30 days</span>
                        <select className="w-full border-b-2 border-gray-300 pb-1 outline-none text-sm bg-gray-200">
                            <option className="text-sm">23 Aug 2018 - 21 Sep 2018</option>
                            <option className="text-sm">23 Sep 2018 - 21 Oct 2018</option>
                            <option className="text-sm">23 Oct 2018 - 21 Nov 2018</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="shadowBox ml-3 mt-3 mb-7 mr-3 w-max p-4">
                <h3 className="text-xs font-bold">Instalari pe dispozitive active</h3>
                <h1 className="text-2xl font-semibold">5,489 <span className="text-sm font-normal">+3,79% vs previous 30 days</span></h1>
            </div>


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
                            fontSize: 15
                        },
                        legend: {
                            display: false,
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    stepSize: 2500,
                                    maxTicksLimit: 5,
                                    lineHeight: 3
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