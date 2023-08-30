import React from 'react'

import Wrapper from './style'
import { Link } from 'react-router-dom'

export const Cover = () => {
  
  return (
    <Wrapper>
        {/* <h1 >lets play!!</h1> */}
        <Link to="/MatchForm">Lets Play!!</Link>
        

    </Wrapper>
  )
}
