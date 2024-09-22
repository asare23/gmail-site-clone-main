import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch() ;

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        }); 
    };

  return (
    <div className='header'>
        <div className='header__left'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprHgpcmKQx1kmezSXIpM-pPSxPlAyXNfW3Q&s"
                alt=""
            />
        </div>

        <div className='header__middle'>
            <SearchIcon/>
            <input placeholder='Search mail' type='text' />
            <ArrowDropDown className='header__inputCaret' />
        </div>

        <div className='header__right'>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar className='header__avatar' onClick={signOut} src={user?.photoUrl} />
        </div>
    </div>
  )
}

export default Header;