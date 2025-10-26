import React from 'react';

const ProgressBar: React.FC<{ color: string, percentage: number }> = ({ color, percentage }) => (
    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
        <div className={color} style={{ width: `${percentage}%`, height: '100%', borderRadius: 'inherit' }}></div>
    </div>
);

const PaymentsDashboard: React.FC = () => {
  const delinquencyData = [
    { tenant: 'John Doe', property: 'The Grandview / A-101', balance: '1,250.00', overdue: 32, contact: 'Promise Broken (5d ago)' },
    { tenant: 'Jane Smith', property: 'Oak Ridge Apts / 204', balance: '850.50', overdue: 12, contact: 'Reminder Sent (2d ago)' },
    { tenant: 'Michael Brown', property: 'Riverbend Lofts / 5B', balance: '450.00', overdue: 4, contact: 'Notice Sent (1d ago)' },
  ];

  const upcomingChargesData = [
    { date: 'Oct 1, 2023', tenant: 'All Tenants (85)', description: 'Monthly Rent', amount: '82,500.00', status: 'Scheduled' },
    { date: 'Oct 5, 2023', tenant: 'Laura Palmer (C-401)', description: 'Pet Fee (Monthly)', amount: '50.00', status: 'Scheduled' },
  ];


  return (
    <div className="font-sans text-sm text-gray-800 bg-white rounded-xl shadow-2xl shadow-gray-200 border border-gray-200 overflow-hidden">
        <div className="flex">
            {/* Main Content */}
            <div className="flex-grow p-6 space-y-6 bg-gray-50/50">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Payments Dashboard</h1>
                    <p className="text-gray-500">Portfolio Rent Health Summary</p>
                </div>
                
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-500">Occupancy Paid %</p>
                        <p className="text-3xl font-bold text-green-600">94.7%</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-500">Total Outstanding</p>
                        <p className="text-3xl font-bold text-red-600">$4,380</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-500">Expected vs. Collected</p>
                        <p className="text-2xl font-semibold text-gray-800">$78.1k / <span className="text-gray-500">$82.5k</span></p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200 flex items-start space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <div>
                            <p className="font-bold text-red-700">Needs Attention</p>
                            <p className="text-lg font-semibold text-gray-800">Owner Payout at Risk</p>
                        </div>
                    </div>
                </div>

                {/* Aging Cards */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-500">Aging: 1-5 Days Late</p>
                        <p className="text-2xl font-bold text-gray-900">$1,950 <span className="text-sm font-normal text-gray-500">from 4 tenants</span></p>
                        <ProgressBar color="bg-yellow-400" percentage={40} />
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-500">Aging: 6-15 Days Late</p>
                        <p className="text-2xl font-bold text-gray-900">$850 <span className="text-sm font-normal text-gray-500">from 2 tenants</span></p>
                        <ProgressBar color="bg-orange-500" percentage={20} />
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-500">Aging: 16+ Days Late</p>
                        <p className="text-2xl font-bold text-gray-900">$1,580 <span className="text-sm font-normal text-gray-500">from 3 tenants</span></p>
                        <ProgressBar color="bg-red-600" percentage={60} />
                    </div>
                </div>

                {/* Delinquency Work Queue */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                   <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-gray-900">Delinquency Work Queue</h2>
                        <div className="flex items-center space-x-2">
                             <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM14 10a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2z" /></svg>Filter</button>
                             <button className="px-3 py-1.5 border border-transparent rounded-md text-sm text-white bg-blue-600 hover:bg-blue-700 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>Bulk Actions</button>
                        </div>
                   </div>
                   <table className="w-full text-left">
                       <thead>
                           <tr className="text-xs text-gray-500 uppercase border-b border-gray-200">
                               <th className="py-2 w-8"><input type="checkbox" className="rounded border-gray-300" /></th>
                               <th className="py-2">Tenant</th>
                               <th className="py-2">Property / Unit</th>
                               <th className="py-2">Balance Due</th>
                               <th className="py-2">Days Overdue</th>
                               <th className="py-2">Last Contact</th>
                               <th className="py-2 w-8"></th>
                           </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-200">
                           {delinquencyData.map((row, i) => (
                               <tr key={i}>
                                   <td className="py-3"><input type="checkbox" className="rounded border-gray-300" /></td>
                                   <td className="py-3 font-medium text-gray-800">{row.tenant}</td>
                                   <td className="py-3">{row.property}</td>
                                   <td className="py-3 font-medium text-gray-800">${row.balance}</td>
                                   <td className="py-3"><span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${row.overdue > 30 ? 'bg-red-100 text-red-700' : row.overdue > 10 ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'}`}>{row.overdue}</span></td>
                                   <td className="py-3">{row.contact}</td>
                                   <td className="py-3 text-gray-500">&hellip;</td>
                               </tr>
                           ))}
                       </tbody>
                   </table>
                </div>

                {/* Upcoming / Scheduled Charges */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Upcoming / Scheduled Charges</h2>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-xs text-gray-500 uppercase border-b border-gray-200">
                                <th className="py-2">Due Date</th>
                                <th className="py-2">Tenant</th>
                                <th className="py-2">Description</th>
                                <th className="py-2">Amount</th>
                                <th className="py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {upcomingChargesData.map((row, i) => (
                                <tr key={i}>
                                    <td className="py-3">{row.date}</td>
                                    <td className="py-3">{row.tenant}</td>
                                    <td className="py-3">{row.description}</td>
                                    <td className="py-3 font-medium text-gray-800">${row.amount}</td>
                                    <td className="py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">{row.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
            
            {/* AI Sidebar */}
            <div className="w-96 flex-shrink-0 border-l border-gray-200 p-6 flex flex-col h-auto">
                <div className="flex-grow">
                    <h2 className="text-lg font-bold text-gray-900">Aptura AI</h2>
                    <p className="text-gray-500">Your collections copilot</p>
                    <div className="mt-6 space-y-4">
                        <div className="flex justify-end">
                            <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs">
                                show me only 10+ days late across all properties
                            </div>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 mb-1">Aptura AI</p>
                            <div className="bg-gray-100 p-3 rounded-lg">
                                <p className="mb-2">Here are 2 tenants over 10 days late, sorted by urgency:</p>
                                <div className="border-t border-gray-200 pt-2 space-y-2 text-sm">
                                    <div>
                                        <p className="font-bold">John Doe</p>
                                        <p className="text-gray-600">The Grandview / A-101</p>
                                        <p><span className="text-red-600 font-semibold">$1,250.00</span> due, <span className="font-semibold">32 days overdue.</span></p>
                                    </div>
                                    <div className="border-t border-gray-200 pt-2">
                                        <p className="font-bold">Jane Smith</p>
                                        <p className="text-gray-600">Oak Ridge Apts / 204</p>
                                        <p><span className="text-red-600 font-semibold">$850.50</span> due, <span className="font-semibold">12 days overdue.</span></p>
                                    </div>
                                </div>
                                <div className="mt-3 flex space-x-2">
                                    <button className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-full">Send Reminders</button>
                                    <button className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-full">View All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-auto pt-4">
                    <div className="relative">
                        <input type="text" placeholder="Ask Aptura AI..." className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                        <button className="absolute inset-y-0 right-0 flex items-center justify-center w-10 text-white bg-blue-600 rounded-r-lg">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PaymentsDashboard;
