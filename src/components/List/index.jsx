import React, { useEffect, useState } from 'react';
import './List.css';
import { useLocation, Link } from 'react-router-dom';
import { Publish } from '@material-ui/icons';
import { getMoviesNames, updateMovieList } from '../../api';
import { useMovieData } from '../../contexts/movieContext/MovieContext';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function List() {
  const { list } = useLocation();
  const [state] = useMovieData();
  const { id } = useParams();
  const history = useHistory();

  const [listObject, setListObject] = useState(list || {});

  const handleChange = e => {
    setListObject({
      ...listObject,
      [e.target.name]: e.target.value,
    });
  };

  const getSelectValues = () => {
    const { movies } = state;
    const optionsArray = movies.map(movie => ({
      _id: movie._id,
      title: movie.title,
    }));
    return optionsArray.map(option => (
      <option key={`item-${option._id}`} value={option._id}>
        {option.title}
      </option>
    ));
  };

  const selectMultipleOptions = e => {
    let values = Array.from(e.target.selectedOptions, option => option.value);
    setListObject({
      ...listObject,
      [e.target.name]: values,
    });
  };

  const handleUpdate = async e => {
    e.preventDefault();
    const data = await updateMovieList(id, listObject);
    if (data.ok) {
      history.push('/lists');
    }
    // make the api call
  };

  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>List</h1>
        <Link to='/new-list'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <span className='productName'>{listObject.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>{listObject._id}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>genre:</span>
              <span className='productInfoValue'>{listObject.genre}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Type:</span>
              <span className='productInfoValue'>{listObject.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Movie Title</label>
            <input
              type='text'
              name='title'
              value={listObject.title}
              onChange={handleChange}
            />
            <label>Type</label>
            <input
              type='text'
              name='type'
              value={listObject.type}
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type='text'
              name='genre'
              value={listObject.genre}
              onChange={handleChange}
            />
            <button className='productButton' onClick={handleUpdate}>
              Update
            </button>
          </div>
          <div className='productFormRight'>
            <select name='content' multiple onChange={selectMultipleOptions}>
              {getSelectValues()}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
