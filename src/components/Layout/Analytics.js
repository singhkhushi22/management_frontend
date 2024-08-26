



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Progress } from 'antd';

// const Analytics = () => {
//   const [analyticsData, setAnalyticsData] = useState(null);

//   useEffect(() => {
//     const userId = '66bc204a13b810e059dc2b68';
//     const startDate = '2024-08-23';
//     const endDate = '2024-08-23';

   


//     const fetchAnalyticsData = async () => {
//       try {
//         const response = await axios.get('/api/v1/transections/analytics', {
//           params: { userId, startDate, endDate }
//         });
//         console.log('Fetched Analytics Data:', response.data); // Add this line
//         setAnalyticsData(response.data);
//       } catch (error) {
//         console.error('Error fetching analytics data:', error.response ? error.response.data : error.message);
//       }
//     };
    

//     fetchAnalyticsData();
//   }, []);

//   if (!analyticsData) return <p>Loading...</p>;

//   const {
//     totalTransection,
//     totalIncomeTransections,
//     totalExpenseTransections,
//     totalIncomePercent,
//     totalExpensePercent,
//     totalTurnover,
//     totalIncomeTurnover,
//     totalExpenseTurnover,
//     totalIncomeTurnoverPercent,
//     totalExpenseTurnoverPercent,
//     categoryWiseIncome,
//     categoryWiseExpense
//   } = analyticsData;

//   return (
//     <div className='row m-3'>
//       <div className='col-md-3'>
//         <div className='card'>
//           <div className='card-header'>
//             Total Transactions: {totalTransection}
//           </div>
//           <div className='card-body'>
//             <h5 className='text-success'>Income: {totalIncomeTransections}</h5>
//             <h5 className='text-danger'>Expense: {totalExpenseTransections}</h5>
//             <h5>Income Percentage: {totalIncomePercent.toFixed(2)}%</h5>
//             <h5>Expense Percentage: {totalExpensePercent.toFixed(2)}%</h5>
//           </div>
//           <div>
//             <Progress type='circle' strokeColor={'green'} className='mx-2' percent={parseInt(totalIncomePercent.toFixed(0), 10)} />
//           </div>
//           <div>
//             <Progress type='circle' strokeColor={'red'} className='mx-2' percent={parseInt(totalExpensePercent.toFixed(0), 10)} />
//           </div>
//         </div>
//       </div>

//       <div className='col-md-3'>
//         <div className='card'>
//           <div className='card-header'>
//             Total Turnover: {totalTurnover}
//           </div>
//           <div className='card-body'>
//             <h5 className='text-success'>Income: {totalIncomeTurnover}</h5>
//             <h5 className='text-danger'>Expense: {totalExpenseTurnover}</h5>
//             <h5>Income Turnover Percentage: {totalIncomeTurnoverPercent.toFixed(2)}%</h5>
//             <h5>Expense Turnover Percentage: {totalExpenseTurnoverPercent.toFixed(2)}%</h5>
//           </div>
//           <div>
//             <Progress type='circle' strokeColor={'green'} className='mx-2' percent={parseInt(totalIncomeTurnoverPercent.toFixed(0), 10)} />
//           </div>
//           <div>
//             <Progress type='circle' strokeColor={'red'} className='mx-2' percent={parseInt(totalExpenseTurnoverPercent.toFixed(0), 10)} />
//           </div>
//         </div>
//       </div>

//       <div className='col-md-3'>
//         <div className='card'>
//           <div className='card-header'>
//             Category-wise Income
//           </div>
//           <div className='card-body'>
//             {Object.keys(categoryWiseIncome).map(category => (
//               <div key={category}>
//                 <h5 className='text-success'>
//                   {category.charAt(0).toUpperCase() + category.slice(1)}: {categoryWiseIncome[category]}
//                 </h5>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className='col-md-3'>
//         <div className='card'>
//           <div className='card-header'>
//             Category-wise Expense
//           </div>
//           <div className='card-body'>
//             {Object.keys(categoryWiseExpense).map(category => (
//               <div key={category}>
//                 <h5 className='text-danger'>
//                   {category.charAt(0).toUpperCase() + category.slice(1)}: {categoryWiseExpense[category]}
//                 </h5>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Progress } from 'antd';

// const Analytics = () => {
//   const [analyticsData, setAnalyticsData] = useState(null);

//   useEffect(() => {
//     const fetchAnalyticsData = async () => {
//       try {
//         const response = await axios.get('/api/v1/transections/analytics');
//         console.log('Fetched Analytics Data:', response.data);
//         setAnalyticsData(response.data);
//       } catch (error) {
//         console.error('Error fetching analytics data:', error.response ? error.response.data : error.message);
//       }
//     };

//     fetchAnalyticsData();
//   }, []);

//   if (!analyticsData) return <p>Loading...</p>;

//   const {
//     totalTransection,
//     totalIncomeTransections,
//     totalExpenseTransections,
//     totalIncomePercent,
//     totalExpensePercent,
//     totalTurnover,
//     totalIncomeTurnover,
//     totalExpenseTurnover,
//     totalIncomeTurnoverPercent,
//     totalExpenseTurnoverPercent,
//     categoryWiseIncome,
//     categoryWiseExpense
//   } = analyticsData;

//   return (
//     <div className='row m-3'>
//       <div className='col-md-3'>
//         <div className='card'>
//           <div className='card-header'>
//             Total Transactions: {totalTransection}
//           </div>
//           <div className='card-body'>
//             <h5 className='text-success'>Income: {totalIncomeTransections}</h5>
//             <h5 className='text-danger'>Expense: {totalExpenseTransections}</h5>
//             <h5>Income Percentage: {totalIncomePercent.toFixed(2)}%</h5>
//             <h5>Expense Percentage: {totalExpensePercent.toFixed(2)}%</h5>
//           </div>
//           <div>
//             <Progress type='circle' strokeColor={'green'} className='mx-2' percent={parseInt(totalIncomePercent.toFixed(0), 10)} />
//           </div>
//           <div>
//             <Progress type='circle' strokeColor={'red'} className='mx-2' percent={parseInt(totalExpensePercent.toFixed(0), 10)} />
//           </div>
//         </div>
//       </div>

//       <div className='col-md-3'>
//         <div className='card'>
//           <div className='card-header'>
//             Total Turnover: {totalTurnover}
//           </div>
//           <div className='card-body'>
//             <h5 className='text-success'>Income: {totalIncomeTurnover}</h5>
//             <h5 className='text-danger'>Expense: {totalExpenseTurnover}</h5>
//             <h5>Income Turnover Percentage: {totalIncomeTurnoverPercent.toFixed(2)}%</h5>
//             <h5>Expense Turnover Percentage: {totalExpenseTurnoverPercent.toFixed(2)}%</h5>
//           </div>
//           <div>
//             <Progress type='circle' strokeColor={'green'} className='mx-2' percent={parseInt(totalIncomeTurnoverPercent.toFixed(0), 10)} />
//           </div>
//           <div>
//             <Progress type='circle' strokeColor={'red'} className='mx-2' percent={parseInt(totalExpenseTurnoverPercent.toFixed(0), 10)} />
//           </div>
//         </div>
//       </div>

//       <div className='col-md-3'>
//         <div className='card'>
//           <div className='card-header'>
//             Category-wise Income
//           </div>
//           <div className='card-body'>
//             {Object.keys(categoryWiseIncome).map(category => (
//               <div key={category}>
//                 <h5 className='text-success'>
//                   {category.charAt(0).toUpperCase() + category.slice(1)}: {categoryWiseIncome[category]}
//                 </h5>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className='col-md-3'>
//         <div className='card'>
//           <div className='card-header'>
//             Category-wise Expense
//           </div>
//           <div className='card-body'>
//             {Object.keys(categoryWiseExpense).map(category => (
//               <div key={category}>
//                 <h5 className='text-danger'>
//                   {category.charAt(0).toUpperCase() + category.slice(1)}: {categoryWiseExpense[category]}
//                 </h5>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Progress } from 'antd';
import './Analytics.css'; // Ensure you import your CSS file

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const response = await axios.get('/api/v1/transections/analytics');
        console.log('Fetched Analytics Data:', response.data);
        setAnalyticsData(response.data);
      } catch (error) {
        console.error('Error fetching analytics data:', error.response ? error.response.data : error.message);
      }
    };

    fetchAnalyticsData();
  }, []);

  if (!analyticsData) return <p>Loading...</p>;

  const {
    totalTransection,
    totalIncomeTransections,
    totalExpenseTransections,
    totalIncomePercent,
    totalExpensePercent,
    totalTurnover,
    totalIncomeTurnover,
    totalExpenseTurnover,
    totalIncomeTurnoverPercent,
    totalExpenseTurnoverPercent,
    categoryWiseIncome,
    categoryWiseExpense
  } = analyticsData;

  return (
    <div className='row m-3'>
      <div className='col-md-3'>
        <div className='card'>
          <div className='card-header'>
            Total Transactions: {totalTransection}
          </div>
          <div className='card-body'>
            <h5 className='text-success'>Income: {totalIncomeTransections}</h5>
            <h5 className='text-danger'>Expense: {totalExpenseTransections}</h5>
            <h5>Income Percentage: {totalIncomePercent.toFixed(2)}%</h5>
            <h5>Expense Percentage: {totalExpensePercent.toFixed(2)}%</h5>
          </div>
          <div>
            <Progress type='circle' strokeColor={'green'} className='mx-2' percent={parseInt(totalIncomePercent.toFixed(0), 10)} />
          </div>
          <div>
            <Progress type='circle' strokeColor={'red'} className='mx-2' percent={parseInt(totalExpensePercent.toFixed(0), 10)} />
          </div>
        </div>
      </div>

      <div className='col-md-3'>
        <div className='card'>
          <div className='card-header'>
            Total Turnover: {totalTurnover}
          </div>
          <div className='card-body'>
            <h5 className='text-success'>Income: {totalIncomeTurnover}</h5>
            <h5 className='text-danger'>Expense: {totalExpenseTurnover}</h5>
            <h5>Income Turnover Percentage: {totalIncomeTurnoverPercent.toFixed(2)}%</h5>
            <h5>Expense Turnover Percentage: {totalExpenseTurnoverPercent.toFixed(2)}%</h5>
          </div>
          <div>
            <Progress type='circle' strokeColor={'green'} className='mx-2' percent={parseInt(totalIncomeTurnoverPercent.toFixed(0), 10)} />
          </div>
          <div>
            <Progress type='circle' strokeColor={'red'} className='mx-2' percent={parseInt(totalExpenseTurnoverPercent.toFixed(0), 10)} />
          </div>
        </div>
      </div>

      <div className='col-md-3'>
        <div className='card'>
          <div className='card-header'>
            Category-wise Income
          </div>
          <div className='card-body'>
            {Object.keys(categoryWiseIncome).map(category => (
              <div key={category}>
                <h5 className='text-success'>
                  {category.charAt(0).toUpperCase() + category.slice(1)}: {categoryWiseIncome[category]}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='col-md-3'>
        <div className='card'>
          <div className='card-header'>
            Category-wise Expense
          </div>
          <div className='card-body'>
            {Object.keys(categoryWiseExpense).map(category => (
              <div key={category}>
                <h5 className='text-danger'>
                  {category.charAt(0).toUpperCase() + category.slice(1)}: {categoryWiseExpense[category]}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;










