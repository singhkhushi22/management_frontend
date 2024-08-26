








// import React, { useState, useEffect, useCallback } from "react";
// import Layout from "../components/Layout/Layout";
// import { Modal, Form, Input, Select, message, Table } from 'antd';
// import { UnorderedListOutlined, AreaChartOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import axios from "axios";
// import Spinner from "../components/spinner";
// import { DatePicker } from 'antd';
// import moment from "moment";
// import Analytics from "../components/Layout/Analytics";



// const { RangePicker } = DatePicker;
// const { Option } = Select;

// const HomePage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [showLoading, setLoading] = useState(false);
//   const [allTransections, setAllTransections] = useState([]);
//   const [frequency, setFrequency] = useState("7");
//   const [selectedDate, setSelectedDate] = useState([]);
//   const [type, setType] = useState('all');
//   const [viewData, setViewData] = useState('table');
//   const [editingTransection, setEditingTransection] = useState(null);

//   const columns = [
//     {
//       title: "Date",
//       dataIndex: "date",
//       render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
//     },
//     {
//       title: "Amount",
//       dataIndex: "amount"
//     },
//     {
//       title: "Type",
//       dataIndex: "type"
//     },
//     {
//       title: "Category",
//       dataIndex: "category"
//     },
//     {
//       title: "Actions",
//       render: (text, record) => (
//         <div>
//           <EditOutlined 
//             onClick={() => {
//               setEditingTransection(record);
//               setShowModal(true);
//             }}
//             style={{ cursor: "pointer", color: "blue", marginRight: 12 }}
//           />
//           <DeleteOutlined 
//             onClick={() => handleDelete(record._id)}
//             style={{ cursor: "pointer", color: "red" }}
//           />
//         </div>
//       ),
//     }
//   ];

 

 


//   const fetchTransections = useCallback(async () => {
//     try {
//       setLoading(true);
//       const user = JSON.parse(localStorage.getItem('user'));
  
//       const response = await axios.get('/api/v1/transections/get-transection', { 
//         params: { 
//           userId: user._id, 
//           frequency, 
//           selectedDate: selectedDate.length ? selectedDate : undefined,
//           _: new Date().getTime() // Adding a timestamp to avoid caching
//         },
//         headers: {
//           'Cache-Control': 'no-cache',
//           'Pragma': 'no-cache',
//           'Expires': '0'// Ensuring no client-side caching
//         }
//       });
//       console.log(response.data);
  
//       setAllTransections(response.data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       message.error("Failed to fetch transactions");
//     }
//   }, [frequency, selectedDate]);
  
  
  
  
//   useEffect(() => {
//     fetchTransections();
//   }, [fetchTransections]);

//   // Handle form submission for adding or updating a transaction
//   const handleSubmit = async (values) => {
//     try {
//       const user = JSON.parse(localStorage.getItem('user'));
//       setLoading(true);
//       if (editingTransection) {
//         await axios.put(`/api/v1/transections/update-transection/${editingTransection._id}`, { ...values, userId: user._id });
//         message.success('Transection updated successfully');
//       } else {
//         await axios.post('/api/v1/transections/add-transection', { ...values, userId: user._id });
//         message.success('Transection added successfully');
//       }
//       setShowModal(false);
//       setEditingTransection(null);
//       fetchTransections();
//     } catch (error) {
//       setLoading(false);
//       message.error("Failed to add/update transection");
//     }
//   };

//   // Handle deletion of a transaction
//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       await axios.delete(`/api/v1/transections/delete-transection/${id}`);
//       message.success('Transection deleted successfully');
//       fetchTransections();
//     } catch (error) {
//       setLoading(false);
//       message.error("Failed to delete transection");
//     }
//   };

//   return (
//     <Layout>
//       {showLoading && <Spinner />}
//       <div className="filters">
//         <div>
//           <h6>Select Frequency</h6>
//           <Select value={frequency} onChange={value => setFrequency(value)}>
//             <Option value="7">Last 1 Week</Option>
//             <Option value="30">Last 1 Month</Option>
//             <Option value="365">Last 1 Year</Option>
//             <Option value="custom">Custom</Option>
//           </Select>
//           {frequency === 'custom' && <RangePicker value={selectedDate} onChange={values => setSelectedDate(values)} />}
//         </div>

//         <div>
//           <h6>Select Type</h6>
//           <Select value={type} onChange={value => setType(value)}>
//             <Option value="all">All</Option>
//             <Option value="income">Income</Option>
//             <Option value="expense">Expense</Option>
//           </Select>
//         </div>

//         <div className="switch-icons">
//           <div className={`mx-2 ${viewData === 'table' ? 'active-icon' : 'inactive-icon'}`}>
//             <UnorderedListOutlined className="mx-2" onClick={() => setViewData('table')} />
//           </div>
//           <div className={`mx-2 ${viewData === 'analytics' ? 'active-icon' : 'inactive-icon'}`}>
//             <AreaChartOutlined className="mx-2" onClick={() => setViewData('analytics')} />
//           </div>
//         </div>
//         <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add New</button>
//       </div>

//       <div>
//         <div className="content">
//           {viewData === 'table' ? (
//             <Table dataSource={allTransections} columns={columns} rowKey="_id" />
//           ) : (
//             <Analytics data={allTransections} />
//           )}
//         </div>
//       </div>

//       <Modal
//         title={`${editingTransection ? "Edit" : "Add"} Transection`}
//         open={showModal}
//         onCancel={() => { setShowModal(false); setEditingTransection(null); }}
//         footer={null}
//       >
//         <Form layout="vertical" onFinish={handleSubmit} initialValues={editingTransection}>
//           <Form.Item label="Amount" name="amount" rules={[{ required: true, message: 'Please input the amount!' }]}>
//             <Input type="number" />
//           </Form.Item>
//           <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please select the type!' }]}>
//             <Select>
//               <Option value="income">Income</Option>
//               <Option value="expense">Expense</Option>
//             </Select>
//           </Form.Item>

//           <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select the category!' }]}>
//             <Select>
//               <Option value="salary">Salary</Option>
//               <Option value="tip">Tip</Option>
//               <Option value="project">Project</Option>
//               <Option value="movie">Movie</Option>
//               <Option value="food">Food</Option>
//               <Option value="bills">Bills</Option>
//               <Option value="medical">Medical</Option>
//               <Option value="fee">Fee</Option>
//               <Option value="tax">Tax</Option>
//             </Select>
//           </Form.Item>

//           <Form.Item label="Date" name="date" >
//             <Input type="date" />
//           </Form.Item>

//           <Form.Item label="Description" name="description">
//             <Input type="text" />
//           </Form.Item>

//           <Form.Item label="Reference" name="reference">
//             <Input type="text" />
//           </Form.Item>

//           <div className="d-flex justify-content-end">
//             <button type="submit" className="btn btn-primary">SAVE</button>
//           </div>
//         </Form>
//       </Modal>
//     </Layout>
//   );
// };

// export default HomePage;





// import React, { useState, useEffect, useCallback } from "react";
// import Layout from "../components/Layout/Layout";
// import { Modal, Form, Input, Select, message, Table, DatePicker } from 'antd';
// import { UnorderedListOutlined, AreaChartOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import axios from "axios";
// import Spinner from "../components/spinner";
// import moment from "moment";
// import Analytics from "../components/Layout/Analytics";

// const { RangePicker } = DatePicker;
// const { Option } = Select;

// const HomePage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [showLoading, setLoading] = useState(false);
//   const [allTransections, setAllTransections] = useState([]);
//   const [frequency, setFrequency] = useState("7");
//   const [selectedDate, setSelectedDate] = useState([]);
//   const [type, setType] = useState('all');
//   const [viewData, setViewData] = useState('table');
//   const [editingTransection, setEditingTransection] = useState(null);

//   const columns = [
//     {
//       title: "Date",
//       dataIndex: "date",
//       render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
//     },
//     {
//       title: "Amount",
//       dataIndex: "amount"
//     },
//     {
//       title: "Type",
//       dataIndex: "type"
//     },
//     {
//       title: "Category",
//       dataIndex: "category"
//     },
//     {
//       title: "Actions",
//       render: (text, record) => (
//         <div>
//           <EditOutlined 
//             onClick={() => {
//               setEditingTransection(record);
//               setShowModal(true);
//             }}
//             style={{ cursor: "pointer", color: "blue", marginRight: 12 }}
//           />
//           <DeleteOutlined 
//             onClick={() => handleDelete(record._id)}
//             style={{ cursor: "pointer", color: "red" }}
//           />
//         </div>
//       ),
//     }
//   ];

//   const fetchTransections = useCallback(async () => {
//     try {
//       setLoading(true);
//       const user = JSON.parse(localStorage.getItem('user'));

//       const response = await axios.get('/api/v1/transections/get-transection', { 
//         params: { 
//           userId: user._id, 
//           frequency, 
//           type: type !== 'all' ? type : undefined,
//           startDate: selectedDate.length ? moment(selectedDate[0]).format("YYYY-MM-DD") : undefined,
//           endDate: selectedDate.length ? moment(selectedDate[1]).format("YYYY-MM-DD") : undefined,
//           _: new Date().getTime() // Adding a timestamp to avoid caching
//         },
//         headers: {
//           'Cache-Control': 'no-cache',
//           'Pragma': 'no-cache',
//           'Expires': '0' // Ensuring no client-side caching
//         }
//       });
//       setAllTransections(response.data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       message.error("Failed to fetch transactions");
//     }
//   }, [frequency, selectedDate, type]);

//   useEffect(() => {
//     fetchTransections();
//   }, [fetchTransections]);

//   const handleSubmit = async (values) => {
//     try {
//       const user = JSON.parse(localStorage.getItem('user'));
//       setLoading(true);
//       if (editingTransection) {
//         await axios.put(`/api/v1/transections/update-transection/${editingTransection._id}`, { ...values, userId: user._id });
//         message.success('Transaction updated successfully');
//       } else {
//         await axios.post('/api/v1/transections/add-transection', { ...values, userId: user._id });
//         message.success('Transaction added successfully');
//       }
//       setShowModal(false);
//       setEditingTransection(null);
//       fetchTransections();
//     } catch (error) {
//       setLoading(false);
//       message.error("Failed to add/update transaction");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       await axios.delete(`/api/v1/transections/delete-transection/${id}`);
//       message.success('Transaction deleted successfully');
//       fetchTransections();
//     } catch (error) {
//       setLoading(false);
//       message.error("Failed to delete transaction");
//     }
//   };

//   return (
//     <Layout>
//       {showLoading && <Spinner />}
//       <div className="filters">
//         <div>
//           <h6>Select Frequency</h6>
//           <Select value={frequency} onChange={value => setFrequency(value)}>
//             <Option value="7">Last 1 Week</Option>
//             <Option value="30">Last 1 Month</Option>
//             <Option value="365">Last 1 Year</Option>
//             <Option value="custom">Custom</Option>
//           </Select>
//           {frequency === 'custom' && <RangePicker value={selectedDate} onChange={values => setSelectedDate(values)} />}
//         </div>

//         <div>
//           <h6>Select Type</h6>
//           <Select value={type} onChange={value => setType(value)}>
//             <Option value="all">All</Option>
//             <Option value="income">Income</Option>
//             <Option value="expense">Expense</Option>
//           </Select>
//         </div>

//         <div className="switch-icons">
//           <div className={`mx-2 ${viewData === 'table' ? 'active-icon' : 'inactive-icon'}`}>
//             <UnorderedListOutlined className="mx-2" onClick={() => setViewData('table')} />
//           </div>
//           <div className={`mx-2 ${viewData === 'analytics' ? 'active-icon' : 'inactive-icon'}`}>
//             <AreaChartOutlined className="mx-2" onClick={() => setViewData('analytics')} />
//           </div>
//         </div>
//         <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add New</button>
//       </div>

//       <div>
//         <div className="content">
//           {viewData === 'table' ? (
//             <Table dataSource={allTransections} columns={columns} rowKey="_id" />
//           ) : (
//             <Analytics data={allTransections} />
//           )}
//         </div>
//       </div>

//       <Modal
//         title={`${editingTransection ? "Edit" : "Add"} Transaction`}
//         open={showModal}
//         onCancel={() => { setShowModal(false); setEditingTransection(null); }}
//         footer={null}
//       >
//         <Form layout="vertical" onFinish={handleSubmit} initialValues={editingTransection}>
//           <Form.Item label="Amount" name="amount" rules={[{ required: true, message: 'Please input the amount!' }]}>
//             <Input type="number" />
//           </Form.Item>
//           <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please select the type!' }]}>
//             <Select>
//               <Option value="income">Income</Option>
//               <Option value="expense">Expense</Option>
//             </Select>
//           </Form.Item>

//           <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select the category!' }]}>
//             <Select>
//               <Option value="salary">Salary</Option>
//               <Option value="tip">Tip</Option>
//               <Option value="project">Project</Option>
//               <Option value="movie">Movie</Option>
//               <Option value="food">Food</Option>
//               <Option value="bills">Bills</Option>
//               <Option value="medical">Medical</Option>
//               <Option value="fee">Fee</Option>
//               <Option value="tax">Tax</Option>
//             </Select>
//           </Form.Item>

//           <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please select the date!' }]}>
//             <DatePicker format="YYYY-MM-DD" />
//           </Form.Item>

//           <Form.Item label="Description" name="description">
//             <Input type="text" />
//           </Form.Item>

//           <Form.Item label="Reference" name="reference">
//             <Input type="text" />
//           </Form.Item>

//           <div className="d-flex justify-content-end">
//             <button type="submit" className="btn btn-primary">SAVE</button>
//           </div>
//         </Form>
//       </Modal>
//     </Layout>
//   );
// };


// const handleSubmit = async (values) => {
//   try {
//     const user = JSON.parse(localStorage.getItem('user'));
//     setLoading(true);
//     if (editingTransection) {
//       await axios.put(`/api/v1/transections/update-transection/${editingTransection._id}`, { ...values, userId: user._id });
//       message.success('Transaction updated successfully');
//     } else {
//       await axios.post('/api/v1/transections/add-transection', { ...values, userId: user._id });
//       message.success('Transaction added successfully');
//     }
//     setShowModal(false);
//     setEditingTransection(null);
//     fetchTransections();
//   } catch (error) {
//     setLoading(false);
//     message.error("Failed to add/update transaction");
//   }
// };


// export default HomePage;




// 



import React, { useState, useEffect, useCallback } from "react";
import Layout from "../components/Layout/Layout";
import { Modal, Form, Input, Select, message, Table, DatePicker } from 'antd';
import { UnorderedListOutlined, AreaChartOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from "axios";
import Spinner from "../components/spinner";
import moment from "moment";
import Analytics from "../components/Layout/Analytics";

const { RangePicker } = DatePicker;
const { Option } = Select;

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoading, setLoading] = useState(false);
  const [allTransections, setAllTransections] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [selectedDate, setSelectedDate] = useState([]);
  const [type, setType] = useState('all');
  const [viewData, setViewData] = useState('table');
  const [editingTransection, setEditingTransection] = useState(null);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
    },
    {
      title: "Amount",
      dataIndex: "amount"
    },
    {
      title: "Type",
      dataIndex: "type"
    },
    {
      title: "Category",
      dataIndex: "category"
    },
    {
      title: "Actions",
      render: (text, record) => (
        <div>
          <EditOutlined 
            onClick={() => {
              setEditingTransection(record);
              setShowModal(true);
            }}
            style={{ cursor: "pointer", color: "blue", marginRight: 12 }}
          />
          <DeleteOutlined 
            onClick={() => handleDelete(record._id)}
            style={{ cursor: "pointer", color: "red" }}
          />
        </div>
      ),
    }
  ];

  const fetchTransections = useCallback(async () => {
    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem('user'));

      const response = await axios.get('/api/v1/transections/get-transection', { 
        params: { 
          userId: user._id, 
          frequency, 
          type: type !== 'all' ? type : undefined,
          startDate: selectedDate.length ? moment(selectedDate[0]).format("YYYY-MM-DD") : undefined,
          endDate: selectedDate.length ? moment(selectedDate[1]).format("YYYY-MM-DD") : undefined,
          _: new Date().getTime() // Adding a timestamp to avoid caching
        },
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0' // Ensuring no client-side caching
        }
      });
      setAllTransections(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error("Failed to fetch transactions");
    }
  }, [frequency, selectedDate, type]);

  useEffect(() => {
    fetchTransections();
  }, [fetchTransections]);

  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      if (editingTransection) {
        await axios.put(`/api/v1/transections/update-transection/${editingTransection._id}`, { ...values, userId: user._id });
        message.success('Transaction updated successfully');
      } else {
        await axios.post('/api/v1/transections/add-transection', { ...values, userId: user._id });
        message.success('Transaction added successfully');
      }
      setShowModal(false);
      setEditingTransection(null);
      fetchTransections();
    } catch (error) {
      setLoading(false);
      message.error("Failed to add/update transaction");
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`/api/v1/transections/delete-transection/${id}`);
      message.success('Transaction deleted successfully');
      fetchTransections();
    } catch (error) {
      setLoading(false);
      message.error("Failed to delete transaction");
    }
  };

  return (
    <Layout>
      {showLoading && <Spinner />}
      <div className="filters">
        <div>
          <h6>Select Frequency</h6>
          <Select value={frequency} onChange={value => setFrequency(value)}>
            <Option value="7">Last 1 Week</Option>
            <Option value="30">Last 1 Month</Option>
            <Option value="365">Last 1 Year</Option>
            <Option value="custom">Custom</Option>
          </Select>
          {frequency === 'custom' && (
            <RangePicker 
              value={selectedDate.length ? [moment(selectedDate[0]), moment(selectedDate[1])] : []}
              onChange={dates => setSelectedDate(dates)}
              format="YYYY-MM-DD"
            />
          )}
        </div>

        <div>
          <h6>Select Type</h6>
          <Select value={type} onChange={value => setType(value)}>
            <Option value="all">All</Option>
            <Option value="income">Income</Option>
            <Option value="expense">Expense</Option>
          </Select>
        </div>

        <div className="switch-icons">
          <div className={`mx-2 ${viewData === 'table' ? 'active-icon' : 'inactive-icon'}`}>
            <UnorderedListOutlined className="mx-2" onClick={() => setViewData('table')} />
          </div>
          <div className={`mx-2 ${viewData === 'analytics' ? 'active-icon' : 'inactive-icon'}`}>
            <AreaChartOutlined className="mx-2" onClick={() => setViewData('analytics')} />
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add New</button>
      </div>

      <div>
        <div className="content">
          {viewData === 'table' ? (
            <Table dataSource={allTransections} columns={columns} rowKey="_id" />
          ) : (
            <Analytics data={allTransections} />
          )}
        </div>
      </div>

      <Modal
        title={`${editingTransection ? "Edit" : "Add"} Transaction`}
        open={showModal}
        onCancel={() => { setShowModal(false); setEditingTransection(null); }}
        footer={null}
      >
        <Form 
          layout="vertical" 
          onFinish={handleSubmit} 
          initialValues={editingTransection ? { ...editingTransection, date: moment(editingTransection.date) } : {}}
        >
          <Form.Item 
            label="Amount" 
            name="amount" 
            rules={[{ required: true, message: 'Please input the amount!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item 
            label="Type" 
            name="type" 
            rules={[{ required: true, message: 'Please select the type!' }]}
          >
            <Select>
              <Option value="income">Income</Option>
              <Option value="expense">Expense</Option>
            </Select>
          </Form.Item>

          <Form.Item 
            label="Category" 
            name="category" 
            rules={[{ required: true, message: 'Please select the category!' }]}
          >
            <Select>
              <Option value="salary">Salary</Option>
              <Option value="tip">Tip</Option>
              <Option value="project">Project</Option>
              <Option value="movie">Movie</Option>
              <Option value="food">Food</Option>
              <Option value="bills">Bills</Option>
              <Option value="medical">Medical</Option>
              <Option value="fee">Fee</Option>
              <Option value="tax">Tax</Option>
            </Select>
          </Form.Item>

          <Form.Item 
            label="Date" 
            name="date" 
            rules={[{ required: true, message: 'Please select the date!' }]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>

          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">SAVE</button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default HomePage;















