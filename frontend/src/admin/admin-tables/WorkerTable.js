import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from '../admin-pages/mock-data.json'
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow"

const WorkerTable = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    category: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    category: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
      category: addFormData.category,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
      category: editFormData.category,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      category: contact.category,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="">
    <form onSubmit={handleEditFormSubmit}>
      <table className="w-full border border-black">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left bg-gray-200 border border-black">Full Name</th>
            <th className="px-4 py-2 text-left bg-gray-200 border border-black">Address</th>
            <th className="px-4 py-2 text-left bg-gray-200 border border-black">Phone Number</th>
            <th className="px-4 py-2 text-left bg-gray-200 border border-black">Email</th>
            <th className="px-4 py-2 text-left bg-gray-200 border border-black">Category</th>
            <th className="px-4 py-2 text-left bg-gray-200 border border-black">Actions</th>
          </tr>
        </thead>
  
        <tbody>
          {contacts.map((contact) => (
            <Fragment key={contact.id}>
              {editContactId === contact.id ? (
                <EditableRow
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadOnlyRow
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </form>
  
    <h2 className="text-lg font-semibold mt-4">Add a Contact</h2>
    <form onSubmit={handleAddFormSubmit} className="flex items-center mt-2">
      <input
        type="text"
        name="fullName"
        required="required"
        placeholder="Enter your name..."
        onChange={handleAddFormChange}
        className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="address"
        required="required"
        placeholder="Enter your address..."
        onChange={handleAddFormChange}
        className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="phoneNumber"
        required="required"
        placeholder="Enter your phone number..."
        onChange={handleAddFormChange}
        className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="email"
        required="required"
        placeholder="Enter your email..."
        onChange={handleAddFormChange}
        className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="category"
        required="required"
        placeholder="Enter your category..."
        onChange={handleAddFormChange}
        className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add
      </button>
    </form>
  </div>
  
  
  );
};

export default WorkerTable;