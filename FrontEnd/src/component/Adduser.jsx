import axios from "axios";
import React, { useState } from "react";

const AddUser = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    console.log(formData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:3000/api/user", formData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="flex justify-center">
            <div className="max-w-[1300px] w-full mt-10">
                <h1 className="my-2 text-2xl font-bold">Add User</h1>
                <form action="">
                    <div className="flex flex-col gap-2">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="py-2 border-2 border-[#000] px-2"
                            value={formData.name}
                            onChange={handleChange}
                            name="name"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="py-2 border-2 border-[#000] px-2"
                            value={formData.email}
                            onChange={handleChange}
                            name="email"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Password</label>
                        <input
                            type="text"
                            placeholder="Password"
                            className="py-2 border-2 border-[#000] px-2"
                            value={formData.password}
                            onChange={handleChange}
                            name="password"
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-700 text-white px-6 py-2 rounded-md my-2"
                    >
                        Add User
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;