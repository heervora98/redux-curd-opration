import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddUser = () => {
    const {id} = useParams()
    const [postname, setPostname] = useState("");
    const [postDescription, setPostDescription] = useState("");

    const user = useSelector((state) => state);
    const userAllData = user.counter
    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const rendomId = Math.random() * (100 - 1) + 1;
    const intID = parseInt(rendomId)

    const handleSubmit = (e) => {
        e.preventDefault();

        // ...validation
        if (!postname || !postDescription) {
            return toast.warning("Please fill in all fields!")
        }
        

        const data = {
            id : intID,
            postname,
            postDescription,
        }

        
     const loopData = userAllData.map((user) => {
            if (user.id == id) {
                user.post.push(data)
            }
            else {
                console.log("error");
            }
            return user
        })

        // console.log(data, "data");

        console.log(loopData,"loopData");
        navigate(`/userData/${id}`);
        dispatch({ type: "ADD_USER", payload : loopData})
        
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="col-md-12 text-center heading">
                        Add Post
                    </h1>
                    <div className='col-md-6 Shadow mx-auto p-5 form-bg'>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label>Post Title</label>
                                    <input type='text'
                                        placeholder="title"
                                        className='form-control'
                                        value={postname}
                                        onChange={e => setPostname(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Post description</label>
                                    <textarea type='text'
                                        placeholder="description"
                                        className='form-control'
                                        value={postDescription}
                                        onChange={e => setPostDescription(e.target.value)}
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
