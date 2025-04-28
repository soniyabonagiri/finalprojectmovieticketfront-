import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Exploremovies from '../../components/ExploreMovies/Exploremovies'
import Slidebar from '../../components/Slidebar/Slidebar'
import Movienamedisplay from '../../components/movieNameDisplay/Movienamedisplay'
// import Moviedesc from '../../components/moviedesc/Moviedesc'
import AppDownload from '../../components/appdownload/AppDownload'

const Home = () => {

  
  const[category,setCategory]=useState('all')


  return (
    <div>
      <Slidebar/>
      <Exploremovies category={category} setCategory={setCategory}/>
      <Movienamedisplay category={category}/>
      <AppDownload/>
      

      {/* <Header/> */}
      {/* <Moviedesc/>SS */}
      {/* 1:33 */}
    </div>
  )
}

export default Home
