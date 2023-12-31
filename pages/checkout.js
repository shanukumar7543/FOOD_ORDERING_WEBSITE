import {
  AddIcon,
  ArrowBackIcon,
  ArrowLeftIcon,
  DeleteIcon,
} from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

export default function checkout() {
  const { mockProducts, selectedProduct } = useSelector((store) => {
    return store.products
  })

  console.log('selectedProduct', selectedProduct)
  return (
    <Box
      h={'auto'}
      w={'98%'}
      boxShadow={'15px'}
      border={'0.5px solid gray'}
      m={'10px'}
      mr={'20px'}
    >
      <Box
        h={'100%'}
        w={'100%'}
        justifyContent={'center'}
        justifyItems={'center'}
        display={{ base: 'none', md: 'flex' }}
      >
        <Heading>Your Cart</Heading>
      </Box>

      <Link href="/">
        <Button ml={'10px'}>
          <ArrowBackIcon mr={'20px'} /> Back To Home
        </Button>
      </Link>

      {selectedProduct?.map((product) => {
        return (
          <Box
            id={product.id}
            m={'5px'}
            mt={'20px'}
            h={'120px'}
            w={'800px'}
            p={'5px'}
            ml={'330px'}
            boxShadow={'15px'}
            border={'0.5px solid gray'}
          >
            <Flex>
              <Image pr={'2px'} src={product.image} boxSize="25%" alt="oops" />
              <Box>
                <Heading fontSize={'20px'}>{product.name}</Heading>
                <p fontSize={'10px'}>{product.description}</p>
                <p fontSize={'10px'} fontWeight="bold">
                  Price: ${product.price}
                </p>
              </Box>
            </Flex>
          </Box>
          // </SimpleGrid>
        )
      })}

      <Button
        fontSize={'19px'}
        w={'500px'}
        mt={'25px'}
        color={'white'}
        borderRadius={'15px'}
        ml={'440px'}
        mb={'30px'}
        bg={'black'}
      >
        <p>Order Now</p>
      </Button>
    </Box>
  )
}
