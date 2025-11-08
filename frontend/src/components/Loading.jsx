import React from 'react'
import { Bouncy } from 'ldrs/react'
import 'ldrs/react/Bouncy.css'

// Default values shown

const Loading = () => {
  return (
    <div className ="flex justify-center items-center h-screen">
    <Bouncy
  size="45"
  speed="2"
  color="black" 
/>
</div>
  )
}

export default Loading