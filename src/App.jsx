import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import './App.css';
import { login, logout } from './store/authSlice';
import {Footer} from './components';
import { Header } from './components';
import { Outlet } from 'react-router-dom';




function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        }
        else {
          dispatch(logout())
        }
      }).catch
      ((error) => {
        console.log("App.jsx :: useEffect :: error", error)
      })
      .finally(()=>setLoading(false))

  }, [])
  

  //console.log(import.meta.env.VITE_APPWRITE_URL);
 
  return !loading ? (
    <div className='min-h-scree flex-wrap content-between bg-slate-400 '>

      <div className='w-full block'>
        <Header />
        <main>
         TODO: <Outlet />
        </main>
        <Footer />

      </div>
  
    </div>
  ): null
}

export default App
