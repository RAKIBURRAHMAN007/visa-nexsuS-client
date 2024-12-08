import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../../provider/AuthProvider';
import { Result } from 'postcss';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const RegisterPage = () => {
    const { createNewUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
   
    const navigate = useNavigate();
    const location = useLocation();
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photoUrl.value;
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regex.test(password)) {
            setError({ ...error, password: 'password must be  6 characters long & at-least 1 upper and lower case letter.' })
            toast.error('password must be  6 characters long & at-least 1 upper and lower case letter.')


            return;

        }
        createNewUser(email, password)
            .then(result => {
                const registeredUser = result.user;
               
                navigate(location?.state ? location.state : '/')
                console.log(registeredUser)
                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                
                updateProfile(auth.currentUser,profile)
                setUser({
                    ...registeredUser,
                    displayName: name,
                    photoURL: photo
                });
                
            })
            .catch(err => {
                setError({ ...error, login: err.code })
                toast.error(err.message)

            })


    }
    return (
        <div className='pb-10'>
            <h1 className='text-center font-bold text-xl md:text-5xl pt-12'>Register to Get <br />Started!</h1>
            <div className='md:w-2/4 mx-auto bg-slate-200 mt-6'>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-mono">Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Enter your name"
                            className="font-mono input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-mono">Email</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter your email"
                            className="font-mono input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-mono">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name='photoUrl'
                            placeholder="Enter your photo URL"
                            className="font-mono input input-bordered"

                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-mono text-xl">Password</span>
                        </label>
                        <input
                            type="text"
                            name='password'
                            placeholder="Enter your password"
                            className="font-mono input input-bordered"
                            required
                        />
                        {
                            error.login && <label className="label text-sm text-red-600">
                                {error.login}


                            </label>
                        }
                        {
                            error.password && <label className="label text-sm text-red-600">
                                {error.password}


                            </label>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#9660ea] text-white text-xl font-mono">
                            Register
                        </button>
                    </div>
                </form>

            </div>
            <div className='flex justify-center'>
                <h1 className='font-mono'> Already Have Account? <Link to='/login' className='underline text-[#9660ea]'>Login Now</Link> </h1>
            </div>
        </div>
    );
};

export default RegisterPage;