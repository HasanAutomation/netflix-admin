import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createMovieList, getMovies } from '../../api';
import { useMovieData } from '../../contexts/movieContext/MovieContext';
import './NewList.css';

export default function NewList() {
  const [list, setList] = useState(null);
  const [state, dispatchMovies] = useMovieData();

  const history = useHistory();

  const handleChange = e => {
    setList({
      ...list,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getMovies(dispatchMovies);
  }, [dispatchMovies]);

  const handleSelect = e => {
    let values = Array.from(e.target.selectedOptions, option => option.value);
    setList({
      ...list,
      [e.target.name]: values,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!list.hasOwnProperty('type')) {
      list.type = 'movie';
    }
    const data = await createMovieList(list);
    if (data.ok) {
      history.push('/lists');
    }
  };

  return (
    <div className='newList'>
      <h1 className='addProductTitle'>New Movie List</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label>Title</label>
          <input
            type='text'
            placeholder='John Wick'
            name='title'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Genre</label>
          <input
            type='text'
            placeholder='Genre'
            name='genre'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Type</label>
          <select name='type' onChange={handleChange}>
            <option value='movie'>Movie</option>
            <option value='series'>Series</option>
          </select>
        </div>
        <div className='addProductItem'>
          <label>Content</label>
          <select multiple name='content' onChange={handleSelect}>
            {state.loading ? (
              <>loading...</>
            ) : (
              state.movies.map(movie => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))
            )}
          </select>
        </div>

        <button className='addProductButton' onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
