import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import './UserList.css';
import { Link } from 'react-router-dom';
import { getNewUsers } from '../../api';
import { formatUserData } from '../../utils/constants';

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getNewUsers()
      .then(({ data }) => {
        setData(formatUserData(data));
      })
      .catch(err => {
        console.log(err);
        setData([]);
      });
  }, []);

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
            />
            {params.row.username}
          </div>
        );
      },
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
