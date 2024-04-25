import React, { useContext, useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Modal from '../components/Modal';
import { HiChevronDoubleLeft } from "react-icons/hi";
import { GrStatusWarning } from "react-icons/gr";
import { CiViewList } from "react-icons/ci";
import { MdOutlinedFlag } from "react-icons/md";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiInfoCircle } from "react-icons/bi";
import '../css/TabularPage.css'
import Toggler from '../components/Toggler';
import { cityDataContext } from '../dataContext/DataContext';
import { useParams } from 'react-router-dom';
import QuarterTable from '../components/QuarterTable';
import { chartDataContext } from '../dataContext/ChartContext';

const TabularPage = () => {
    let {id}=useParams()
    // console.log('id',id)
    const [modalOpen, setModalOpen] = useState(false);
    const data = useContext(cityDataContext)
   let {arrHist,arrForecast}= useContext(chartDataContext)
   let historyData= arrHist[id]?.map(x=>({uv:x}))
//    console.log(historyData,"HD")

   let forecastData= arrForecast[id]?.map(x=>({pv:x}))
   let combinedData= historyData?.map((e,i)=>({...e,...forecastData[i]}))
//    console.log(combinedData,"CD")

    let [quarterData, setQuarterData] = useState([])
    // console.log(data, "data")
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
    useEffect(() => {
          let newData=data.filter((item)=>{
            return item.id == id
          })
        const formattedData = newData.map(item => ({
            name: item.cityName,
            historical: Object.entries(item.historical).filter(([quarter]) => quarter >= 'Q2 2022' && quarter <= 'Q4 2023').reduce((acc, [quarter, value]) => ({ ...acc, [quarter]: value }), {}),
            forecast: Object.entries(item.forecast).filter(([quarter]) => quarter >= 'Q2 2024' && quarter <= 'Q3 2025').reduce((acc, [quarter, value]) => ({ ...acc, [quarter]: value }), {}),
        }))

        setQuarterData(formattedData)
    }, [])
    return (
        <>
            <div className=" flex">
                {modalOpen && (
                    <div className="h-full w-1/3">
                        <Modal onClose={toggleModal} id={id} />
                    </div>
                )}
                <div>
                    <div className="flex justify-between pl-5 w-full bg-cyan-950 text-white items-center">
                        <button className="top-0 left-0  py-3 px-2 z-10 bg-cyan-400" onClick={toggleModal}>< HiChevronDoubleLeft /></button>
                        //
                        <div className="flex">
                            <GrStatusWarning style={{ color: "yellow", fontSize: "32px" }} /> Sample Stack
                        </div>
                        <div className="flex">
                            StackId: 099384465721 <CiViewList />
                        </div>

                        <div className="flex text-center bg-cyan-900 p-5">
                            <table cellPadding="3">
                                <tbody>

                                    <tr>
                                        <td style={{ padding: "5px" }}>FORECAST</td>
                                        <td style={{ padding: "5px" }}>FORECAST</td>
                                    </tr>
                                    <tr>
                                        <td>89%</td>
                                        <td>80%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-2xl">
                            <MdOutlinedFlag />
                        </div>
                    </div>
                    <div className="h-1 bg-cyan-900"></div>
                    {/* //second line */}
                    <div className="flex items-center justify-evenly bg-cyan-950  text-white" >
                        <div className="flex justify-evenly gap-5">
                            <IoDocumentAttachSharp style={{ fontSize: "25px" }} />
                            <p>SPECIAL REQUIREMENTS</p>
                            <div className="">
                                <Toggler />
                            </div>
                            <p>Include</p>
                        </div>
                        <div>
                            <IoIosArrowDown />
                        </div>

                    </div>
                    {/* //Third line */}
                    <div className="flex items-center justify-start gap-5 bg-cyan-950 text-white">
                        <div className="flex justify-between">
                            <span>Forecast Horizon</span>
                            <span>Latest Issue</span>
                            <IoMdArrowDropdown />
                            <BiInfoCircle style={{ color: "cyan" }} />
                        </div>
                        <div className="flex items-center text-base">
                            <div className="text-md">
                                <Toggler />
                            </div>
                            <p>SHOW CONFIDENCE INTERVAL</p>
                        </div>

                    </div>

                    <div className="relative">
                        <LineChart width={modalOpen?950:1300} height={400} data={combinedData}>
                            {/* {console.log(quarterData,"data")} */}
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            {/* <Legend /> */}
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <Line type="monotone" dataKey="pv" stroke="#857adf" />
                        </LineChart>
                    </div>
                    <div className=" text-right">

                <QuarterTable id={id}/>
                    </div>
                </div>

            </div>
            {/* {console.log('querdata',quarterData)} */}
        </>
    )
}

export default TabularPage