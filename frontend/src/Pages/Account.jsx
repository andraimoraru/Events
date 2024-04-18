import React from 'react';
import './CSS/Account.css'
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

export const Account = () => { 
  const { user } = useContext(UserContext);

  return (
    <div>
        <h1>Hello, {user.username}!</h1>
    </div>
  )
}

export default Account;