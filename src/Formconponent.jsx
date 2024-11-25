import React, { useState } from "react";

const Formcomponent = () => {
    const [name,setName] = useState("");
    const [data,setData] = useState([]);
    const [id,setId] = useState("");
    const saveData = (e) => {
        e.preventDefault()
        if (id != '') {
            // update
            let res = data.map((i,index) => {
                if(index == id){
                    i = name
                }
                return i
            })
            setData(res);
        } else {
            // insert
            setData([
                ...data,
                name
            ])
        }
        setId('')
        setName('')
    }
    const editData = (id) => {
        let res = data.find((i, index) => {
            return(
                index == id
            )
        })
        // data.slice(id,1)
        setName(res)
        setId(id)
    }
    const delData = (id) => {
        let res = data.filter((i, index) => {
            return(
                index != id
            )
        })
        // data.slice(id,1)
        setData(res)
    }

    return (
        <>
            <div>
                <h3>TODO App</h3>
                <form action="#" method="post" onSubmit={saveData}>
                    <label htmlFor="">Name : </label>
                    <input type="text" name="name" id="name" value={name}  onChange={(e) => setName(e.target.value)}/>

                    <input type="submit" value={id != '' ? "Update" : "Add"} />
                </form>
                <br />
                <br />
                <table border={2}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    {/* Dynamic data */}

                    {
                        data.map((i,index) => {
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{i}</td>
                                    <td>
                                        <button onClick={() => editData(index)}>Edit</button>
                                        <button onClick={() => delData(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default Formcomponent;