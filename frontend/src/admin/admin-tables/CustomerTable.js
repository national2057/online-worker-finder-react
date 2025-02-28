import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const initialData = [
  {
    id: 1,
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 2,
    fullName: 'Jane Smith',
    email: 'jane@example.com',
    phone: '987-654-3210',
    address: '456 Elm St, Othertown, USA',
  },
  // Add more data as needed
];

const CustomerTable = () => {
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
      <h1 className='mt-6 mb-10 font-bold text-3xl text-center underline'>Customer's Table List:</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-400 text-black">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.N.</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Full Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Address</th>
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

export default CustomerTable;
