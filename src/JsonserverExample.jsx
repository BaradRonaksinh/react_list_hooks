import axios from 'axios'
import React, { useEffect, useState } from 'react'

const JsonserverExample = () => {
    const [id,setId] = useState("")
    const [data, setData] = useState({
        id: "",
        name: "",
        age: ""
    })
    const [userdata, setUserdata] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const dispData = () => {
        axios.get('http://localhost:4000/users')
            .then((res) => setUserdata(res.data))
    }
    useEffect(() => {
        dispData()
    }, [])
    const saveData = (e) => {
        e.preventDefault()
        if (id != '') {
            // update - put
            axios.put('http://localhost:4000/users/'+id, data)
            .then((res) => console.log(res))
        } else {
            // insert
            axios.post('http://localhost:4000/users', data)
            .then((res) => console.log(res))
        }
        
        dispData()
    }
    const delData = (id) => {
        axios.delete('http://localhost:4000/users/' + id)
            .then((res) => console.log(res))
        dispData()
    }
    const editData = (id) => {
        setId(id)
        axios.patch('http://localhost:4000/users/' + id)
            .then((res) => setData(res.data))
    }
    return (
        <>
            <h3>Api With Json server</h3>
            <form action="#" method='post' onSubmit={saveData}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={data.name} />
                <br />
                <label htmlFor="">Age:</label>
                <input type="number" name="age" id="name" onChange={handleChange} value={data.age} />
                <br />
                <input type="submit" value='save' />
                <br />
            </form>

            <table>
                <thead>

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>

                {
                    userdata.map((i) => {
                        return (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td><button onClick={() => editData(i.id)}>Edit</button></td>
                                <td><button onClick={() => delData(i.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}

export default JsonserverExample
