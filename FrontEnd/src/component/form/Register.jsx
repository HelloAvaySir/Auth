import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profile: '',
    password: ''
  });

  // Simulated email list for duplicate check
  const existingEmails = ['test@example.com', 'ram@gmail.com'];

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, profile, password } = formData;

    // Check for empty fields
    if (!firstName || !lastName || !email || !profile || !password) {
      return toast.error('Please fill all the fields');
    }

    // Check for duplicate email
    if (existingEmails.includes(email)) {
      return toast.error('Email already exists');
    }

    // Simulate registration success
    toast.success('Registered successfully!');
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[45%] border border-gray-400 px-10 py-14 shadow-md rounded">
        <h1 className="mb-5 font-bold text-4xl text-center">Register</h1>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="First Name" onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Last Name" onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="profile">Profile</label>
            <input type="text" id="profile" placeholder="Profile URL" onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" onChange={handleChange} />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
