import React from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Devang-vaishnav')
    //     .then((res) => res.json())
    //     .then((res) => setData(res))
    // },[])

    const data = useLoaderData();

    return (
        <div className=' bg-red-300 text-white text-3xl p-2 text-center'>
            GithubId : {data.id}
        </div>
    );
}

export default Github

export const getGithubInfo = async () => {
    const data = await fetch('https://api.github.com/users/Devang-vaishnav');
    return await data.json();
}
