import React from 'react';
import { TopBar } from '../components';
import {useSelector}   from "react-redux"
  const {user}=useSelector(state=>state.user);
  return (
    <div className='home w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden'><TopBar/>   
    
    <div className="w-full flex gap-2 lg:gap-4 pt-5 pb-10 h-full">
{/*LEFT*/}
<div classname="hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto">
<ProfileCard usser={user}/></div>
{/*CENTER*/}
<div></div>

{/*RIGHT*/}
<div></div>



      </div></div>
  )
}

export default Home;