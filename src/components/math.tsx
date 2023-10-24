"use client";
import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}



export default function Math() {
    const [isAll, setIsAll] = useState(false)
    const [isCT, setIsCT] = useState(false)
    const [isEO, setIsEO] = useState(false)
    const [industry, setIndustry] = useState('$500000')
    const [totalRevenue, setTotalRevenue] = useState('$500000')
    const [operatingMargin, setOperatingMargin] = useState('7.5%')
    const [contractDuration, setContractDuration] = useState('5')
    const [noOfEmployees, setNoOfEmployees] = useState('10000')
    const [noOfSalesEmployees, setNoOfSalesEmployees] = useState('8.0%')
    const [revenueSalesEmployees, setRevenueSalesEmployees] = useState('$10000')
    const [employeeTurnover, setEmployeeTurnover] = useState('77.1%')
    const [noNewHires, setNoNewHires] = useState('7710')
    const [noNewCustomers, setNoNewCustomers] = useState('10000')
    const [revenueCustomers, setRevenueCustomers] = useState('6.0%')
    const [revenueSalesUpsell, setRevenueSalesUpsell] = useState('20.0%')
    const [revenueCustomerTraining, setRevenueCustomerTraining] = useState('10.0%')
    const [userFee, setUserFee] = useState('$20')
    const Conservative = {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
          text: 'Conservative'
        },
        series: [{
            name: 'Medals',
            data: [
                ['Norway', 16],
                ['Germany', 12],
                ['USA', 8],
                ['Sweden', 8],
                ['Netherlands', 8],
                ['ROC', 6],
                ['Austria', 7],
                ['Canada', 4],
                ['Japan', 3]
    
            ]
        }]
    }
    const Upside = {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
          text: 'Upside'
        },
        series: [{
            name: 'Medals',
            data: [
                ['Norway', 16],
                ['Germany', 12],
                ['USA', 8],
                ['Sweden', 8],
                ['Netherlands', 8],
                ['ROC', 6],
                ['Austria', 7],
                ['Canada', 4],
                ['Japan', 3]
    
            ]
        }]
    }
    
    const changeAll = () => {
        setIsAll(!isAll)
    }
    const changeEO = () => {
        setIsEO(!isEO)
    }
    const changeCT = () => {
        setIsCT(!isCT)
    }
    
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Let Us Do The Math</h1>
                <h1 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">Gather your data inputs and enter them below to get an estimate of how your company will benefit with Trainotel.</h1>     
            </div>
            <div className="flex flex-col w-full mb-10">
                <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">Input Filters</h1>
                <h1 className="sm:text-s text-s font-medium title-font mb-5 text-gray-900">Select all the use case(s) you would like to include in the calculation.</h1>
            </div>
        
            <div className="flex flex-wrap -m-8 text-center">
                <div className='flex w-full mb-10'>
                    <button type="button" className={isAll ? 'bg-purple-500 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600' : ' py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600'} onClick={changeAll}>All</button>
                    <button type="button" className={isEO ? 'bg-purple-500 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600' : 'bg-white py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-non rounded-full border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600'} onClick={changeEO}>Employee Onboarding</button>
                    <button type="button" className={isCT ? 'bg-purple-500 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600' : 'bg-white py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600'} onClick={changeCT}>Customer Training</button>
                </div>
                {(isAll || isEO) && 
                <div className='flex flex-col w-full'>
                    <div className='flex w-full mb-5'>
                        <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">Assumptions</h1>
                    </div>
                    <form className="w-full pl-10 pr-10">
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                    Industry
                                </label>
                            </div>
                            <div className="md:flex">
                                <select value={industry}  onChange={(e) => setIndustry(e.target.value)} className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option value="Accommodation and food services">Accommodation and food services</option>
                                    <option value="Arts, entertainment, and recreation">Arts, entertainment, and recreation</option>
                                    <option value="Construction">Construction</option>
                                    <option value="Cross industry">Cross industry</option>
                                    <option value="Educational services">Educational services</option>
                                    <option value="Finance and insurance">Finance and insurance</option>
                                    <option value="Health care and social assistance">Health care and social assistance</option>
                                    <option value="Information">Information</option>
                                    <option value="Leisure and hospitality">Leisure and hospitality</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                    <option value="Manufacturing - Nondurable goods">Manufacturing - Nondurable goods</option>
                                    <option value="Manufacturing -Durable goods">Manufacturing -Durable goods</option>
                                    <option value="Mining and logging">Mining and logging</option>
                                    <option value="Other services">Other services</option>
                                    <option value="Professional and business services">Professional and business services</option>
                                    <option value="Public Sector/Government - Federal">Public Sector/Government - Federal</option>
                                    <option value="Public Sector/Government - State and local">Public Sector/Government - State and local</option>
                                    <option value="Real estate and rental and leasing">Real estate and rental and leasing</option>
                                    <option value="Retail trade">Retail trade</option>
                                    <option value="Transportation, warehousing, and utilities">Transportation, warehousing, and utilities</option>
                                    <option value="Wholesale trade">Wholesale trade</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                    Total Revenue
                                </label>
                            </div>
                            <div className="md:flex">
                                <input value={totalRevenue} onChange={(e) => setTotalRevenue(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Operating margin
                                </label>
                            </div>
                            <div className="md:flex">
                                <input value={operatingMargin} onChange={(e) => setOperatingMargin(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Contract duration (Years)
                                </label>
                            </div>
                            <div className="md:flex">
                                <input value={contractDuration} onChange={(e) => setContractDuration(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                    </form>
                </div>
                }
                {(isAll || isEO) && 
                <div className='flex flex-col w-full'>
                    <div className='flex w-full mb-5'>
                        <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">Employee Onboarding</h1>
                    </div>
                    <form className="w-full pl-10 pr-10">
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Number of total employees
                                </label>
                            </div>
                            <div className="md:flex">
                                <input value={noOfEmployees} onChange={(e) => setNoOfEmployees(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Percentage of employees working in sales
                                </label>
                            </div>
                            <div className="md:flex">
                                <input value={noOfSalesEmployees} onChange={(e) => setNoOfSalesEmployees(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Revenue per sales employee per month
                                </label>
                            </div>
                            <div className="md:flex">
                                <input  value={revenueSalesEmployees} onChange={(e) => setRevenueSalesEmployees(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Employee turnover rate
                                </label>
                            </div>
                            <div className="md:flex">
                                <input value={employeeTurnover} onChange={(e) => setEmployeeTurnover(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Number of new hires per annum
                                </label>
                            </div>
                            <div className="md:flex">
                                <input value={noNewHires} onChange={(e) => setNoNewHires(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                    </form>
                </div>
                }
                {(isAll || isCT) && 
                <div className='flex flex-col w-full'>
                    <div className='flex w-full mb-5'>
                        <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">Customer Training</h1>
                    </div>
                    <form className="w-full pl-10 pr-10">
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Number of new customers
                                </label>
                            </div>
                            <div className="md:flex">
                                <input value={noNewCustomers} onChange={(e) => setNoNewCustomers(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Percentage of revenue from new customers
                                </label>
                            </div>
                            <div className="md:flex">
                                <input value={revenueCustomers} onChange={(e) => setRevenueCustomers(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Percentage of revenue from cross-sale and upsell
                                </label>
                            </div>
                            <div className="md:flex">
                                <input value={revenueSalesUpsell} onChange={(e) => setRevenueSalesUpsell(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Percentage of revenue from customer training
                                </label>
                            </div>
                            <div className="md:flex">
                                <input value={revenueCustomerTraining} onChange={(e) => setRevenueCustomerTraining(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div className="md:flex md:justify-between mb-6">
                            <div className="md:flex">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Per user per month fee for the product/service offered
                                </label>
                            </div>
                            <div className="md:flex">
                                <input value={userFee} onChange={(e) => setUserFee(e.target.value)} className="appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                    </form>
                </div>
                }
                {(isAll || isEO || isCT) &&
                <div className="w-full md:flex md:justify-end">
                    <div className="md:flex">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Calculate
                    </button>
                    </div>
                </div>
                }
            </div>
            
            {(isAll || isEO || isCT) && 
            <div className='flex flex-col w-full mb-10'>
                <div className='w-full mb-5'>
                    <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">Your Results</h1>
                </div>
            </div>
            }
            {(isAll || isEO) && 
            <div className='flex flex-col w-full mb-10'>
                <div className='w-full mb-5'>
                    <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">Employee Onboarding</h1>
                </div>
                <div className='flex flex-row w-full'>
                    <div id="-m-6">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={Conservative}
                        />
                    </div>
                    <div id="-m-6">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={Upside}
                        />
                    </div>
                </div>
            </div>
            }
            {(isAll || isCT) && 
            <div className='flex flex-col w-full mb-10'>
                <div className='w-full mb-5'>
                    <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">Customer Training</h1>
                </div>
                <div className='flex flex-row w-full'>
                    <div id="-m-6">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={Conservative}
                        />
                    </div>
                    <div id="-m-6">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={Upside}
                        />
                    </div>
                </div>
            </div>
            }
        </div>
    </section>
  )
}
