import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const {userid} = useParams();
    return (
        <div className=' bg-red-400 text-white p-2 text-3xl text-center'>
            User : {userid}
        </div>
    );
}

export default User;
