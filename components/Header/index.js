import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Heading } from '@chakra-ui/react'

const Index = () => {
  return (
    <Box h={'40%'} w={'100%'} bg={'white'}>
      <Box h={'90%'} position="">
        <Image
          rounded="2xl"
          bg="white"
          src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=10000,height=2300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/71f30ccf-66bd-42f4-8be0-38b6b9657313.png"
          alt="oops"
        />
      </Box>
      <Image
        position="relative"
        marginTop={'-55px'}
        ml={'20px'}
        border={'3px solid white'}
        boxShadow="2xl"
        borderRadius="full"
        boxSize="80px"
        src="https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/efe58558-a9dc-466d-922b-ecce4b3213b1.png"
        alt="Dan Abramov"
      />
      <Heading mt={'15px'}>McDonald's</Heading>
    </Box>
  )
}

export default Index
