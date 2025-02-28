// import React, { useState, Fragment } from "react";
// import { nanoid } from "nanoid";
// import data from '../admin-pages/mock-data.json'
// import ReadOnlyRow from "./ReadOnlyRow";
// import EditableRow from "./EditableRow"

// const WorkerTable = () => {
//   const [contacts, setContacts] = useState(data);
//   const [addFormData, setAddFormData] = useState({
//     fullName: "",
//     address: "",
//     phoneNumber: "",
//     email: "",
//     category: "",
//   });

//   const [editFormData, setEditFormData] = useState({
//     fullName: "",
//     address: "",
//     phoneNumber: "",
//     email: "",
//     category: "",
//   });

//   const [editContactId, setEditContactId] = useState(null);

//   const handleAddFormChange = (event) => {
//     event.preventDefault();

//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...addFormData };
//     newFormData[fieldName] = fieldValue;

//     setAddFormData(newFormData);
//   };

//   const handleEditFormChange = (event) => {
//     event.preventDefault();

//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...editFormData };
//     newFormData[fieldName] = fieldValue;

//     setEditFormData(newFormData);
//   };

//   const handleAddFormSubmit = (event) => {
//     event.preventDefault();

//     const newContact = {
//       id: nanoid(),
//       fullName: addFormData.fullName,
//       address: addFormData.address,
//       phoneNumber: addFormData.phoneNumber,
//       email: addFormData.email,
//       category: addFormData.category,
//     };

//     const newContacts = [...contacts, newContact];
//     setContacts(newContacts);
//   };

//   const handleEditFormSubmit = (event) => {
//     event.preventDefault();

//     const editedContact = {
//       id: editContactId,
//       fullName: editFormData.fullName,
//       address: editFormData.address,
//       phoneNumber: editFormData.phoneNumber,
//       email: editFormData.email,
//       category: editFormData.category,
//     };

//     const newContacts = [...contacts];

//     const index = contacts.findIndex((contact) => contact.id === editContactId);

//     newContacts[index] = editedContact;

//     setContacts(newContacts);
//     setEditContactId(null);
//   };

//   const handleEditClick = (event, contact) => {
//     event.preventDefault();
//     setEditContactId(contact.id);

//     const formValues = {
//       fullName: contact.fullName,
//       address: contact.address,
//       phoneNumber: contact.phoneNumber,
//       email: contact.email,
//       category: contact.category,
//     };

//     setEditFormData(formValues);
//   };

//   const handleCancelClick = () => {
//     setEditContactId(null);
//   };

//   const handleDeleteClick = (contactId) => {
//     const newContacts = [...contacts];

//     const index = contacts.findIndex((contact) => contact.id === contactId);

//     newContacts.splice(index, 1);

//     setContacts(newContacts);
//   };

//   return (
//     <div className="">
//     <form onSubmit={handleEditFormSubmit}>
//       <table className="w-full border border-black">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 text-left bg-gray-200 border border-black">Full Name</th>
//             <th className="px-4 py-2 text-left bg-gray-200 border border-black">Address</th>
//             <th className="px-4 py-2 text-left bg-gray-200 border border-black">Phone Number</th>
//             <th className="px-4 py-2 text-left bg-gray-200 border border-black">Email</th>
//             <th className="px-4 py-2 text-left bg-gray-200 border border-black">Category</th>
//             <th className="px-4 py-2 text-left bg-gray-200 border border-black">Actions</th>
//           </tr>
//         </thead>
  
//         <tbody>
//           {contacts.map((contact) => (
//             <Fragment key={contact.id}>
//               {editContactId === contact.id ? (
//                 <EditableRow
//                   editFormData={editFormData}
//                   handleEditFormChange={handleEditFormChange}
//                   handleCancelClick={handleCancelClick}
//                 />
//               ) : (
//                 <ReadOnlyRow
//                   contact={contact}
//                   handleEditClick={handleEditClick}
//                   handleDeleteClick={handleDeleteClick}
//                 />
//               )}
//             </Fragment>
//           ))}
//         </tbody>
//       </table>
//     </form>
  
//     <h2 className="text-lg font-semibold mt-4">Add a Contact</h2>
//     <form onSubmit={handleAddFormSubmit} className="flex items-center mt-2">
//       <input
//         type="text"
//         name="fullName"
//         required="required"
//         placeholder="Enter your name..."
//         onChange={handleAddFormChange}
//         className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//         type="text"
//         name="address"
//         required="required"
//         placeholder="Enter your address..."
//         onChange={handleAddFormChange}
//         className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//         type="text"
//         name="phoneNumber"
//         required="required"
//         placeholder="Enter your phone number..."
//         onChange={handleAddFormChange}
//         className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//         type="email"
//         name="email"
//         required="required"
//         placeholder="Enter your email..."
//         onChange={handleAddFormChange}
//         className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//         type="text"
//         name="category"
//         required="required"
//         placeholder="Enter your category..."
//         onChange={handleAddFormChange}
//         className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button
//         type="submit"
//         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//       >
//         Add
//       </button>
//     </form>
//   </div>
  
  
//   );
// };

// export default WorkerTable;





import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const initialData = [
  {
    id: 1,
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    category: 'Electrician'
  },
  {
    id: 2,
    fullName: 'Jane Smith',
    email: 'jane@example.com',
    phone: '987-654-3210',
    address: '456 Elm St, Othertown, USA',
    category: 'Plumber'
  },
  // Add more data as needed
];

const WorkerTable = () => {
  const [data, setData] = useState(initialData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', address: '' });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(data[index]);
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const updatedData = data.map((item, index) =>
      index === editingIndex ? { ...item, ...formData } : item
    );
    setData(updatedData);
    setEditingIndex(null);
    setFormData({ fullName: '', email: '', phone: '', address: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="overflow-x-auto">
      <h1 className='mt-6 mb-10 font-bold text-3xl text-center underline'>Worker's Table List:</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-400 text-black">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.N.</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Full Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Address</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  item.fullName
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {editingIndex === index ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  item.email
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  item.phone
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  item.address
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  item.category
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {editingIndex === index ? (
                  <button
                    onClick={handleSave}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-green-600 hover:text-green-900 mr-4"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTrash />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkerTable;
