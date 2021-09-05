import React, { useEffect, useState } from 'react';
import { Visibility } from '@material-ui/icons';
import './WidgetSmall.css';
import { getNewUsers } from '../../api';

export default function WidgetSmall() {
  const [newUsers, setNewUsers] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    try {
      setFetching(true);
      getNewUsers()
        .then(({ data }) => {
          setNewUsers(data);
          setFetching(false);
        })
        .catch(err => {
          setFetching(false);
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className='small'>
      <h3 className='small-title'>New Joined Members</h3>
      <ul className='small-list'>
        {fetching && <h4>Fetching new users </h4>}
        {newUsers.map((newUser, index) => (
          <li className='small-list-item' key={`item-${index}`}>
            <img
              className='user-logo'
              src={newUser.avatar || 'https://picsum.photos/200'}
              alt='User'
            />
            <div className='small-list-item-user'>
              <span className='username'>{newUser.username}</span>
              <span className='job-role'>Software Engineer</span>
            </div>
            <button className='btn-visible'>
              <Visibility className='visiblity-icon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
