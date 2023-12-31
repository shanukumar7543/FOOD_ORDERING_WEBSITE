import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Category from '../Category'
import ScrollableList from '../Category'
import { allProducts } from '@/constants/products'
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { productsSlice } from '@/lib/redux'
import Link from 'next/link'

export default function Index() {
  const { mockProducts, selectedProduct } = useSelector((store) => {
    return store.products
  })

  let totalAmount = 0

  const totalPrice = () => {
    const amount = selectedProduct.map((product) => {
      // console.log('product', product)
      const price = product.price.replace('$', '')
      totalAmount = Number(price) + totalAmount
    })
    return totalAmount
  }

  return (
    <Flex>
      <Box>
        {mockProducts?.map((product) => {
          const category = product.catagiory
          let showProduct = product.products

          return (
            <Flex>
              <Box h={'auto'} id={'category-' + product.id}>
                <Heading fontSize={'25px'} mt={'15px'}>
                  {category}
                </Heading>
                <ShowProducts key={category} products={showProduct} />
              </Box>
            </Flex>
          )
        })}
      </Box>

      {selectedProduct?.length > 0 && (
        <Box width={'700px'} ml={'25px'}>
          <Box
            h={'100%'}
            w={'100%'}
            p={'15px'}
            borderRadius={'2px'}
            border={'0.5px solid gray'}
          >
            <Text color={'gray'}>Your Cart from</Text>
            <Heading fontSize={'20px'}>McDonald's</Heading>
            <Text color={'gray'}>Maximum Order Limit :$50000</Text>

            <Button
              mt={'20px'}
              mb={'25px'}
              background={'red'}
              color={'white'}
              h={'40px'}
              w={'100%'}
              borderRadius={'full'}
              justifyItems={'center'}
            >
              <Flex justifyContent={'space-between'}>
                <Link href="/checkout">
                  {' '}
                  <Text> Checkout</Text>{' '}
                </Link>
                <Text ml={'25px'}>${totalPrice()} </Text>
              </Flex>
            </Button>

            {selectedProduct?.map((product) => {
              return (
                <Box
                  id={product.id}
                  justifyContent={'space-between'}
                  justifyItems={'center'}
                  m={'5px'}
                  mt={'20px'}
                  h={'auto'}
                  w={'auto'}
                  p={'5px'}
                  boxShadow={'15px'}
                  border={'0.5px solid gray'}
                >
                  <Flex>
                    <Image
                      pr={'2px'}
                      src={product.image}
                      boxSize="29%"
                      alt=""
                    />
                    <Box w={'auto'} h={'auto'}>
                      <Heading fontSize={'10px'}>{product.name}</Heading>
                      <Text fontSize={'7px'}>{product.description}</Text>
                      <Text fontSize={'7px'} fontWeight="bold">
                        Price: ${product.price}
                      </Text>
                    </Box>
                    <Button fontSize={'12px'} w={'115px'} borderRadius={'15px'}>
                      <Flex justifyContent={'space-between'}>
                        <DeleteIcon mr={'5px'} />
                        <Text ml={'5px'}> 1X </Text>
                        <AddIcon ml={'5px'} />
                      </Flex>
                    </Button>
                  </Flex>
                </Box>
              )
            })}
          </Box>
        </Box>
      )}
    </Flex>
  )
}

const ShowProducts = ({ products }) => {
  const dispach = useDispatch()

  return (
    <div>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacingX="40px" spacingY="20px">
        {products?.map((item) => (
          <Box key={item.id} mt={'10px'}>
            <Card
              mt={'15px'}
              h={'auto'}
              direction={{ base: 'column', sm: 'row', md: 'row' }}
              variant="outline"
            >
              <Stack>
                <CardBody h={'170'}>
                  <Heading size="md">{item.name}</Heading>
                  <Text py="2">{item.description}</Text>
                  <Text py="2">{item.price}</Text>
                </CardBody>
              </Stack>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                maxH={{ base: '100%', sm: '200px' }}
                src={item.image}
                alt={item.name}
              />
              <Button
                bottom="7"
                right="7"
                bg={'gray.50'}
                textColor={'black'}
                boxShadow="2xl"
                position={'absolute'}
                onClick={() => {
                  dispach(productsSlice.actions.addProduct(item))
                }}
              >
                Add
              </Button>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  )
}
