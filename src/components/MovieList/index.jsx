import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import './movieList.css';
import { Link } from 'react-router-dom';
import { deleteMovieApi, getMovies } from '../../api';
import { useMovieData } from '../../contexts/movieContext/MovieContext';

export default function MovieList() {
  const [state, dispatch] = useMovieData();

  const removeRow = id => {
    if (window.confirm('Are you sure?')) {
      deleteMovieApi(id, dispatch);
    }
  };

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 150,
      renderCell: params => {
        return (
          <div className='userListItem'>
            <img
              className='itemImage'
              src={params.row.image || 'https://picsum.photos/200'}
              alt={params.row.title}
            />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 120,
    },
    {
      field: 'year',
      headerName: 'Year',
      width: 120,
    },
    {
      field: 'limit',
      headerName: 'Limit',
      width: 120,
    },
    {
      field: 'isSeries',
      headerName: 'isSeries',
      width: 130,
    },
    {
      field: 'action',
      headerName: 'Action',

      renderCell: params => {
        return (
          <>
            <Link
              to={{ pathname: `/movies/${params.row._id}`, movie: params.row }}
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
  if (state.loading) return <h3>Fetching movies....</h3>;

  return (
    <div className='movieList'>
      <DataGrid
        rows={state.movies}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        getRowId={r => r._id}
      />
    </div>
  );
}
