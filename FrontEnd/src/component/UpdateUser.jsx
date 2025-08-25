import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
      const navigate=useNavigate();
    const { id } = useParams();
    console.log(id);

    const [data, setData] = useState({
        name: "",
        email: "",
    });

    const fetchData = async () => {
        try {
            const response = await axios.get(
                http,//localhost:3000/api/getuserbyid/${id}
            );
            console.log(response.data.user);
            setData(response.data.user);
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .put(http)//localhost:3000/api/updateuser/${id}, data)
            .then((res) => {
                console.log(res);
                  navigate('/')
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="flex justify-center">
            <div className="max-w-[1300px] w-full mt-10">
                <h1 className="my-2 text-2xl font-bold">Update User</h1>
                <form action="">
                    <div className="flex flex-col gap-2">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="py-2 border-2 border-[#000] px-2"
                            value={data.name}
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
                            value={data.email}
                            onChange={handleChange}
                            name="email"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="bg-blue-700 text-white px-6 py-2 rounded-md my-2"
                    >
                        Update User
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;