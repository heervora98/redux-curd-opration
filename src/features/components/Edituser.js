import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { toast } from 'react-toastify';


const Edituser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state => state);
    // console.log(user, "edit"); 
    const editUser = user.counter;

    const currentUser = editUser.find(data => data.id === parseInt(id));

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
        setNumber(currentUser.number);
    }, [currentUser])



    const handleSubmit = (e) => {
        e.preventDefault();

        // ....email
        const checkEmail = user.counter.find(
            (user) => user.id !== parseInt(id) && user.email === email && email
        );

        const checkNumber = user.counter.find(
            (user) => user.id !== parseInt(id) && user.number === parseInt(number)
        );

        // ....validation..

        if (checkEmail) {
            return toast.error("This email already Exists!")
        }

        if (checkNumber) {
            return toast.error("This number already Exists!")
        }

        if (!email || !number || !name) {
            return toast.warning("Please fill in all fields!")
        }

        

        const data = {
            id: parseInt(id),
            name,
            email,
            number
        }
        // console.log(data, "data");

        dispatch({ type: "UPDATE_USER", payload: data })
        navigate('/');
    };




    return (
        <div>
            <div className="container">
                {
                    currentUser ? (
                        <div className="row">
                            <h1 className="col-md-12 text-center heading">
                                Edit User {id}
                            </h1>
                            <div className='col-md-6 Shadow mx-auto p-5 form-bg'>
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <div className='form-group'>
                                            <input type='text'
                                                placeholder="name"
                                                className='form-control'
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input type='email'
                                                placeholder="Email"
                                                className='form-control'
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input type='number'
                                                placeholder="Phone no."
                                                className='form-control'
                                                value={number}
                                                onChange={e => setNumber(e.target.value)}
                                            />
                                        </div>
                                        <div className='form-group submit-btn-group'>
                                            <input type='submit'
                                                value="Update user"
                                                className='btn btn-block btn-dark submit-btn me-2'
                                            />
                                            <Link to="/" className='btn btn-block btn-danger submit-btn'>Cancel</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h1 className="col-md-12 text-center heading text-danger">
                            User data with id {id} not exists
                        </h1>
                    )
                }

            </div>
        </div>
    )
}

export default Edituser
