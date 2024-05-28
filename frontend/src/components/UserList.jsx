import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    getUsers();
  },[]);
  const getUsers = async()=>{
    const response = await axios.get('http://localhost:3001/users')
    setUsers(response.data)
  }

  const deleteUser = async (id) => {
    try{
      await axios.delete(`http://localhost:3001/users/${id}`);
      getUsers()
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="">
        <Link to={'add'} className='button is-success'>Add New</Link>
        </div>
        
        <tabel className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index)=>(
              <tr key={data.id}>
              <td>{index+1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.gender}</td>
              <td>
                <Link to={`edit/${data.id}`} className='button is-small is-info'>Edit</Link>
                <button onClick={()=>deleteUser(data.id)} className='button is-small is-danger'>Delete</button>
              </td>
            </tr>
            ))}
            
          </tbody>
        </tabel>  
      </div>
    </div>
  )
}

export default UserList
