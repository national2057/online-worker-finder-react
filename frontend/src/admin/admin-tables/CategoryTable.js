import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CategoryTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      categoryName: "Electrician",
      images: ["image1.jpg", "image2.jpg"],
    },
    {
      id: 2,
      categoryName: "Plumber",
      images: ["image1.jpg", "image2.jpg"],
    },
    {
      id: 3,
      categoryName: "Painter",
      images: ["image1.jpg", "image2.jpg"],
    },
    {
      id: 4,
      categoryName: "Civil Services",
      images: ["image1.jpg", "image2.jpg"],
    },
  ]);

  const [showModal,  setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState({
    categoryName: "",
    images: [],
  });

  const navigate = useNavigate();

  const handleView = (item) => {
    navigate("/admin/job-view", { state: { job: item } });
  };

  const handleEdit = (id) => {
    navigate(`/admin/job-edit/${id}`);
    console.log(`Editing job with S.N. ${id}`);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    console.log(`Deleted job with S.N. ${id}`);
  };

  const handleAddCategory = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = data.length ? Math.max(...data.map((item) => item.id)) + 1 : 1;
    setData([...data, { ...newCategory, id: newId }]);
    setShowModal(false);
    setNewCategory({ categoryName: "", images: [] });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
    setNewCategory((prev) => ({ ...prev, images: files }));
  };

  return (
    <>
      <div className="flex justify-end mr-10"> 
        <button
          className="bg-blue-600 p-2 rounded-lg my-6 text-lg font-semibold"
          onClick={handleAddCategory}
        >
          Add Category
        </button>
      </div>

      <div className="overflow-x-auto mx-10">
        <table className="min-w-full bg-white border-4 border-black">
          <thead>
            <tr>
              <th className="py-2 px-4 border-4 border-gray-700">ID</th>
              <th className="py-2 px-4 border-4 border-gray-700">
                Category Name
              </th>
              <th className="py-2 px-4 border-4 border-gray-700">Images</th>
              <th className="py-2 px-4 border-4 border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-center border-2 border-black">
                <td className="py-2 px-4 border-2 border-gray-700">{item.id}</td>
                <td className="py-2 px-4 border-2 border-gray-700">{item.categoryName}</td>
                <td className="py-2 px-4 border-2 border-gray-700">
                  {item.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`Problem ${imgIndex}`}
                      className="h-10 w-10 inline-block object-cover rounded-full mr-2"
                    />
                  ))}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 flex justify-center space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleView(item)}
                  >
                    <FaEye />
                  </button>
                  <button
                    className="text-green-500 hover:text-green-700"
                    onClick={() => handleEdit(item.id)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Category</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="categoryName" className="block text-gray-700">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  value={newCategory.categoryName}
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, categoryName: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="images" className="block text-gray-700">
                  Images
                </label>
                <input
                  type="file"
                  id="images"
                  multiple
                  onChange={handleImageChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  accept="image/*"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryTable;
