import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import './UserList.css';
import { userRows } from '../../utils/dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [data, setData] = useState(userRows);

  const removeRow = id => {
    if (window.confirm('Are you sure?')) {
      // Make API call
      setData(data.filter(d => d.id !== id));
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'Username',
      width: 150,
      renderCell: params => {
        return (
          <div className='userListItem'>
            <img
              className='itemImage'
              src={params.row.avatar}
              alt={params.row.username}
              srcset=''
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: 'avatar',
      headerName: 'Image',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 110,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',

      renderCell: params => {
        return (
          <>
            <Link to={`/users/${params.row.id}`}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => removeRow(params.row.id)}
            />
          </>
        );
      },
      width: 120,
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
