import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Table = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        await axios
            .get('http://localhost:3000/api/user')
            .then((res) => {
                console.log(res.data.users);
                setData(res.data.users);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleUpdate = (id) => {
    navigate(`/update-user/${id}`);
};


    return (
        <div className="flex justify-center">
            <div className="max-w-[1300px] w-full mt-10">
                <div>
                    <div className="w-full flex justify-end">
                        <button
                            onClick={() => navigate("/add-user")}
                            className="bg-blue-700 text-white px-6 py-2 rounded-md my-2"
                        >
                            Add
                        </button>
                    </div>
                    <table className="w-full border border-gray-300">
                        <thead className="bg-gray-100 text-left">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {data.map((u, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td className="space-x-5">
                                        <button
                                            className="bg-blue-600 text-white rounded-lg px-6 py-2"
                                            onClick={() => handleUpdate(u._id)}
                                        >
                                            Update
                                        </button>
                                        <button className="bg-red-600 text-white rounded-lg px-6 py-2">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;