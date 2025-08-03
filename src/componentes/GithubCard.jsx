import React from 'react';

const GithubCard = ({data}) => {
    console.log(data);

    const { avatar_url, name, location, followers, public_repos, bio } = data || {};

  return (
    <div className='border p-4 rounded mb-4 flex flex-col gap-6 max-w-[400px] mx-auto items-center bg-white hover:bg-gray-100 shadow-md'>
      <img src={avatar_url} className='w-56 h-56 border bg-gray-100 rounded-full' alt="Github Avatar" />
        <h2 className='text-2xl font-bold'>{name}</h2>
        <div className='grid grid-cols-2 gap-4 mt-4'>
            <p className='text-gray-600'>Bio : {bio}</p>
            <p className='text-gray-600'>Location: {location}</p>
            <p className='text-gray-600'>Followers: {followers}</p>
            <p className='text-gray-600'>Public Repos: {public_repos}</p>
        </div>
    </div>
  )
};

export default GithubCard;
