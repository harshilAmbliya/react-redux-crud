import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from '../redux/slices/userslice'
const Navbar = () => {
    const userslength = useSelector(state => state.users.length)
    const [user, setUser] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })
    const dispatch = useDispatch()

    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            id: userslength + 1,
            [name]: value
        })
    }
    const handlesubmit = (e) => {
        e.preventDefault();

        dispatch(adduser(user));
        setUser({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark  ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user">users</Link>
                            </li>


                        </ul>
                        <form className="d-flex" >

                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add Users
                            </button>


                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Fill The Form</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="getuser">
                                                <div className="mb-3">
                                                    <label htmlFor="first" className="form-label">First Name</label>
                                                    <input type="text" className="form-control" id="first" placeholder="Enter First Name.." name='firstName' value={user.firstName} onChange={handlechange} />
                                                </div><div className="mb-3">
                                                    <label htmlFor="last" className="form-label">Last Name</label>
                                                    <input type="text" name='lastName' className="form-control" id="last" placeholder="Enter Last Name.." value={user.lastName} onChange={handlechange} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Email address</label>
                                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name='email' value={user.email} onChange={handlechange} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="message" className="form-label">Message </label>
                                                    <textarea className="form-control" id="message" rows="3" name='message' value={user.message} onChange={handlechange}   ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={handlesubmit} data-bs-dismiss="modal">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


