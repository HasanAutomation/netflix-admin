import React from 'react';
import './CreateUser.css';

export default function CreateUser() {
  return (
    <div className='createUser'>
      <h1>Create User</h1>
      <form>
        <div className='userForm'>
          <div className='newUserFormItem'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
          </div>
          <div className='newUserFormItem'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' />
          </div>
          <div className='newUserFormItem'>
            <label htmlFor='fullname'>Full Name</label>
            <input type='text' id='fullname' />
          </div>
          <div className='newUserFormItem'>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' />
          </div>
          <div className='newUserFormItem'>
            <label htmlFor='phone'>Phone</label>
            <input type='text' id='phone' />
          </div>
          <div className='newUserFormItem'>
            <label htmlFor='address'>Address</label>
            <input type='text' id='address' />
          </div>
          <div className='newUserFormItem'>
            <label htmlFor='active'>Active</label>
            <select className='newUserSelect' name='' id=''>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='newUserFormItem'>
            <label htmlFor=''>Gender</label>
            <div className='radioContainer'>
              <input type='radio' name='radio' id='male' />
              <label className='radioLabel' htmlFor='male'>
                Male
              </label>
              <input type='radio' name='radio' id='female' />
              <label className='radioLabel' htmlFor='female'>
                Female
              </label>
              <input type='radio' name='radio' id='others' />
              <label className='radioLabel' htmlFor='others'>
                Others
              </label>
            </div>
          </div>
        </div>

        <button className='createUserButton' type='submit'>
          Create User
        </button>
      </form>
    </div>
  );
}
