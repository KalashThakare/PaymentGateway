import React from 'react'
import {Box,Stack} from "@chakra-ui/react";
import Card from './Card';

const Home = () => {

    const checkoutHandler=()=>{

    }




  return (
    
    <Box>
        <Stack direction={"row"}>
            <Card amount={10000} img checkoutHandler={checkoutHandler}/>
        </Stack>
    </Box>
  )
}

export default Home