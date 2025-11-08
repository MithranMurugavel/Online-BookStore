import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import { Topselling } from './Topselling'
import { Recommended} from './Recommended'
import News from './News'
import Loading from '../../components/Loading'
export const Home = () => {
      const [loading, setLoading] = useState(true);

      useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

    if(loading) return <Loading/>
    
  return (
    <>
     <Banner/>
     <Topselling/>
     <Recommended/>
     <News/>
    
    </>
   
   

  )
}

export default Home