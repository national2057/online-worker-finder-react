import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { JOB_API_END_POINT } from "../utils/constant";

const ProblemDesc = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) =>
      ["image/png", "image/jpeg"].includes(file.type)
    );
    formik.setFieldValue("file", [...formik.values.file, ...validFiles]);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      date: "",
      startTime: "",
      endTime: "",
      proposed_fees: "",
      description: "",
      file: [],
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, "Full name must be at least 2 characters long.")
        .max(50, "Full name shouldn't be more than 50 characters long.")
        .required("Full name is required."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required."),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number is not valid")
        .required("Phone number is required."),
      date: Yup.date().required("Date is required."),
      startTime: Yup.string().required("Start time is required."),
      endTime: Yup.string()
        .required("End time is required.")
        .test(
          "is-greater",
          "End time must be after start time.",
          function (value) {
            const { startTime } = this.parent;
            return startTime && value && startTime < value;
          }
        ),
      description: Yup.string()
        //   .min(10, "Description of problems must be at least 10 characters long.")
        .required("Description of problems is required."),
      proposed_fees: Yup.number()
        .typeError("Proposed fees must be a number")
        .required("Proposed fees is required."),
      file: Yup.array()
        .of(
          Yup.mixed().test(
            "fileFormat",
            "Unsupported Format",
            (value) =>
              !value ||
              (value && ["image/png", "image/jpeg"].includes(value.type))
          )
        )
        .min(1, "Please upload at least one image."),
    }),

    onSubmit: async (values) => {
      setLoading(true);
      setError(null);
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("address", values.address);
      formData.append("date", values.date);
      formData.append("startTime", values.startTime);
      formData.append("endTime", values.endTime);
      formData.append("description", values.description);
      formData.append("proposed_fees", values.proposed_fees);
      if (values.file) {
         //  formData.append("images", values.file); 
        values.file.forEach((file) => formData.append("files", file)); // Append files array
      }

      if (!values.phone.match(/^\d{10}$/)) {
        toast.error("Phone number must be 10 digits");
        return;
      }

      try {
        // Send a POST request to the backend
        const response = await axios.post(
          `${JOB_API_END_POINT}/job/create`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );
        // If response is successful
      if (response.data.success) {
         toast.success("Signup successful!");
         setTimeout(() => {
           navigate("/login"); // Redirect to the dashboard route
         }, 1000); // Delay to allow the toast to show
         console.log("Form submitted successfully:", response.data);
       } else {
         toast.error("Signup failed");
       }
     } catch (err) {
       // Handle errors from the backend
       toast.error(err.response?.data?.message || "Something went wrong");
     } finally {
       dispatch(setLoading(false));
     }
      // } catch (err) {
      //   console.error("Error submitting the form:", err);
      //   setError("Failed to submit the form. Please try again.");
      // } finally {
      //   setLoading(false);
      // }
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-lg mx-auto p-4 bg-white rounded-md shadow-md border border-gray-300 mb-3"
      >
        <h2 className="text-3xl font-bold mb-8">Book your Services</h2>
        {error && <p className="text-red-500">{error}</p>}

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-bold mb-2"
          >
            Full Name:{" "}
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className="w-full px-3 py-2 border rounded"
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.fullName}
            </p>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address:{" "}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full px-3 py-2 border rounded"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone:{" "}
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Enter your phone number."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="w-full px-3 py-2 border rounded"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-2"
          >
            Address:{" "}
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Enter your address."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className="w-full px-3 py-2 border rounded"
          />
          {formik.touched.address && formik.errors.address ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.address}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date:{" "}
          </label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            className="w-full px-3 py-2 border rounded"
          />
          {formik.touched.date && formik.errors.date ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.date}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="startTime"
            className="block text-gray-700 font-bold mb-2"
          >
            Start Time:
          </label>
          <input
            id="startTime"
            name="startTime"
            type="time"
            placeholder="Enter the start time."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startTime}
            className="w-full px-3 py-2 border rounded"
          />
          {formik.touched.startTime && formik.errors.startTime ? (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.startTime}
            </p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="endTime"
            className="block text-gray-700 font-bold mb-2"
          >
            End Time:
          </label>
          <input
            id="endTime"
            name="endTime"
            type="time"
            placeholder="Enter the end time."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endTime}
            className="w-full px-3 py-2 border rounded"
          />
          {formik.touched.endTime && formik.errors.endTime ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.endTime}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="proposed_fees"
            className="block text-gray-700 font-bold mb-2"
          >
            Proposed Fees:{" "}
          </label>
          <input
            id="proposed_fees"
            name="proposed_fees"
            type="number"
            placeholder="What's your budget?"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.proposed_fees}
            className="w-full px-3 py-2 border rounded"
          />
          {formik.touched.proposed_fees && formik.errors.proposed_fees ? (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.proposed_fees}
            </p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description Of Problems:{" "}
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe your description here."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="w-full px-3 py-2 border rounded"
          />
          {formik.touched.description && formik.errors.description ? (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.description}
            </p>
          ) : null}
        </div>
        {/* <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-gray-700 font-bold mb-2"
          >
            Upload pictures:{" "}
          </label>
          <input
            id="images"
            name="images"
            type="file"
            multiple
            onChange={handleImageUpload}
            className="w-full"
          />
          {formik.values.images.length > 0 && (
            <div className="flex flex-wrap mt-2">
              {formik.values.images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="w-24 h-24 object-cover mr-2 mb-2"
                />
              ))}
            </div>
          )}
          {formik.touched.images && formik.errors.images ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.images}</p>
          ) : null}
        </div> */}

        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
            Upload Files:{" "}
          </label>
          <input
            id="file"
            name="file"
            type="file"
            multiple
            onChange={handleImageUpload}
            className="w-full"
          />
          {formik.values.file && formik.values.file.length > 0 && (
            <div className="mt-2">
              {formik.values.file.map((file, index) => (
                <p key={index} className="text-sm">
                  {file.name}
                </p>
              ))}
            </div>
          )}
          {formik.touched.file && formik.errors.file ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.file}</p>
          ) : null}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mt-6 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default ProblemDesc;
