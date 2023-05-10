import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteuser } from './redux/slices/userslice'
import { Link } from 'react-router-dom'

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users)
  const userlength = useSelector(state => state.users.length)
 


  return (
    <div>
      <h1 className='text-center'>User - {userlength}</h1>
      <div className='container'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>

            {
              user && user.map((user,index) => {
                return (
                  <tr key={Math.random() * 100}>
                    <th scope="row">{user.id}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{`${user.message.slice(0, 20)}`}</td>
            
                    <td><Link to={`/update/${user.id}`}>
                      <button type="button" className="btn btn-warning" style={{ width: "8rem" }} >Edit</button>
                      </Link><button type="button" className="btn btn-danger" onClick={() => dispatch(deleteuser(user.id))} style={{ width: "8rem" }}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User