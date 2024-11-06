import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';

function Usercomponent() {

    const [data, setData] = useState({
        id: '',
        name: '',
        age: '',
        email: '',
        password: ''
    })
    // document.userFrom.reset()

    const [userdata, setUserData] = useState([])
    const handleChange = (e) => {
        // let name = e.target.name
        // let value = e.target.value

        const { name, value } = e.target //destructuring of Object :)
        setData({
            ...data,
            [name]: value
        })
    }
    const saveData = (e) => {
        e.preventDefault();

        if (data.id != '') {
            // update -- code  ;)
            let res = userdata.map((i) => {
                if(i.id == data.id){
                    i.name = data.name
                    i.email = data.email
                    i.password = data.password
                    i.age = data.age
                }
                return i;
            })
            setUserData(res);
        } else {
            // insert -- code :(
            data.id = userdata.length > 0 ? userdata.length + 1 : 1
            setUserData([
                ...userdata,
                data
            ])
        }

    }

    // show table code...
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'action',
            headerName: 'Action',
            // type: 'button',
            width: 200,
            disableClickEventBubbling: true,

            renderCell: (params) => {
                const delData = (e) => {
                    const id = params.row.id;
                    // delete function impliment
                    let del_data = userdata.filter((i) => {
                        return i.id != id
                    })
                    setUserData(del_data);
                    // return alert(JSON.stringify(currentRow, null, 4));
                };

                // edit function impliment
                const editData = (e) => {
                    const id = params.row.id;
                    // edit function impliment
                    let edit_data = userdata.find((i) => {
                        return i.id == id
                    })
                    console.log(edit_data);
                    setData(edit_data);
                }

                return (
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" color="warning" size="small" onClick={editData}>Edit</Button>
                        <Button variant="outlined" color="error" size="small" onClick={delData}>Delete</Button>
                    </Stack>
                );
            }
        },

    ];



    // const paginationModel = { page: 0, pageSize: 5 };

    return (
        <>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                action='#'
                onSubmit={saveData}
                name='userFrom'
            >
                <div>

                    <TextField
                        id="name"
                        label="Name"
                        type="text"
                        name='name'
                        onChange={handleChange}
                        defaultValue={data.name}
                        value={data.name}

                    />
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        name='email'
                        onChange={handleChange}
                        defaultValue={data.email}
                        value={data.email}

                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        name='password'
                        onChange={handleChange}
                        defaultValue={data.password}
                        value={data.password}
                    />
                    <TextField
                        id="number"
                        label="Number"
                        type="number"
                        name='number'
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        onChange={handleChange}
                        defaultValue={data.number}
                    />
                    <TextField
                        id="age"
                        label="Age"
                        type="number"
                        name='age'
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        onChange={handleChange}
                        defaultValue={data.age}
                        value={data.age}
                    />

                </div>
                <Button variant="contained" type='submit'>
                    Save Data
                </Button>

            </Box>


            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={userdata}
                    columns={columns}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper>
        </>
    );
}

export default Usercomponent