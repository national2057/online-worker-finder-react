import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

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

  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(false);
  const [newCategory, setNewCategory] = useState({
    categoryName: "",
    images: [],
  });
  //   const navigate = useNavigate();
  const handleEdit = (index) => {
    //  navigate(`/admin/job-edit/${id}`);
    setEditingIndex(index);
    setNewCategory(data[index]);
    console.log(`Editing job with S.N. ${index}`);
  };

  const handleSave = () => {
    const updatedData = data.map((item, index) =>
      index === editingIndex ? { ...item, ...newCategory } : item
    );
    setData(updatedData);
    setEditingIndex(null);
    setNewCategory({categoryName: "", images: []});
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
    const newId = data.length
      ? Math.max(...data.map((item) => item.id)) + 1
      : 1;
    setData([...data, { ...newCategory, id: newId }]);
    setShowModal(false);
    setNewCategory({ categoryName: "", images: [] });
  };

  const handleChange = (e) => {
   setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
 };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setNewCategory((prev) => ({ ...prev, images: files }));
  };

  return (
    <>
      <h1 className="my-5 font-bold text-3xl text-center underline">
        Category's List:
      </h1>
      <div className="flex justify-end mr-10">
        <button
          className="bg-blue-500 p-2 rounded-lg my-6 text-lg font-semibold"
          onClick={handleAddCategory}
        >
          Add Category
        </button>
      </div>

      <div className="overflow-x-auto mx-10">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-400 text-black">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                SN
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Category Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Images
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="categoryName"
                    value={newCategory.categoryName}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  item.categoryName
                )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {/* {item.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`Problem ${imgIndex}`}
                      className="h-10 w-10 inline-block object-cover rounded-full mr-2"
                    />
                  ))} */}
                  {editingIndex === index ? (
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  item.images
                )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 space-x-5">
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
                    setNewCategory({
                      ...newCategory,
                      categoryName: e.target.value,
                    })
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
