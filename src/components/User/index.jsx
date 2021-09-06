import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './User.css';

export default function User() {
  const history = useHistory();

  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1>Edit User</h1>
        <button
          className='userAddBtn'
          onClick={() => history.push('/users/create')}
        >
          Create
        </button>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src='https://picsum.photos/200'
              alt='Name'
              className='userImage'
            />
            <div className='userShowTopTitle'>
              <div className='userShowUsername'>Hasan Ali</div>
              <div className='userShowJobTitle'>Software Engineer</div>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='accountIcon' />
              <span className='userShowInfoTitle'>alihans</span>
            </div>
            <div className='userShowInfo'>
              <CalendarToday className='accountIcon' />
              <span className='userShowInfoTitle'>10.12.1998</span>
            </div>
            <div className='userShowInfo'>
              <PhoneAndroid className='accountIcon' />
              <span className='userShowInfoTitle'>+918240272335</span>
            </div>
            <div className='userShowInfo'>
              <MailOutline className='accountIcon' />
              <span className='userShowInfoTitle'>hans1998ali@gmail.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearching className='accountIcon' />
              <span className='userShowInfoTitle'>Kolkata</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='formGroup'>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' className='updateInput' />
              </div>
              <div className='formGroup'>
                <label htmlFor='fullname'>Full Name</label>
                <input type='text' id='fullname' className='updateInput' />
              </div>
              <div className='formGroup'>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' className='updateInput' />
              </div>
              <div className='formGroup'>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' className='updateInput' />
              </div>
              <div className='formGroup'>
                <label htmlFor='phone'>Phone</label>
                <input type='text' id='phone' className='updateInput' />
              </div>
              <div className='formGroup'>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' className='updateInput' />
              </div>
            </div>

            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  src='https://picsum.photos/200'
                  alt='Name'
                  className='userUpdateImage'
                />
                {/* <DeleteOutline className='deleteIcon' /> */}
                <label htmlFor='file'>
                  <Publish className='uploadIcon' />
                  <input type='file' id='file' className='fileInput' />
                </label>
              </div>

              <button type='submit'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
