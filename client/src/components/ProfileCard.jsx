import React from 'react'
import { useSelector } from 'react-redux';

const ProfileCard = () => {
  const {user:data, edit}=useSelector((state)=>state.user);
  const dispatch= useDispatch();
  return (
    <div>
      <div className="w-fill bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4">
        <div className="w-full flex items-center justify-between border-b pb-5 border-[#66666645]">
         
          <Link to={`/profile/${user?._id}`} className="flex gap-2">
          <img src={user?.profileUrl??Noprofile} alt={user?.email}/>
           
          
          </Link>
        </div>
      </div>
    </div>
  );
  
};


export default ProfileCard