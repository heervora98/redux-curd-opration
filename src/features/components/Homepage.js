import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom' 

const Homepage = () => {
    const user = useSelector(State => State);
    const userData = user.counter
    console.log(userData,"----user");

    const dispatch = useDispatch();

    const deleteUser = (id) => {
        dispatch({type:"DELETE_USER", payload:id});
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-right user-add-btn">
                        <Link to="/addUser" className="btn my-5 btn-outline-dark ms-auto">
                            Add User
                        </Link>
                    </div>
                    <div className='col-md-12 mx-auto'>
                        <table className='table'>
                            <thead className='text-white bg-dark text-center'>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Number</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {
                                    userData.map((data,id) => (
                                        <tr key={id}>
                                            <td>{id + 1}</td>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.number}</td>
                                            <td>
                                                <Link to={`/editUser/${data.id}`} className="btn btn-small text-white bg-dark mx-2">Edit</Link>

                                                <button type='button' onClick={() => deleteUser(data.id)} className="btn btn-small btn-danger">Delete</button>
                                                <Link to={`/userData/${data.id}`} className="btn btn-small text-white bg-dark mx-2">Data</Link>

                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
