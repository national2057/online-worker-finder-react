import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className=" border border-black">
      <td className=" border border-black">{contact.fullName}</td>
      <td className=" border border-black">{contact.address}</td>
      <td className=" border border-black">{contact.phoneNumber}</td>
      <td className=" border border-black">{contact.email}</td>
      <td className=" border border-black">{contact.category}</td>
      <td className=" border border-black space-x-3">
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}
         className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
