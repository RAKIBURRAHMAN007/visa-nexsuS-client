import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

const MyAddedVisas = () => {
    const { user } = useContext(AuthContext);
    const initialVisaData = useLoaderData();

    const [dataByLoggedUser, setDataByLoggedUser] = useState(
        initialVisaData.filter((singleVisaData) => singleVisaData.email === user.email)
    );

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVisa, setCurrentVisa] = useState(null);

    const handleUpdate = (visa) => {
        setCurrentVisa(visa);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedVisa = {
            ...currentVisa,
            countryImage: form.countryImage.value,
            countryName: form.countryName.value,
            visaType: form.visaType.value,
            processingTime: form.processingTime.value,
            requiredDocuments: Array.from(form.requiredDocuments)
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value),
            description: form.description.value,
            ageRestriction: form.ageRestriction.value,
            fee: form.fee.value,
            validity: form.validity.value,
            applicationMethod: form.applicationMethod.value,
        };


        fetch(`https://visa-navigator-server-pi.vercel.app/visa/${currentVisa._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedVisa),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success('Visa Updated Successfully');


                    const updatedVisas = dataByLoggedUser.map((visa) =>
                        visa._id === currentVisa._id ? updatedVisa : visa
                    );
                    setDataByLoggedUser(updatedVisas);

                    closeModal();
                }
            })
            .catch((err) => console.error("Failed to update visa:", err));
    };
    const handleDelete = (id) => {
        console.log('delete', id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://visa-navigator-server-pi.vercel.app/visa/${id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const updatedVisas = dataByLoggedUser.filter((visa) => visa._id !== id);
                            setDataByLoggedUser(updatedVisas);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Visa data has been deleted.",
                                icon: "success"
                            });

                        }
                    })

            }
        });

    }

    return (
        <div>
            <div className="w-11/12 mx-auto mb-16">
                <h1 className='text-center mt-9 mb-12 text-xl font-bold md:text-3xl lg:text-5xl'>
                    My Added visa
                </h1>
                {dataByLoggedUser.length !== 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="border border-gray-300 px-4 py-2">Flag</th>
                                    <th className="border border-gray-300 px-4 py-2">Country</th>
                                    <th className="border border-gray-300 px-4 py-2">Visa Type</th>
                                    <th className="border border-gray-300 px-4 py-2">Processing Time</th>
                                    <th className="border border-gray-300 px-4 py-2">Fee</th>
                                    <th className="border border-gray-300 px-4 py-2">Validity</th>
                                    <th className="border border-gray-300 px-4 py-2">Application Method</th>
                                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataByLoggedUser.map((visa, index) => (
                                    <tr key={index} className="">
                                        <td className="border border-gray-300 px-4 py-2">
                                            <img
                                                src={visa.countryImage}
                                                alt={`Flag of ${visa.countryName}`}
                                                className="w-16 h-10 object-cover"
                                            />
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">{visa.countryName}</td>
                                        <td className="border border-gray-300 px-4 py-2">{visa.visaType}</td>
                                        <td className="border border-gray-300 px-4 py-2">{visa.processingTime} days</td>
                                        <td className="border border-gray-300 px-4 py-2">${visa.fee}</td>
                                        <td className="border border-gray-300 px-4 py-2">{visa.validity} days</td>
                                        <td className="border border-gray-300 px-4 py-2">{visa.applicationMethod}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => handleUpdate(visa)}
                                                    className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(visa._id)}
                                                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>No data available.</p>
                )}
            </div>



            {isModalOpen && currentVisa && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-gray-400 text-black p-6 rounded-md w-96 max-w-full max-h-[90vh] overflow-y-auto">
                        <h2 className="text-2xl mb-4">Update Visa Information</h2>
                        <form onSubmit={handleFormSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl ">Country Image</span>
                                </label>
                                <input
                                    type="text"
                                    name="countryImage"
                                    placeholder="Enter image link"
                                    className="input input-bordered"
                                    required
                                    defaultValue={currentVisa.countryImage}
                                />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl ">Country Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="countryName"
                                    placeholder="Enter country name"
                                    className="input input-bordered"
                                    required
                                    defaultValue={currentVisa.countryName}
                                />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl ">Visa Type</span>
                                </label>
                                <select
                                    name="visaType"
                                    className="input input-bordered"
                                    required
                                    defaultValue={currentVisa.visaType}
                                >
                                    <option value="Tourist visa">Tourist visa</option>
                                    <option value="Student visa">Student visa</option>
                                    <option value="Official visa">Work & Employment visa</option>
                                </select>
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl ">Processing Time</span>
                                </label>
                                <input
                                    type="text"
                                    name="processingTime"
                                    placeholder="Enter processing time"
                                    className="input input-bordered"
                                    required
                                    defaultValue={currentVisa.processingTime}
                                />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl ">Required Documents</span>
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="requiredDocuments"
                                            value="Valid passport"
                                            defaultChecked={currentVisa.requiredDocuments.includes("Valid passport")}
                                        />
                                        Valid passport
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="requiredDocuments"
                                            value="Visa application form"
                                            defaultChecked={currentVisa.requiredDocuments.includes("Visa application form")}
                                        />
                                        Visa application form
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="requiredDocuments"
                                            value="Recent passport-sized photograph"
                                            defaultChecked={currentVisa.requiredDocuments.includes("Recent passport-sized photograph")}
                                        />
                                        Recent passport-sized photograph
                                    </label>
                                </div>
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl ">Description</span>
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="Enter description"
                                    className="input input-bordered h-24"
                                    required
                                    defaultValue={currentVisa.description}
                                />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl ">Age Restriction</span>
                                </label>
                                <input
                                    type="number"
                                    name="ageRestriction"
                                    placeholder="Enter age restriction"
                                    className="input input-bordered"
                                    required
                                    defaultValue={currentVisa.ageRestriction}
                                />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl ">Fee</span>
                                </label>
                                <input
                                    type="number"
                                    name="fee"
                                    placeholder="Enter fee amount"
                                    className="input input-bordered"
                                    required
                                    defaultValue={currentVisa.fee}
                                />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl ">Validity</span>
                                </label>
                                <input
                                    type="text"
                                    name="validity"
                                    placeholder="Enter validity period"
                                    className="input input-bordered"
                                    required
                                    defaultValue={currentVisa.validity}
                                />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl ">Application Method</span>
                                </label>
                                <textarea
                                    name="applicationMethod"
                                    placeholder="Enter application method"
                                    className="input input-bordered h-24"
                                    required
                                    defaultValue={currentVisa.applicationMethod}
                                />
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary hover:bg-slate-500 bg-[#162e40] text-white text-xl ">
                                    Save Changes
                                </button>
                            </div>
                        </form>

                        <button
                            onClick={closeModal}
                            className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MyAddedVisas;
