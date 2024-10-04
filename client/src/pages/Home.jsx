import React from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className='grid place-items-center'>
        <Navbar />
        <p className='text-3xl font-bold pt-20 text-center'>Home Content</p>
        <p className='text-3xl font-bold pt-20 text-center'> Welcome to LeetRank: Where Code Meets Competition!</p>
        <p className='text-3xl font-bold pt-20 text-center'>Track Your Progress, Rank Among the Best!</p>
        <button className='text-3xl font-bold pt-20 text-center'></button>
    </div>
  )
}

export default Home