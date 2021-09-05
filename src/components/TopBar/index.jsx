import './TopBar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { useState } from 'react';
import { useAuthData } from '../../contexts/authContext/AuthContext';
import { logout } from '../../api';
export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [state, dispatch] = useAuthData();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset > 80 ? true : false);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? 'topbar shadow' : 'topbar'}>
      <div className='topbar-wrapper'>
        <div className='left'>
          <span className='logo'>aliadmin</span>
        </div>
        {state.isLoggedIn && (
          <div className='right'>
            <div className='top-right-icon-container'>
              <NotificationsNone />
              <span className='notification-badge'>2</span>
            </div>
            <div className='top-right-icon-container'>
              <Language />
              <span className='notification-badge'>2</span>
            </div>
            <div className='top-right-icon-container'>
              <Settings />
            </div>
            <img
              src='https://picsum.photos/200'
              alt='Logo'
              className='profile-avatar'
              onClick={() => logout(dispatch)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
