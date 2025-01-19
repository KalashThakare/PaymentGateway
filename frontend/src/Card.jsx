import { VStack,Image, Button,Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({amount,img,checkoutHandler}) => {
  return (
    <VStack>
        <Image src={img}/>
        <Text>{amount}</Text>
        <Button onClick={checkoutHandler}>Buy Now</Button>
    </VStack>
  )
}

export default Card;