import React, { useState,useEffect } from 'react'
import getBaseUrl from '../../utils/bookURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading'
import { MdIncompleteCircle } from 'react-icons/md';
import RevenueChart from './RevenueChart';
const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    console.log(data)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =  await axios.get(`${getBaseUrl()}/api/admin`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                })

                setData(response.data);
                setLoading(false);
                console.log('Response:', response.data);

            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, []);


    if(loading) return <Loading/>

  return (
    <>
     <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{data?.totalBooks}</span>
                  <span className="block text-gray-500">Products</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">${data?.totalSales}</span>
                  <span className="block text-gray-500">Total Sales</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold">{data?.trendingBooks}</span>
                  <span className="inline-block text-xl text-gray-500 font-semibold">(13%)</span>
                  <span className="block text-gray-500">Trending Books in This Month</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                <MdIncompleteCircle className='size-6'/>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{data?.totalOrders}</span>
                  <span className="block text-gray-500">Total Orders</span>
                </div>
              </div>
            </section>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">The number of orders per month</div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                  <RevenueChart />
                  </div>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">02</span>
                  <span className="block text-gray-500">Orders left</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">139</span>
                  <span className="block text-gray-500">Website visits (last day)</span>
                </div>
              </div>
              <div className="row-span-3 bg-white shadow rounded-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Users by average order</span>
                  <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Descending
                    <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
    
                </div>
                <div className="overflow-y-auto" style={{maxHeight: '24rem'}}>
                  <ul className="p-6 space-y-6">
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://media.licdn.com/dms/image/v2/D5603AQF5hE02rouIdA/profile-displayphoto-scale_200_200/B56ZogTlaPIYAc-/0/1761478598813?e=1764201600&v=beta&t=IhXhDcSRxjqQ_Zu1nOmrdtCM6P4ihWibZhoRWTrIwdg" alt="Annette Watson profile picture"/>
                      </div>
                      <span className="text-gray-600">Mithran</span>
                      <span className="ml-auto font-semibold">9.3</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://media.licdn.com/dms/image/v2/D5635AQFhZu6HL1dq7A/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1734185240686?e=1763042400&v=beta&t=qYsptQbZjaIp33BmT6xAnjSVV3yL2Qi6yXbEFoiCBGE" alt="Calvin Steward profile picture"/>
                      </div>
                      <span className="text-gray-600">Shankar</span>
                      <span className="ml-auto font-semibold">8.9</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://media.licdn.com/dms/image/v2/D4E35AQEMV8JAIlfenA/profile-framedphoto-shrink_200_200/B4EZk2QeywHoAY-/0/1757551915427?e=1763042400&v=beta&t=88TiGH5eMfNztTAbtD5JoGoY4gRfs21VvFogYbpLM7w" alt="Ralph Richards profile picture"/>
                      </div>
                      <span className="text-gray-600">Logeshwaran</span>
                      <span className="ml-auto font-semibold">8.7</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://media.licdn.com/dms/image/v2/D5635AQHax8aOyf2zcA/profile-framedphoto-shrink_200_200/B56ZkOyp1THUAc-/0/1756889783977?e=1763042400&v=beta&t=qCCYZRt4uXqP0ScSPEzYiBubn97hVASagsJq8A2BIYs" alt="Bernard Murphy profile picture"/>
                      </div>
                      <span className="text-gray-600">Dhanush Balaji</span>
                      <span className="ml-auto font-semibold">8.2</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://media.licdn.com/dms/image/v2/D5635AQGhf02Wl3USnw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1728453395519?e=1763042400&v=beta&t=CcsO6rJPYcTqHgqx3EdFDaP-NLXxEHaiTEDjhZXoya8" alt="Arlene Robertson profile picture"/>
                      </div>
                      <span className="text-gray-600">Gokul</span>
                      <span className="ml-auto font-semibold">8.2</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://media.licdn.com/dms/image/v2/D5603AQF6b5l0JPklbg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690634567010?e=1764201600&v=beta&t=v2zk9YmuxAQMBTH-6nYsCmuuvK-1d_QDNRgMI520lfs" alt="Jane Lane profile picture"/>
                      </div>
                      <span className="text-gray-600">GoAmeer</span>
                      <span className="ml-auto font-semibold">8.1</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://media.licdn.com/dms/image/v2/D4E03AQFjFXprHsdPUg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725958907978?e=1764201600&v=beta&t=S_4RCMcSVik6tHugYGmYnQBXMwded14QZqc0InR5xcU" alt="Pat Mckinney profile picture"/>
                      </div>
                      <span className="text-gray-600">Praveen Kumar</span>
                      <span className="ml-auto font-semibold">7.9</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://media.licdn.com/dms/image/v2/D4E35AQGj4XQBC8EjXw/profile-framedphoto-shrink_200_200/B4EZbLChldHYAY-/0/1747163159178?e=1763042400&v=beta&t=rFGFsTxf9gN-JMRf0pp9NjPcZ2U3NilPC4_CAifvcYc" alt="Norman Walters profile picture"/>
                      </div>
                      <span className="text-gray-600">Pandiyan</span>
                      <span className="ml-auto font-semibold">7.7</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">Students by type of studying</div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
                </div>
              </div>
            </section>
           
    </>
  )
}

export default Dashboard