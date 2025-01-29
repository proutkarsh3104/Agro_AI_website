// // import React, { useState } from 'react';
// // import { 
// //   BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar,
// //   ResponsiveContainer, AreaChart, Area, ScatterChart, Scatter
// // } from 'recharts';
// // import { 
// //   Cloud, Home, TrendingUp, Menu, X, AlertTriangle, 
// //   Leaf, Bug, DollarSign, ArrowUpRight, BarChart2
// // } from 'lucide-react';

// // // Extended weather forecast data
// // const weatherForecast = [
// //   { day: 'Mon', temp: 24, humidity: 65, rainfall: 0 },
// //   { day: 'Tue', temp: 26, humidity: 70, rainfall: 20 },
// //   { day: 'Wed', temp: 23, humidity: 75, rainfall: 30 },
// //   { day: 'Thu', temp: 25, humidity: 68, rainfall: 10 },
// //   { day: 'Fri', temp: 27, humidity: 62, rainfall: 0 },
// //   { day: 'Sat', temp: 26, humidity: 60, rainfall: 0 },
// //   { day: 'Sun', temp: 25, humidity: 63, rainfall: 5 },
// //   { day: 'Mon', temp: 28, humidity: 58, rainfall: 0 },
// //   { day: 'Tue', temp: 27, humidity: 61, rainfall: 15 },
// //   { day: 'Wed', temp: 24, humidity: 72, rainfall: 25 },
// //   { day: 'Thu', temp: 26, humidity: 67, rainfall: 5 },
// //   { day: 'Fri', temp: 29, humidity: 59, rainfall: 0 },
// // ];

// // // Extended yield history data
// // const yieldHistory = [
// //   { month: 'Jan', yield: 420, rainfall: 50 },
// //   { month: 'Feb', yield: 450, rainfall: 45 },
// //   { month: 'Mar', yield: 480, rainfall: 60 },
// //   { month: 'Apr', yield: 520, rainfall: 65 },
// //   { month: 'May', yield: 550, rainfall: 80 },
// //   { month: 'Jun', yield: 500, rainfall: 95 },
// //   { month: 'Jul', yield: 480, rainfall: 100 },
// //   { month: 'Aug', yield: 510, rainfall: 90 },
// //   { month: 'Sep', yield: 540, rainfall: 70 },
// //   { month: 'Oct', yield: 560, rainfall: 55 },
// //   { month: 'Nov', yield: 530, rainfall: 40 },
// //   { month: 'Dec', yield: 490, rainfall: 35 },
// // ];

// // // Extended market price data
// // const marketPrices = [
// //   { month: 'Jan', price: 280, volume: 1200 },
// //   { month: 'Feb', price: 300, volume: 1300 },
// //   { month: 'Mar', price: 310, volume: 1400 },
// //   { month: 'Apr', price: 305, volume: 1250 },
// //   { month: 'May', price: 320, volume: 1350 },
// //   { month: 'Jun', price: 340, volume: 1450 },
// //   { month: 'Jul', price: 335, volume: 1400 },
// //   { month: 'Aug', price: 345, volume: 1500 },
// //   { month: 'Sep', price: 350, volume: 1550 },
// //   { month: 'Oct', price: 360, volume: 1600 },
// //   { month: 'Nov', price: 355, volume: 1500 },
// //   { month: 'Dec', price: 365, volume: 1650 },
// // ];

// // // Pest outbreak data
// // const pestOutbreakData = [
// //   { month: 'Jan', aphids: 25, beetles: 10, worms: 15 },
// //   { month: 'Feb', aphids: 30, beetles: 15, worms: 20 },
// //   { month: 'Mar', aphids: 45, beetles: 25, worms: 30 },
// //   { month: 'Apr', aphids: 60, beetles: 40, worms: 45 },
// //   { month: 'May', aphids: 40, beetles: 30, worms: 35 },
// //   { month: 'Jun', aphids: 25, beetles: 20, worms: 25 },
// //   { month: 'Jul', aphids: 15, beetles: 10, worms: 15 },
// //   { month: 'Aug', aphids: 20, beetles: 15, worms: 20 },
// //   { month: 'Sep', aphids: 35, beetles: 25, worms: 30 },
// //   { month: 'Oct', aphids: 45, beetles: 35, worms: 40 },
// //   { month: 'Nov', aphids: 30, beetles: 25, worms: 30 },
// //   { month: 'Dec', aphids: 20, beetles: 15, worms: 20 },
// // ];

// // // Crop comparison data
// // const cropComparison = [
// //   { name: 'Wheat', current: 550, previous: 520 },
// //   { name: 'Rice', current: 480, previous: 450 },
// //   { name: 'Corn', current: 620, previous: 580 },
// //   { name: 'Soybean', current: 340, previous: 320 },
// //   { name: 'Cotton', current: 420, previous: 390 },
// //   { name: 'Sugarcane', current: 680, previous: 650 },
// //   { name: 'Pulses', current: 290, previous: 270 },
// // ];

// // const Dashboard = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [activeTab, setActiveTab] = useState('dashboard');

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Navbar */}
// //       <nav className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white shadow-lg fixed w-full z-30">
// //         <div className="flex justify-between items-center max-w-7xl mx-auto">
// //           <div className="flex items-center space-x-2">
// //             <Leaf className="h-6 w-6" />
// //             <span className="text-xl font-bold">Kheti Seva</span>
// //           </div>
// //           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden">
// //             {isSidebarOpen ? <X /> : <Menu />}
// //           </button>
// //         </div>
// //       </nav>

// //       <div className="flex pt-16">
// //         {/* Sidebar */}
// //         <div className={`
// //           fixed lg:static inset-y-0 left-0 transform 
// //           ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
// //           lg:translate-x-0 transition duration-200 ease-in-out
// //           w-64 bg-white shadow-lg lg:shadow-none z-20 mt-16 lg:mt-0 h-screen
// //         `}>
// //           <div className="p-4">
// //             <div className="space-y-4">
// //               {[
// //                 { icon: <Home />, text: 'Dashboard', id: 'dashboard' },
// //                 { icon: <Cloud />, text: 'Weather', id: 'weather' },
// //                 { icon: <Bug />, text: 'Pest Outbreaks', id: 'pests' },
// //                 { icon: <TrendingUp />, text: 'Market', id: 'market' },
// //               ].map((item) => (
// //                 <button
// //                   key={item.id}
// //                   onClick={() => setActiveTab(item.id)}
// //                   className={`
// //                     flex items-center space-x-2 w-full p-3 rounded-lg transition-all
// //                     ${activeTab === item.id 
// //                       ? 'bg-green-100 text-green-600 shadow-sm' 
// //                       : 'hover:bg-gray-100'}
// //                   `}
// //                 >
// //                   {item.icon}
// //                   <span>{item.text}</span>
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <div className="flex-1 p-4 lg:p-8">
// //           {/* Stats Grid */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
// //             <div className="bg-white p-6 rounded-xl shadow-sm">
// //               <div className="flex items-center">
// //                 <div className="p-3 bg-green-50 rounded-lg">
// //                   <TrendingUp className="h-6 w-6 text-green-500" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <p className="text-sm text-gray-600">Average Yield</p>
// //                   <p className="text-2xl font-semibold mt-1">550 kg/ha</p>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="bg-white p-6 rounded-xl shadow-sm">
// //               <div className="flex items-center">
// //                 <div className="p-3 bg-blue-50 rounded-lg">
// //                   <DollarSign className="h-6 w-6 text-blue-500" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <p className="text-sm text-gray-600">Market Price</p>
// //                   <p className="text-2xl font-semibold mt-1">$340/ton</p>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="bg-white p-6 rounded-xl shadow-sm">
// //               <div className="flex items-center">
// //                 <div className="p-3 bg-red-50 rounded-lg">
// //                   <Bug className="h-6 w-6 text-red-500" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <p className="text-sm text-gray-600">Pest Risk</p>
// //                   <p className="text-2xl font-semibold mt-1">Moderate</p>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="bg-white p-6 rounded-xl shadow-sm">
// //               <div className="flex items-center">
// //                 <div className="p-3 bg-orange-50 rounded-lg">
// //                   <BarChart2 className="h-6 w-6 text-orange-500" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <p className="text-sm text-gray-600">Soil Health</p>
// //                   <p className="text-2xl font-semibold mt-1">Good</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Pest Outbreak Chart */}
// //           <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
// //             <h2 className="text-xl font-semibold mb-4">Pest Outbreak Trends</h2>
// //             <ResponsiveContainer width="100%" height={300}>
// //               <LineChart data={pestOutbreakData}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="month" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Legend />
// //                 <Line type="monotone" dataKey="aphids" stroke="#ff7300" strokeDasharray="5 5" />
// //                 <Line type="monotone" dataKey="beetles" stroke="#82ca9d" strokeDasharray="3 3" />
// //                 <Line type="monotone" dataKey="worms" stroke="#8884d8" strokeDasharray="4 4" />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </div>

// //           {/* Charts Grid */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //             {/* Weather Forecast */}
// //             <div className="bg-white rounded-xl shadow-sm p-6">
// //               <h2 className="text-xl font-semibold mb-4">Weather Forecast</h2>
// //               <ResponsiveContainer width="100%" height={300}>
// //                 <LineChart data={weatherForecast}>
// //                   <CartesianGrid strokeDasharray="3 3" />
// //                   <XAxis dataKey="day" />
// //                   <YAxis yAxisId="left" />
// //                   <YAxis yAxisId="right" orientation="right" />
// //                   <Tooltip />
// //                   <Legend />
// //                   <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#ff7300" name="Temperature (°C)" />
// //                   <Line yAxisId="right" type="monotone" dataKey="rainfall" stroke="#82ca9d" name="Rainfall (mm)" />
// //                 </LineChart>
// //               </ResponsiveContainer>
// //             </div>

// //             {/* Market Price Trends */}
// //             <div className="bg-white rounded-xl shadow-sm p-6">
// //               <h2 className="text-xl font-semibold mb-4">Market Price Trends</h2>
// //               <ResponsiveContainer width="100%" height={300}>
// //                 <AreaChart data={marketPrices}>
// //                   <CartesianGrid strokeDasharray="3 3" />
// //                   <XAxis dataKey="month" />
// //                   <YAxis />
// //                   <Tooltip />
// //                   <Legend />
// //                   <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" name="Price ($/ton)" />
// //                 </AreaChart>
// //               </ResponsiveContainer>
// //             </div>

// //             {/* Yield History */}
// //             <div className="bg-white rounded-xl shadow-sm p-6">
// //               <h2 className="text-xl font-semibold mb-4">Yield History</h2>
// //               <ResponsiveContainer width="100%" height={300}>
// //                 <AreaChart data={yieldHistory}>
// //                   <CartesianGrid strokeDasharray="3 3" />
// //                   <XAxis dataKey="month" />
// //                   <YAxis />
// //                   <Tooltip />
// //                   <Legend />
// //                   <Area type="monotone" dataKey="yield" stroke="#82ca9d" fill="#82ca9d" name="Yield (kg/ha)" />
// //                 </AreaChart>
// //               </ResponsiveContainer>
// //             </div>

// //             {/* Crop Comparison */}
// //             <div className="bg-white rounded-xl shadow-sm p-6">
// //               <h2 className="text-xl font-semibold mb-4">Crop Yield Comparison</h2>
// //               <ResponsiveContainer width="100%" height={300}>
// //                 <BarChart data={cropComparison}>
// //                   <CartesianGrid strokeDasharray="3 3" />
// //                   <XAxis dataKey="name" />
// //                   <YAxis />
// //                   <Tooltip />
// //                   <Legend />
// //                   <Bar dataKey="current" fill="#82ca9d" name="Current Year" />
// //                   <Bar dataKey="previous" fill="#8884d8" name="Previous Year" />
// //                 </BarChart>
// //               </ResponsiveContainer>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// // import React, { useState } from 'react';
// // import { 
// //   BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar,
// //   ResponsiveContainer, AreaChart, Area, ScatterChart, Scatter
// // } from 'recharts';
// // import { 
// //   Cloud, Home, TrendingUp, Menu, X, AlertTriangle, 
// //   Leaf, Bug, DollarSign, ArrowUpRight, BarChart2
// // } from 'lucide-react';

// // // Extended weather forecast data
// // const weatherForecast = [
// //   { day: 'Mon', temp: 24, humidity: 65, rainfall: 0 },
// //   { day: 'Tue', temp: 26, humidity: 70, rainfall: 20 },
// //   { day: 'Wed', temp: 23, humidity: 75, rainfall: 30 },
// //   { day: 'Thu', temp: 25, humidity: 68, rainfall: 10 },
// //   { day: 'Fri', temp: 27, humidity: 62, rainfall: 0 },
// //   { day: 'Sat', temp: 26, humidity: 60, rainfall: 0 },
// //   { day: 'Sun', temp: 25, humidity: 63, rainfall: 5 },
// //   { day: 'Mon', temp: 28, humidity: 58, rainfall: 0 },
// //   { day: 'Tue', temp: 27, humidity: 61, rainfall: 15 },
// //   { day: 'Wed', temp: 24, humidity: 72, rainfall: 25 },
// //   { day: 'Thu', temp: 26, humidity: 67, rainfall: 5 },
// //   { day: 'Fri', temp: 29, humidity: 59, rainfall: 0 },
// // ];

// // // Extended yield history data
// // const yieldHistory = [
// //   { month: 'Jan', yield: 420, rainfall: 50 },
// //   { month: 'Feb', yield: 450, rainfall: 45 },
// //   { month: 'Mar', yield: 480, rainfall: 60 },
// //   { month: 'Apr', yield: 520, rainfall: 65 },
// //   { month: 'May', yield: 550, rainfall: 80 },
// //   { month: 'Jun', yield: 500, rainfall: 95 },
// //   { month: 'Jul', yield: 480, rainfall: 100 },
// //   { month: 'Aug', yield: 510, rainfall: 90 },
// //   { month: 'Sep', yield: 540, rainfall: 70 },
// //   { month: 'Oct', yield: 560, rainfall: 55 },
// //   { month: 'Nov', yield: 530, rainfall: 40 },
// //   { month: 'Dec', yield: 490, rainfall: 35 },
// // ];

// // // Extended market price data
// // const marketPrices = [
// //   { month: 'Jan', price: 280, volume: 1200 },
// //   { month: 'Feb', price: 300, volume: 1300 },
// //   { month: 'Mar', price: 310, volume: 1400 },
// //   { month: 'Apr', price: 305, volume: 1250 },
// //   { month: 'May', price: 320, volume: 1350 },
// //   { month: 'Jun', price: 340, volume: 1450 },
// //   { month: 'Jul', price: 335, volume: 1400 },
// //   { month: 'Aug', price: 345, volume: 1500 },
// //   { month: 'Sep', price: 350, volume: 1550 },
// //   { month: 'Oct', price: 360, volume: 1600 },
// //   { month: 'Nov', price: 355, volume: 1500 },
// //   { month: 'Dec', price: 365, volume: 1650 },
// // ];

// // // Pest outbreak data
// // const pestOutbreakData = [
// //   { month: 'Jan', aphids: 25, beetles: 10, worms: 15 },
// //   { month: 'Feb', aphids: 30, beetles: 15, worms: 20 },
// //   { month: 'Mar', aphids: 45, beetles: 25, worms: 30 },
// //   { month: 'Apr', aphids: 60, beetles: 40, worms: 45 },
// //   { month: 'May', aphids: 40, beetles: 30, worms: 35 },
// //   { month: 'Jun', aphids: 25, beetles: 20, worms: 25 },
// //   { month: 'Jul', aphids: 15, beetles: 10, worms: 15 },
// //   { month: 'Aug', aphids: 20, beetles: 15, worms: 20 },
// //   { month: 'Sep', aphids: 35, beetles: 25, worms: 30 },
// //   { month: 'Oct', aphids: 45, beetles: 35, worms: 40 },
// //   { month: 'Nov', aphids: 30, beetles: 25, worms: 30 },
// //   { month: 'Dec', aphids: 20, beetles: 15, worms: 20 },
// // ];

// // // Yield prediction data
// // const yieldPrediction = [
// //   { month: 'Jan', predicted: 450, actual: 420 },
// //   { month: 'Feb', predicted: 470, actual: 450 },
// //   { month: 'Mar', predicted: 490, actual: 480 },
// //   { month: 'Apr', predicted: 530, actual: 520 },
// //   { month: 'May', predicted: 560, actual: 550 },
// //   { month: 'Jun', predicted: 510, actual: 500 },
// //   { month: 'Jul', predicted: 490, actual: 480 },
// //   { month: 'Aug', predicted: 520, actual: 510 },
// //   { month: 'Sep', predicted: 550, actual: 540 },
// //   { month: 'Oct', predicted: 570, actual: 560 },
// //   { month: 'Nov', predicted: 540, actual: 530 },
// //   { month: 'Dec', predicted: 500, actual: 490 },
// // ];

// // const Dashboard = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [activeTab, setActiveTab] = useState('dashboard');

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Navbar */}
// //       <nav className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white shadow-lg fixed w-full z-30">
// //         <div className="flex justify-between items-center max-w-7xl mx-auto">
// //           <div className="flex items-center space-x-2">
// //             <Leaf className="h-6 w-6" />
// //             <span className="text-xl font-bold">Kheti Seva</span>
// //           </div>
// //           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden">
// //             {isSidebarOpen ? <X /> : <Menu />}
// //           </button>
// //         </div>
// //       </nav>

// //       <div className="flex pt-16">
// //         {/* Sidebar */}
// //         <div className={`
// //           fixed lg:static inset-y-0 left-0 transform 
// //           ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
// //           lg:translate-x-0 transition duration-200 ease-in-out
// //           w-64 bg-white shadow-lg lg:shadow-none z-20 mt-16 lg:mt-0 h-screen
// //         `}>
// //           <div className="p-4">
// //             <div className="space-y-4">
// //               {[
// //                 { icon: <Home />, text: 'Dashboard', id: 'dashboard' },
// //                 { icon: <Cloud />, text: 'Weather', id: 'weather' },
// //                 { icon: <Bug />, text: 'Pest Outbreaks', id: 'pests' },
// //                 { icon: <TrendingUp />, text: 'Market', id: 'market' },
// //               ].map((item) => (
// //                 <button
// //                   key={item.id}
// //                   onClick={() => setActiveTab(item.id)}
// //                   className={`
// //                     flex items-center space-x-2 w-full p-3 rounded-lg transition-all
// //                     ${activeTab === item.id 
// //                       ? 'bg-green-100 text-green-600 shadow-sm' 
// //                       : 'hover:bg-gray-100'}
// //                   `}
// //                 >
// //                   {item.icon}
// //                   <span>{item.text}</span>
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <div className="flex-1 p-4 lg:p-8">
// //           {/* Stats Grid */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
// //             <div className="bg-white p-6 rounded-xl shadow-sm">
// //               <div className="flex items-center">
// //                 <div className="p-3 bg-green-50 rounded-lg">
// //                   <TrendingUp className="h-6 w-6 text-green-500" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <p className="text-sm text-gray-600">Average Yield</p>
// //                   <p className="text-2xl font-semibold mt-1">550 kg/ha</p>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="bg-white p-6 rounded-xl shadow-sm">
// //               <div className="flex items-center">
// //                 <div className="p-3 bg-blue-50 rounded-lg">
// //                   <DollarSign className="h-6 w-6 text-blue-500" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <p className="text-sm text-gray-600">Market Price</p>
// //                   <p className="text-2xl font-semibold mt-1">$340/ton</p>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="bg-white p-6 rounded-xl shadow-sm">
// //               <div className="flex items-center">
// //                 <div className="p-3 bg-red-50 rounded-lg">
// //                   <Bug className="h-6 w-6 text-red-500" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <p className="text-sm text-gray-600">Pest Risk</p>
// //                   <p className="text-2xl font-semibold mt-1">Moderate</p>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="bg-white p-6 rounded-xl shadow-sm">
// //               <div className="flex items-center">
// //                 <div className="p-3 bg-orange-50 rounded-lg">
// //                   <BarChart2 className="h-6 w-6 text-orange-500" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <p className="text-sm text-gray-600">Soil Health</p>
// //                   <p className="text-2xl font-semibold mt-1">Good</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Weather Forecast */}
// //           <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
// //             <h2 className="text-xl font-semibold mb-4">Weather Forecast</h2>
// //             <ResponsiveContainer width="100%" height={300}>
// //               <LineChart data={weatherForecast}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="day" />
// //                 <YAxis yAxisId="left" />
// //                 <YAxis yAxisId="right" orientation="right" />
// //                 <Tooltip />
// //                 <Legend />
// //                 <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#ff7300" name="Temperature (°C)" />
// //                 <Line yAxisId="right" type="monotone" dataKey="rainfall" stroke="#82ca9d" name="Rainfall (mm)" />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </div>

// //           {/* Charts Grid */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //             {/* Pest Outbreak Chart */}
// //             <div className="bg-white rounded-xl shadow-sm p-6">
// //               <h2 className="text-xl font-semibold mb-4">Pest Outbreak Trends</h2>
// //               <ResponsiveContainer width="100%" height={300}>
// //                 <LineChart data={pestOutbreakData}>
// //                   <CartesianGrid strokeDasharray="3 3" />
// //                   <XAxis dataKey="month" />
// //                   <YAxis />
// //                   <Tooltip />
// //                   <Legend />
// //                   <Line type="monotone" dataKey="aphids" stroke="#ff7300" strokeDasharray="5 5" />
// //                   <Line type="monotone" dataKey="beetles" stroke="#82ca9d" strokeDasharray="3 3" />
// //                   <Line type="monotone" dataKey="worms" stroke="#8884d8" strokeDasharray="4 4" />
// //                 </LineChart>
// //               </ResponsiveContainer>
// //             </div>

// //             {/* Yield Prediction */}
// //             <div className="bg-white rounded-xl shadow-sm p-6">
// //               <h2 className="text-xl font-semibold mb-4">Yield Prediction</h2>
// //               <ResponsiveContainer width="100%" height={300}>
// //                 <LineChart data={yieldPrediction}>
// //                   <CartesianGrid strokeDasharray="3 3" />
// //                   <XAxis dataKey="month" />
// //                   <YAxis />
// //                   <Tooltip />
// //                   <Legend />
// //                   <Line type="monotone" dataKey="predicted" stroke="#ff7300" name="Predicted Yield" />
// //                   <Line type="monotone" dataKey="actual" stroke="#82ca9d" name="Actual Yield" />
// //                 </LineChart>
// //               </ResponsiveContainer>
// //             </div>

// //             {/* Market Price Trends */}
// //             <div className="bg-white rounded-xl shadow-sm p-6">
// //               <h2 className="text-xl font-semibold mb-4">Market Price Trends</h2>
// //               <ResponsiveContainer width="100%" height={300}>
// //                 <AreaChart data={marketPrices}>
// //                   <CartesianGrid strokeDasharray="3 3" />
// //                   <XAxis dataKey="month" />
// //                   <YAxis />
// //                   <Tooltip />
// //                   <Legend />
// //                   <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" name="Price ($/ton)" />
// //                 </AreaChart>
// //               </ResponsiveContainer>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React, { useState } from 'react';
// import { 
//   BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar,
//   ResponsiveContainer, AreaChart, Area, ScatterChart, Scatter
// } from 'recharts';
// import { 
//   Cloud, Home, TrendingUp, Menu, X, AlertTriangle, 
//   Leaf, Bug, DollarSign, ArrowUpRight, BarChart2
// } from 'lucide-react';

// // Extended weather forecast data
// const weatherForecast = [
//   { day: 'Mon', temp: 24, humidity: 65, rainfall: 0 },
//   { day: 'Tue', temp: 26, humidity: 70, rainfall: 20 },
//   { day: 'Wed', temp: 23, humidity: 75, rainfall: 30 },
//   { day: 'Thu', temp: 25, humidity: 68, rainfall: 10 },
//   { day: 'Fri', temp: 27, humidity: 62, rainfall: 0 },
//   { day: 'Sat', temp: 26, humidity: 60, rainfall: 0 },
//   { day: 'Sun', temp: 25, humidity: 63, rainfall: 5 },
//   { day: 'Mon', temp: 28, humidity: 58, rainfall: 0 },
//   { day: 'Tue', temp: 27, humidity: 61, rainfall: 15 },
//   { day: 'Wed', temp: 24, humidity: 72, rainfall: 25 },
//   { day: 'Thu', temp: 26, humidity: 67, rainfall: 5 },
//   { day: 'Fri', temp: 29, humidity: 59, rainfall: 0 },
// ];

// // Extended yield history data
// const yieldHistory = [
//   { month: 'Jan', yield: 420, rainfall: 50 },
//   { month: 'Feb', yield: 450, rainfall: 45 },
//   { month: 'Mar', yield: 480, rainfall: 60 },
//   { month: 'Apr', yield: 520, rainfall: 65 },
//   { month: 'May', yield: 550, rainfall: 80 },
//   { month: 'Jun', yield: 500, rainfall: 95 },
//   { month: 'Jul', yield: 480, rainfall: 100 },
//   { month: 'Aug', yield: 510, rainfall: 90 },
//   { month: 'Sep', yield: 540, rainfall: 70 },
//   { month: 'Oct', yield: 560, rainfall: 55 },
//   { month: 'Nov', yield: 530, rainfall: 40 },
//   { month: 'Dec', yield: 490, rainfall: 35 },
// ];

// // Extended market price data
// const marketPrices = [
//   { month: 'Jan', price: 280, volume: 1200 },
//   { month: 'Feb', price: 300, volume: 1300 },
//   { month: 'Mar', price: 310, volume: 1400 },
//   { month: 'Apr', price: 305, volume: 1250 },
//   { month: 'May', price: 320, volume: 1350 },
//   { month: 'Jun', price: 340, volume: 1450 },
//   { month: 'Jul', price: 335, volume: 1400 },
//   { month: 'Aug', price: 345, volume: 1500 },
//   { month: 'Sep', price: 350, volume: 1550 },
//   { month: 'Oct', price: 360, volume: 1600 },
//   { month: 'Nov', price: 355, volume: 1500 },
//   { month: 'Dec', price: 365, volume: 1650 },
// ];

// // Pest outbreak data
// const pestOutbreakData = [
//   { month: 'Jan', aphids: 25, beetles: 10, worms: 15 },
//   { month: 'Feb', aphids: 30, beetles: 15, worms: 20 },
//   { month: 'Mar', aphids: 45, beetles: 25, worms: 30 },
//   { month: 'Apr', aphids: 60, beetles: 40, worms: 45 },
//   { month: 'May', aphids: 40, beetles: 30, worms: 35 },
//   { month: 'Jun', aphids: 25, beetles: 20, worms: 25 },
//   { month: 'Jul', aphids: 15, beetles: 10, worms: 15 },
//   { month: 'Aug', aphids: 20, beetles: 15, worms: 20 },
//   { month: 'Sep', aphids: 35, beetles: 25, worms: 30 },
//   { month: 'Oct', aphids: 45, beetles: 35, worms: 40 },
//   { month: 'Nov', aphids: 30, beetles: 25, worms: 30 },
//   { month: 'Dec', aphids: 20, beetles: 15, worms: 20 },
// ];

// // Yield prediction data
// const yieldPrediction = [
//   { month: 'Jan', predicted: 450, actual: 420 },
//   { month: 'Feb', predicted: 470, actual: 450 },
//   { month: 'Mar', predicted: 490, actual: 480 },
//   { month: 'Apr', predicted: 530, actual: 520 },
//   { month: 'May', predicted: 560, actual: 550 },
//   { month: 'Jun', predicted: 510, actual: 500 },
//   { month: 'Jul', predicted: 490, actual: 480 },
//   { month: 'Aug', predicted: 520, actual: 510 },
//   { month: 'Sep', predicted: 550, actual: 540 },
//   { month: 'Oct', predicted: 570, actual: 560 },
//   { month: 'Nov', predicted: 540, actual: 530 },
//   { month: 'Dec', predicted: 500, actual: 490 },
// ];

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('dashboard');

//   const scrollToSection = (id) => {
//     setActiveTab(id);
//     setIsSidebarOpen(false);
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const stats = [
//     { 
//       icon: <TrendingUp className="h-6 w-6 text-green-500" />, 
//       title: 'Average Yield', 
//       value: '550 kg/ha',
//       bgColor: 'bg-green-50'
//     },
//     { 
//       icon: <DollarSign className="h-6 w-6 text-blue-500" />, 
//       title: 'Market Price', 
//       value: '$340/ton',
//       bgColor: 'bg-blue-50'
//     },
//     { 
//       icon: <Bug className="h-6 w-6 text-red-500" />, 
//       title: 'Pest Risk', 
//       value: 'Moderate',
//       bgColor: 'bg-red-50'
//     },
//     { 
//       icon: <BarChart2 className="h-6 w-6 text-orange-500" />, 
//       title: 'Soil Health', 
//       value: 'Good',
//       bgColor: 'bg-orange-50'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <nav className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white shadow-lg fixed w-full z-30">
//         <div className="flex justify-between items-center max-w-7xl mx-auto">
//           <div className="flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer">
//             <Leaf className="h-6 w-6 animate-pulse" />
//             <span className="text-xl font-bold">Kheti Seva</span>
//           </div>
//           <button 
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
//             className="lg:hidden hover:bg-green-500 p-2 rounded-lg transition-colors"
//           >
//             {isSidebarOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//       </nav>

//       <div className="flex pt-16">
//         {/* Sidebar */}
//         <div className={`
//           fixed lg:static inset-y-0 left-0 transform 
//           ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
//           lg:translate-x-0 transition duration-200 ease-in-out
//           w-64 bg-white shadow-lg lg:shadow-none z-20 mt-16 lg:mt-0 h-screen
//         `}>
//           <div className="p-4">
//             <div className="space-y-4">
//               {[
//                 { icon: <Home />, text: 'Dashboard', id: 'dashboard' },
//                 { icon: <Cloud />, text: 'Weather', id: 'weather' },
//                 { icon: <Bug />, text: 'Pest Outbreaks', id: 'pests' },
//                 { icon: <TrendingUp />, text: 'Market', id: 'market' },
//               ].map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`
//                     flex items-center space-x-2 w-full p-3 rounded-lg transition-all
//                     transform hover:scale-105 hover:shadow-md
//                     ${activeTab === item.id 
//                       ? 'bg-green-100 text-green-600 shadow-sm' 
//                       : 'hover:bg-gray-100'}
//                   `}
//                 >
//                   {item.icon}
//                   <span>{item.text}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-4 lg:p-8 space-y-8">
//           {/* Stats Grid */}
//           <div id="dashboard" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <div 
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow transform hover:scale-105 cursor-pointer"
//               >
//                 <div className="flex items-center">
//                   <div className={`p-3 ${stat.bgColor} rounded-lg`}>
//                     {stat.icon}
//                   </div>
//                   <div className="ml-4">
//                     <p className="text-sm text-gray-600">{stat.title}</p>
//                     <p className="text-2xl font-semibold mt-1">{stat.value}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Weather Forecast */}
//           <div id="weather" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
//             <h2 className="text-xl font-semibold mb-4 flex items-center">
//               <Cloud className="mr-2 text-blue-500" />
//               Weather Forecast
//             </h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={weatherForecast}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="day" />
//                 <YAxis yAxisId="left" />
//                 <YAxis yAxisId="right" orientation="right" />
//                 <Tooltip 
//                   contentStyle={{ 
//                     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                     border: 'none',
//                     borderRadius: '8px',
//                     boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
//                   }} 
//                 />
//                 <Legend />
//                 <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#ff7300" name="Temperature (°C)" />
//                 <Line yAxisId="right" type="monotone" dataKey="rainfall" stroke="#82ca9d" name="Rainfall (mm)" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Charts Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Pest Outbreak Chart */}
//             <div id="pests" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <Bug className="mr-2 text-red-500" />
//                 Pest Outbreak Trends
//               </h2>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={pestOutbreakData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip 
//                     contentStyle={{ 
//                       backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                       border: 'none',
//                       borderRadius: '8px',
//                       boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
//                     }}
//                   />
//                   <Legend />
//                   <Line type="monotone" dataKey="aphids" stroke="#ff7300" strokeDasharray="5 5" />
//                   <Line type="monotone" dataKey="beetles" stroke="#82ca9d" strokeDasharray="3 3" />
//                   <Line type="monotone" dataKey="worms" stroke="#8884d8" strokeDasharray="4 4" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>

//             {/* Yield Prediction */}
//             <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
//               <h2 className="text-xl font-semibold mb-4">Yield Prediction</h2>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={yieldPrediction}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip 
//                     contentStyle={{ 
//                       backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                       border: 'none',
//                       borderRadius: '8px',
//                       boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
//                     }}
//                   />
//                   <Legend />
//                   <Line type="monotone" dataKey="predicted" stroke="#ff7300" name="Predicted Yield" />
//                   <Line type="monotone" dataKey="actual" stroke="#82ca9d" name="Actual Yield" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>

//             {/* Market Price Trends */}
//             <div id="market" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <DollarSign className="mr-2 text-blue-500" />
//                 Market Price Trends
//               </h2>
//               <ResponsiveContainer width="100%" height={300}>
//                 <AreaChart data={marketPrices}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip 
//                     contentStyle={{ 
//                       backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                       border: 'none',
//                       borderRadius: '8px',
//                       boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
//                     }}
//                   />
//                   <Legend />
//                   <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" name="Price ($/ton)" />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from 'react';
// import { 
//   BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar,
//   ResponsiveContainer, AreaChart, Area
// } from 'recharts';
// import { 
//   Cloud, Home, TrendingUp, Menu, X, AlertTriangle, 
//   Leaf, Bug, DollarSign, BarChart2, Brain, Send,
//   Loader, MessageSquare
// } from 'lucide-react';

// // Data constants
// const weatherForecast = [
//   { day: 'Mon', temp: 24, humidity: 65, rainfall: 0 },
//   { day: 'Tue', temp: 26, humidity: 70, rainfall: 20 },
//   { day: 'Wed', temp: 23, humidity: 75, rainfall: 30 },
//   { day: 'Thu', temp: 25, humidity: 68, rainfall: 10 },
//   { day: 'Fri', temp: 27, humidity: 62, rainfall: 0 },
//   { day: 'Sat', temp: 26, humidity: 60, rainfall: 0 },
//   { day: 'Sun', temp: 25, humidity: 63, rainfall: 5 }
// ];

// const pestOutbreakData = [
//   { month: 'Jan', aphids: 25, beetles: 10, worms: 15 },
//   { month: 'Feb', aphids: 30, beetles: 15, worms: 20 },
//   { month: 'Mar', aphids: 45, beetles: 25, worms: 30 },
//   { month: 'Apr', aphids: 60, beetles: 40, worms: 45 },
//   { month: 'May', aphids: 40, beetles: 30, worms: 35 },
//   { month: 'Jun', aphids: 25, beetles: 20, worms: 25 }
// ];

// const marketPrices = [
//   { month: 'Jan', price: 280, volume: 1200 },
//   { month: 'Feb', price: 300, volume: 1300 },
//   { month: 'Mar', price: 310, volume: 1400 },
//   { month: 'Apr', price: 305, volume: 1250 },
//   { month: 'May', price: 320, volume: 1350 },
//   { month: 'Jun', price: 340, volume: 1450 }
// ];

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [query, setQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [chatHistory, setChatHistory] = useState([]);

//   const stats = [
//     { 
//       icon: <TrendingUp className="h-6 w-6 text-green-500" />, 
//       title: 'Average Yield', 
//       value: '550 kg/ha',
//       bgColor: 'bg-green-50'
//     },
//     { 
//       icon: <DollarSign className="h-6 w-6 text-blue-500" />, 
//       title: 'Market Price', 
//       value: '$340/ton',
//       bgColor: 'bg-blue-50'
//     },
//     { 
//       icon: <Bug className="h-6 w-6 text-red-500" />, 
//       title: 'Pest Risk', 
//       value: 'Moderate',
//       bgColor: 'bg-red-50'
//     },
//     { 
//       icon: <BarChart2 className="h-6 w-6 text-orange-500" />, 
//       title: 'Soil Health', 
//       value: 'Good',
//       bgColor: 'bg-orange-50'
//     }
//   ];

//   const navItems = [
//     { icon: <Home className="text-purple-500" />, text: 'Dashboard', id: 'dashboard' },
//     { icon: <Cloud className="text-blue-500" />, text: 'Weather', id: 'weather' },
//     { icon: <Bug className="text-red-500" />, text: 'Pest Outbreaks', id: 'pests' },
//     { icon: <TrendingUp className="text-green-500" />, text: 'Market', id: 'market' },
//     { icon: <Brain className="text-indigo-500" />, text: 'Farm AI', id: 'ai' }
//   ];

//   const askAI = async () => {
//     if (!query.trim()) return;
    
//     setIsLoading(true);
//     try {
//       const response = await fetch('http://127.0.0.1:5000/ask', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ question: query }),
//       });
      
//       const data = await response.json();
      
//       setChatHistory(prev => [...prev, 
//         { type: 'user', message: query },
//         { type: 'ai', message: data.answer }
//       ]);
      
//       setQuery('');
//     } catch (error) {
//       console.error('Error:', error);
//       setChatHistory(prev => [...prev, 
//         { type: 'user', message: query },
//         { type: 'ai', message: 'Sorry, I encountered an error. Please try again.' }
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const renderMainContent = () => {
//     if (activeTab === 'ai') {
//       return (
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center">
//             <Brain className="mr-2" />
//             Farm AI Assistant
//           </h2>
          
//           <div className="mb-6 h-96 overflow-y-auto space-y-4 p-4 bg-gray-50 rounded-lg">
//             {chatHistory.map((chat, index) => (
//               <div
//                 key={index}
//                 className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div className={`
//                   max-w-[80%] p-3 rounded-lg
//                   ${chat.type === 'user' 
//                     ? 'bg-purple-500 text-white' 
//                     : 'bg-gray-200 text-gray-800'}
//                 `}>
//                   {chat.message}
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-gray-200 p-3 rounded-lg">
//                   <Loader className="animate-spin" />
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="flex space-x-2">
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Ask about farming, weather, or crop management..."
//               className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               onKeyPress={(e) => e.key === 'Enter' && askAI()}
//             />
//             <button
//               onClick={askAI}
//               disabled={isLoading}
//               className="bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition-colors"
//             >
//               {isLoading ? <Loader className="animate-spin" /> : <Send />}
//             </button>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//           {stats.map((stat, index) => (
//             <div 
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow transform hover:scale-105 cursor-pointer"
//             >
//               <div className="flex items-center">
//                 <div className={`p-3 ${stat.bgColor} rounded-lg`}>
//                   {stat.icon}
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-sm text-gray-600">{stat.title}</p>
//                   <p className="text-2xl font-semibold mt-1">{stat.value}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
//             <h2 className="text-xl font-semibold mb-4 flex items-center">
//               <Cloud className="mr-2 text-blue-500" />
//               Weather Forecast
//             </h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={weatherForecast}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="day" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="temp" stroke="#ff7300" name="Temperature (°C)" />
//                 <Line type="monotone" dataKey="rainfall" stroke="#82ca9d" name="Rainfall (mm)" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
//             <h2 className="text-xl font-semibold mb-4 flex items-center">
//               <Bug className="mr-2 text-red-500" />
//               Pest Outbreak Trends
//             </h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={pestOutbreakData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="aphids" stroke="#ff7300" />
//                 <Line type="monotone" dataKey="beetles" stroke="#82ca9d" />
//                 <Line type="monotone" dataKey="worms" stroke="#8884d8" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
//             <h2 className="text-xl font-semibold mb-4 flex items-center">
//               <TrendingUp className="mr-2 text-green-500" />
//               Market Trends
//             </h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={marketPrices}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" name="Price ($/ton)" />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4 text-white shadow-lg fixed w-full z-30">
//         <div className="flex justify-between items-center max-w-7xl mx-auto">
//           <div className="flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer">
//             <Leaf className="h-6 w-6 animate-pulse" />
//             <span className="text-xl font-bold">Kheti Seva 2.0</span>
//           </div>
//           <button 
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
//             className="lg:hidden hover:bg-purple-500 p-2 rounded-lg transition-colors"
//           >
//             {isSidebarOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//       </nav>

//       <div className="flex pt-16">
//         <div className={`
//           fixed lg:static inset-y-0 left-0 transform 
//           ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
//           lg:translate-x-0 transition duration-200 ease-in-out
//           w-64 backdrop-blur-md bg-white/80 shadow-lg lg:shadow-none z-20 mt-16 lg:mt-0 h-screen
//         `}>
//           <div className="p-4">
//             <div className="space-y-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => setActiveTab(item.id)}
//                   className={`
//                     flex items-center space-x-2 w-full p-3 rounded-lg transition-all
//                     transform hover:scale-105 hover:shadow-md
//                     ${activeTab === item.id 
//                       ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 shadow-sm' 
//                       : 'hover:bg-gray-100'}
//                   `}
//                 >
//                   {item.icon}
//                   <span>{item.text}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 p-4 lg:p-8 space-y-8">
//           {renderMainContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






import React, { useState, useEffect, useRef } from 'react';
import {
  BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar,
  ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar,
} from 'recharts';
import {
  Cloud, Home, TrendingUp, Menu, X, AlertCircle,
  Leaf, Bug, DollarSign, BarChart2, Brain, Send,
  Loader, MessageSquare, Sun, Droplet, Thermometer,
  Cpu, Wind, Activity, Award, Calendar,
} from 'lucide-react';

// Data constants (Expanded)
const weatherForecast = [
  { day: 'Mon', temp: 24, humidity: 65, rainfall: 0, wind: 10 },
  { day: 'Tue', temp: 26, humidity: 70, rainfall: 20, wind: 15 },
  { day: 'Wed', temp: 23, humidity: 75, rainfall: 30, wind: 12 },
  { day: 'Thu', temp: 25, humidity: 68, rainfall: 10, wind: 8 },
  { day: 'Fri', temp: 27, humidity: 62, rainfall: 0, wind: 5 },
  { day: 'Sat', temp: 26, humidity: 60, rainfall: 0, wind: 7 },
  { day: 'Sun', temp: 25, humidity: 63, rainfall: 5, wind: 10 },
  { day: 'Mon', temp: 28, humidity: 58, rainfall: 0, wind: 13 },
  { day: 'Tue', temp: 27, humidity: 61, rainfall: 15, wind: 9 },
  { day: 'Wed', temp: 24, humidity: 72, rainfall: 25, wind: 6 },
  { day: 'Thu', temp: 26, humidity: 67, rainfall: 5, wind: 11 },
  { day: 'Fri', temp: 29, humidity: 59, rainfall: 0, wind: 14 },
  { day: 'Sat', temp: 28, humidity: 55, rainfall: 0, wind: 18 },
  { day: 'Sun', temp: 27, humidity: 60, rainfall: 10, wind: 12 },
];

const pestOutbreakData = [
  { month: 'Jan', aphids: 25, beetles: 10, worms: 15, spiders: 5 },
  { month: 'Feb', aphids: 30, beetles: 15, worms: 20, spiders: 7 },
  { month: 'Mar', aphids: 45, beetles: 25, worms: 30, spiders: 10 },
  { month: 'Apr', aphids: 60, beetles: 40, worms: 45, spiders: 15 },
  { month: 'May', aphids: 40, beetles: 30, worms: 35, spiders: 12 },
  { month: 'Jun', aphids: 25, beetles: 20, worms: 25, spiders: 8 },
  { month: 'Jul', aphids: 15, beetles: 10, worms: 15, spiders: 5 },
  { month: 'Aug', aphids: 20, beetles: 15, worms: 20, spiders: 9 },
  { month: 'Sep', aphids: 35, beetles: 25, worms: 30, spiders: 11 },
  { month: 'Oct', aphids: 45, beetles: 35, worms: 40, spiders: 18 },
  { month: 'Nov', aphids: 30, beetles: 25, worms: 30, spiders: 14 },
  { month: 'Dec', aphids: 20, beetles: 15, worms: 20, spiders: 10 },
];

const marketPrices = [
  { month: 'Jan', price: 280, volume: 1200, demand: 1500 },
  { month: 'Feb', price: 300, volume: 1300, demand: 1600 },
  { month: 'Mar', price: 310, volume: 1400, demand: 1750 },
  { month: 'Apr', price: 305, volume: 1250, demand: 1650 },
  { month: 'May', price: 320, volume: 1350, demand: 1800 },
  { month: 'Jun', price: 340, volume: 1450, demand: 1900 },
  { month: 'Jul', price: 335, volume: 1400, demand: 1850 },
  { month: 'Aug', price: 345, volume: 1500, demand: 1950 },
  { month: 'Sep', price: 350, volume: 1550, demand: 2000 },
  { month: 'Oct', price: 360, volume: 1600, demand: 2100 },
  { month: 'Nov', price: 355, volume: 1500, demand: 2050 },
  { month: 'Dec', price: 365, volume: 1650, demand: 2150 },
];

const yieldHistory = [
  { year: 2010, yield: 380, rainfall: 600 },
  { year: 2011, yield: 400, rainfall: 550 },
  { year: 2012, yield: 420, rainfall: 620 },
  { year: 2013, yield: 450, rainfall: 580 },
  { year: 2014, yield: 480, rainfall: 650 },
  { year: 2015, yield: 460, rainfall: 500 },
  { year: 2016, yield: 490, rainfall: 570 },
  { year: 2017, yield: 520, rainfall: 610 },
  { year: 2018, yield: 550, rainfall: 680 },
  { year: 2019, yield: 530, rainfall: 590 },
  { year: 2020, yield: 560, rainfall: 630 },
  { year: 2021, yield: 580, rainfall: 700 },
  { year: 2022, yield: 600, rainfall: 660 },
  { year: 2023, yield: 620, rainfall: 720 },
];

const cropComparison = [
  { name: 'Wheat', current: 550, previous: 520, ideal: 580 },
  { name: 'Rice', current: 480, previous: 450, ideal: 500 },
  { name: 'Corn', current: 620, previous: 580, ideal: 650 },
  { name: 'Soybean', current: 340, previous: 320, ideal: 360 },
  { name: 'Cotton', current: 420, previous: 390, ideal: 440 },
];

const soilComposition = [
  { name: 'Nitrogen', value: 45 },
  { name: 'Phosphorus', value: 25 },
  { name: 'Potassium', value: 20 },
  { name: 'Organic Matter', value: 10 },
];

// Custom Tooltip for Charts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 p-3 rounded-lg shadow-md border">
        {payload.map((entry, index) => (
          <p key={index} className="text-gray-700" style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const chatContainerRef = useRef(null);

  // Scroll to bottom of chat when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      title: 'Average Yield',
      value: '620 kg/ha',
      bgColor: 'bg-green-50',
      trend: 'up', // Add trend (up, down, neutral)
    },
    {
      icon: <DollarSign className="h-6 w-6 text-blue-500" />,
      title: 'Market Price',
      value: '$365/ton',
      bgColor: 'bg-blue-50',
      trend: 'up',
    },
    {
      icon: <Bug className="h-6 w-6 text-red-500" />,
      title: 'Pest Risk',
      value: 'Low',
      bgColor: 'bg-red-50',
      trend: 'down',
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-orange-500" />,
      title: 'Soil Health',
      value: 'Excellent',
      bgColor: 'bg-orange-50',
      trend: 'up',
    },
  ];

  const navItems = [
    { icon: <Home className="text-purple-500" />, text: 'Dashboard', id: 'dashboard' },
    { icon: <Cloud className="text-blue-500" />, text: 'Weather', id: 'weather' },
    { icon: <Bug className="text-red-500" />, text: 'Pest Outbreaks', id: 'pests' },
    { icon: <TrendingUp className="text-green-500" />, text: 'Market', id: 'market' },
    { icon: <Brain className="text-indigo-500" />, text: 'Farm AI', id: 'ai' },
  ];

  const askAI = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: query }),
      });

      const data = await response.json();

      setChatHistory((prev) => [
        ...prev,
        { type: 'user', message: query },
        { type: 'ai', message: data.answer },
      ]);

      setQuery('');
    } catch (error) {
      console.error('Error:', error);
      setChatHistory((prev) => [
        ...prev,
        { type: 'user', message: query },
        { type: 'ai', message: 'Sorry, I encountered an error. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMainContent = () => {
    if (activeTab === 'ai') {
      return (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center">
            <Brain className="mr-2" />
            Farm AI Assistant
          </h2>
          <div
            ref={chatContainerRef}
            className="mb-6 h-96 overflow-y-auto space-y-4 p-4 bg-gray-50 rounded-lg"
          >
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`
                    max-w-[80%] p-3 rounded-lg shadow-sm
                    ${chat.type === 'user'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-200 text-gray-800'}
                  `}
                >
                  {chat.message}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-gray-200 p-3 rounded-lg flex items-center">
                  <Loader className="animate-spin mr-2" /> Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about farming, weather, or crop management..."
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onKeyPress={(e) => e.key === 'Enter' && askAI()}
            />
            <button
              onClick={askAI}
              disabled={isLoading}
              className="bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition-colors"
            >
              {isLoading ? <Loader className="animate-spin" /> : <Send />}
            </button>
          </div>
        </div>
      );
    } else if (activeTab === 'weather') {
      return (
        <>
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Cloud className="mr-2 text-blue-500" />
              Current Weather
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="flex items-center">
                <Sun className="mr-2 text-yellow-500" />
                Temperature: {weatherForecast[0].temp}°C
              </div>
              <div className="flex items-center">
                <Droplet className="mr-2 text-blue-400" />
                Humidity: {weatherForecast[0].humidity}%
              </div>
              <div className="flex items-center">
                <Thermometer className="mr-2 text-red-500" />
                Feels Like: {Math.round(weatherForecast[0].temp * 1.1)}°C
              </div>
              <div className="flex items-center">
                <Wind className="mr-2 text-blue-600" />
                Wind: {weatherForecast[0].wind} km/h
              </div>
              <div className="flex items-center">
                <Activity className="mr-2 text-green-500" />
                UV Index: 3 (Moderate)
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="mr-2 text-blue-500" />
              Weather Forecast
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weatherForecast}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="temp" stroke="#ff7300" name="Temperature (°C)" strokeWidth={2} />
                <Line type="monotone" dataKey="rainfall" stroke="#82ca9d" name="Rainfall (mm)" strokeWidth={2} />
                <Line type="monotone" dataKey="wind" stroke="#8884d8" name="Wind (km/h)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      );
    } else if (activeTab === 'pests') {
      return (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Bug className="mr-2 text-red-500" />
            Pest Outbreak Trends
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} width={730} height={250} data={pestOutbreakData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="month" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Aphids" dataKey="aphids" stroke="#ff7300" fill="#ff7300" fillOpacity={0.6} />
              <Radar name="Beetles" dataKey="beetles" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Radar name="Worms" dataKey="worms" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Legend />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Pest Advisory</h3>
            <ul className="list-disc list-inside">
              {pestOutbreakData[0].aphids > 30 && (
                <li className="text-red-600 flex items-center">
                  <AlertCircle className="mr-1" />
                  High aphid activity detected. Consider using neem oil spray.
                </li>
              )}
              {pestOutbreakData[0].beetles > 20 && (
                <li className="text-red-600 flex items-center">
                  <AlertCircle className="mr-1" />
                  Increased beetle activity. Inspect crops regularly.
                </li>
              )}
              {pestOutbreakData[0].worms > 25 && (
                <li className="text-red-600 flex items-center">
                  <AlertCircle className="mr-1" />
                  Worm infestation risk. Monitor and use biological control if needed.
                </li>
              )}
              {pestOutbreakData[0].aphids <= 30 && pestOutbreakData[0].beetles <= 20 && pestOutbreakData[0].worms <= 25 && (
                <li className="text-green-600">
                  <Award className="mr-1" />
                  Pest activity is currently low.
                </li>
              )}
            </ul>
          </div>
        </div>
      );
    } else if (activeTab === 'market') {
      return (
        <>
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <TrendingUp className="mr-2 text-green-500" />
              Market Price Trends
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={marketPrices}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" name="Price ($/ton)" />
                <Area type="monotone" dataKey="demand" stroke="#82ca9d" fill="#82ca9d" name="Demand" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart2 className="mr-2 text-green-500" />
              Crop Yield Comparison
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cropComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="current" fill="#82ca9d" name="Current Year" />
                <Bar dataKey="previous" fill="#8884d8" name="Previous Year" />
                <Bar dataKey="ideal" fill="#ff7300" name="Ideal Yield" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      );
    }
    
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow transform hover:scale-105 cursor-pointer ${stat.trend === 'up' ? 'border-l-4 border-green-500' : stat.trend === 'down' ? 'border-l-4 border-red-500' : 'border-l-4 border-gray-500'
                }`}
            >
              <div className="flex items-center">
                <div className={`p-3 ${stat.bgColor} rounded-lg`}>
                  {stat.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart2 className="mr-2 text-green-600" />
              Yield History
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yieldHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="yield" fill="#82ca9d" name="Yield (kg/ha)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Cpu className="mr-2 text-blue-600" />
              Soil Composition
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={soilComposition}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {soilComposition.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4 text-white shadow-lg fixed w-full z-30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer">
            <Leaf className="h-6 w-6 animate-pulse" />
            <span className="text-xl font-bold">Kheti Seva 2.0</span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden hover:bg-purple-500 p-2 rounded-lg transition-colors"
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <div className="flex pt-16">
        <div
          className={`fixed lg:static inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 transition duration-200 ease-in-out w-64 backdrop-blur-md bg-white/80 shadow-lg lg:shadow-none z-20 mt-16 lg:mt-0 h-screen`}
        >
          <div className="p-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsSidebarOpen(false); // Close sidebar on item click (mobile)
                  }}
                  className={`flex items-center space-x-2 w-full p-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-md ${activeTab === item.id
                    ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 shadow-sm'
                    : 'hover:bg-gray-100'
                    }`}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 lg:p-8 space-y-8">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;