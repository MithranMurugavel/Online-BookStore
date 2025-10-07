import React from 'react'
import Banner from './Banner'
import { Topselling } from './Topselling'
import { Recommended} from './Recommended'
import News from './News'
import Footer from '../../components/footer'
import Login from '../../components/Login'
export const Home = () => {
  return (
    <>
     <Banner/>
     <Topselling/>
     <Recommended/>
     <News/>
     <Footer/>
     <Login/>
    </>
   
   

  )
}

export default Home