import React, { useEffect } from 'react';
import { useListData } from '../../contexts/listContext/ListContext';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './List.css';
import { getMoviesLists } from '../../api';

export default function Lists() {
  const [state, dispatch] = useListData();

  const removeRow = id => {
    if (window.confirm('Are you sure?')) {
      //   deleteMovieApi(id, dispatch);
    }
  };

  useEffect(() => {
    getMoviesLists(dispatch);
  }, [dispatch]);

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'title', headerName: 'Title', width: 130 },
    {
      field: 'type',
      headerName: 'Type',
      width: 120,
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',

      renderCell: params => {
        return (
          <>
            <Link
              to={{ pathname: `/lists/${params.row._id}`, list: params.row }}
            >
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => removeRow(params.row._id)}
            />
          </>
        );
      },
      width: 120,
    },
  ];

  if (state.loading)
    return (
      <div style={{ flex: 4 }}>
        <h3>Fetching....</h3>
      </div>
    );

  return (
    <div className='list'>
      <DataGrid
        rows={state.lists}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        getRowId={r => r._id}
      />
    </div>
  );
}
