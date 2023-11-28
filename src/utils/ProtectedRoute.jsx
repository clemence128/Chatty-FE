import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/userSlice';
import LoginPage from '../pages/Login/LoginPage';

export default function ProtectedRoute({children}) {
  const navigate = useNavigate();
  const {isLoggedIn, isLoading} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!isLoggedIn){
      dispatch(getCurrentUser());
      navigate('/login');
    }
  }, [isLoggedIn])

  if(isLoading)
    return <div className='fixed inset-0'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <span className='loading loading-spinner text-primary loading-lg'></span>
      </div>
    </div>

  return (
    <>{isLoggedIn ? children : <LoginPage/>}</>
  )
}
