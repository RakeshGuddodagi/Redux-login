// import React from 'react'
// import "./logout.css"
// import { useDispatch } from 'react-redux'
// import { logout } from '../redux/userSlice';
// const Logout = () => {

//   const dispatch = useDispatch;
//   const handleLogout = (e) => {
//     e.preventDefault();
//     dispatch(logout)
//   }
//   return (
//     <div className='logout'>
//       <h2> Welcome <span className='user'>user</span></h2>
//       <button className='logout_btn' onClick={(e) => handleLogout(e)}>Logout</button>
//     </div>
//   )
// }

// export default Logout

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./logout.css";
import { logout, selectUser } from "../redux/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // const logout = (e) => {
  //   dispatch(logout());
  // };
  const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout)
      }

  return (
    <form className="logout">
      <h1>
        Welcome <span className="user">{user.name}</span>!
      </h1>
      <button className="logout_btn" onClick={(e) => handleLogout(e)}>
        Log out
      </button>
    </form>
  );
};

export default Logout;
