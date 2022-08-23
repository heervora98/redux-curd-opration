import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import ReactDeleteRow from 'react-delete-row';
import { toast } from 'react-toastify';

const UserData = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");


    const { id } = useParams();
    const navigate = useNavigate();

    const user = useSelector(state => state);
    // console.log(user, "edit"); 
    const editUser = user.counter;

    const currentUser = editUser.find(data => data.id === parseInt(id));
    const userAllData = currentUser.post
    // console.log(userAllData, "----post-----");

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
        setNumber(currentUser.number);
    }, [currentUser])



    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/userPost/${id}`);
    };
    const dispatch = useDispatch();


    // const filterPost = state.filter((user) => {
    //   if (user.id !== action.payload && user) {
    //     user.filter((data) => data.post.id !== action.payload && data.post)
    //   }
    //   return user;
    // })


    const idfilter = user.counter.filter((data) => data.id == id)

    // const deleteUser = (id) => {
    //     dispatch({ type: "DELETE_POST", payload: [idfilter[0].id, id] });
    //     console.log(idfilter[0].id);
    //     console.log(idfilter, id, "------idfilter");
    // }



    return (
        <div>
            <div className="container">
                {
                    currentUser ? (
                        <div className="row">
                            <h1 className="col-md-12 text-center heading">
                                User Data {id}
                            </h1>
                            <div className='col-md-6 Shadow mx-auto p-5 form-bg'>
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <div className='form-group'>
                                            <label></label>
                                            <input type='text'
                                                placeholder="name"
                                                className='form-control'
                                                value={name}
                                                readOnly
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input type='email'
                                                placeholder="Email"
                                                className='form-control'
                                                value={email}
                                                readOnly
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input type='number'
                                                placeholder="Phone no."
                                                className='form-control'
                                                value={number}
                                                readOnly
                                            />
                                        </div>
                                        <div className='form-group submit-btn-group'>
                                            <input type='submit'
                                                value="Post"
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

                {
                    userAllData ? (
                        <div>
                            <div className='col-md-12 mx-auto mt-5'>
                                <table className='table'>
                                    <thead className='text-white bg-dark text-center'>
                                        <tr>
                                            <th>#</th>
                                            <th>Post Name</th>
                                            <th>Post Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        {
                                            userAllData.map((data, index) => {
                                                return (
                                                    <ReactDeleteRow key={index} data={data} deleteElement={ <a>delete</a> } onDelete={data => { return toast.success("Delete succesfully") }}>
                                                    <td>{data.id}</td>
                                                    <td>{data.postname}</td>
                                                    <td>{data.postDescription}</td>
                                                    {/* <td><button className="btn btn-small btn-danger" onClick={() => deleteUser(data.id)}>Delete</button></td> */}
                                                    </ReactDeleteRow>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : <div><h5 className='text-danger text-center mt-5'>Post is undefined!</h5></div>
                }

            </div>
        </div >
    )
}

export default UserData;
