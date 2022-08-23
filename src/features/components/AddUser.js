import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [post, setPost] = useState([])

    const user = useSelector((state) => state);
    // console.log(user.counter);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    


    const handleSubmit = (e) => {
        e.preventDefault();

        // ....email
        // const checkEmail = user.counter.find(
        //     (user) => user.email === email && email
        // );

        // const checkNumber = user.counter.find(
        //     (user) => user.number === parseInt(number)
        // );

        // // ....validation..

        // if (checkEmail) {
        //     return toast.error("This email already Exists!")
        // }

        // if (checkNumber) {
        //     return toast.error("This number already Exists!")
        // }

        // if (!email || !number || !name) {
        //     return toast.warning("Please fill in all fields!")
        // }


        const data = {
            id: user.counter[(user.counter).length - 1].id + 1,
            name,
            email,
            number,
            post
        }
        // console.log(data, "data");

        dispatch({ type: "ADD_USER", payload: data })
        toast.success("User added successfully!")
        navigate('/');
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="col-md-12 text-center heading">
                        Add User
                    </h1>
                    <div className='col-md-6 Shadow mx-auto p-5 form-bg'>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <input type='text'
                                        placeholder="name"
                                        className='form-control'
                                        value={name || ""}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <input type='email'
                                        placeholder="Email"
                                        className='form-control'
                                        value={email || ""}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <input type='number'
                                        placeholder="Phone no."
                                        className='form-control'
                                        value={number || ""}
                                        onChange={e => setNumber(e.target.value)}
                                    />
                                </div>
                                <div className='form-group submit-btn'>
                                    <input type='submit'
                                        value="Submit"
                                        className='btn btn-block btn-dark'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser
