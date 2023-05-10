import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateuser } from '../redux/slices/userslice'
const Update = () => {
    const users = useSelector(state => state.users);
    const  {id}  = useParams();
    const dispatch = useDispatch();
    const olduser = users.find(u => u.id == id);
    console.log(olduser)
    const [user, setUser] = useState(olduser)
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    }
    const handleupdate = () =>{
        
        const index = users.findIndex(u =>u.id == id)                         
        dispatch(updateuser({
          user,
          index,
        }))
    }


    return (
        <div>
            <form className="container " style={{padding:'35px 20px'}} >


                <div className="">
                    <div className="">
                        <h5 className="fs-2 text-center">Update The Form</h5>
                       
                    </div>
                    <div className="">
                        <div className="getuser">
                            <div className="mb-3">
                                <label htmlFor="first" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="first" placeholder="Enter First Name.." name='firstName'  onChange={handlechange} value={user.firstName} />
                            </div><div className="mb-3">
                                <label htmlFor="last" className="form-label">Last Name</label>
                                <input type="text" name='lastName' className="form-control" id="last" placeholder="Enter Last Name.."  onChange={handlechange} value={user.lastName} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" onChange={handlechange} value={user.email}  />
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message </label>
                                    <textarea className="form-control" id="message" rows="3" name='message'  onChange={handlechange}  value={user.message}  ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <Link to={'/user'}>
                            <button type="button" className="btn btn-primary w-100" onClick={handleupdate} >update</button></Link>
                        </div>
                    </div>
                </div>




            </form>
        </div>
    )

}

export default Update