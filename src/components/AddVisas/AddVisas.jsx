import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../provider/AuthProvider';

const AddVisas = () => {
   
    const {user} = useContext(AuthContext);

    const handleAddVisa = (e) => {
        e.preventDefault();
        const form = e.target;
        const visaData = {
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
            email: user.email
        };
        console.log(visaData); // Replace this with API submission logic
        // sending data to the server
        fetch('http://localhost:5000/visa', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(visaData)
        })
            .then(res =>
                res.json()
            )
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    toast.success("Visa Added Successfully")
                }
            })
    };

    return (
        <div>
            <h1 className="text-center font-bold text-xl md:text-5xl pt-12 mb-3">
                Add a New Visa to <br /> the Database
            </h1>

            <div className="md:w-2/4 mx-auto bg-slate-200 mt-6">
                <form onSubmit={handleAddVisa} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl ">Country Image</span>
                        </label>
                        <input
                            type="text"
                            name="countryImage"
                            placeholder="Enter image link"
                            className=" input input-bordered"
                            required
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
                            className=" input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl ">Visa Type</span>
                        </label>
                        <select name="visaType" className=" input input-bordered" required>
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
                            className=" input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl ">Required Documents</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                            <label>
                                <input type="checkbox" name="requiredDocuments" value="Valid passport" />
                                Valid passport
                            </label>
                            <label>
                                <input type="checkbox" name="requiredDocuments" value="Visa application form" />
                                Visa application form
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="requiredDocuments"
                                    value="Recent passport-sized photograph"
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
                            className=" input input-bordered h-24"
                            required
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
                            className=" input input-bordered"
                            required
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
                            className=" input input-bordered"
                            required
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
                            className=" input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl ">Application Method</span>
                        </label>
                        <textarea
                            name="applicationMethod"
                            placeholder="Enter application method"
                            className=" input input-bordered h-24"
                            required
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary hover:bg-slate-500 bg-[#162e40] text-white text-xl ">
                            Add Visa
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVisas;
