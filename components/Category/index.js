import React, { useState } from 'react'
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { allProducts } from '@/constants/products'

const ScrollableList = () => {
  const [products, setProducts] = useState(allProducts)
  const [activeProduct, setActiveProduct] = useState({})

  const onClickHandler = (product) => {
    document.getElementById('category-' + product.id).scrollIntoView()
    setActiveProduct(product)
  }

  return (
    <Flex
      overflowX="auto"
      whiteSpace="nowrap"
      maxW="100%"
      color={'gray.900'}
      fontSize={'15px'}
      alignItems="center"
      marginLeft="50px "
      marginRight={'50px'}
      sx={{
        '&::-webkit-scrollbar': {
          width: '0px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'transparent',
        },
        '&::-moz-scrollbar': {
          width: '0px',
        },
        '&::-moz-scrollbar-thumb': {
          background: 'transparent',
        },
        '&::-moz-scrollbar-track': {
          background: 'transparent',
        },
      }}
    >
      <Box position={'absolute'}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
          />
          <MenuList>
            {products.map((product) => (
              <MenuItem
                key={product.id}
                onClick={() => onClickHandler(product)}
                color={'gray.500'}
              >
                {product.catagiory}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
      <Box pl={35} overflow={' width: 0.5em;'}>
        {products.map((product, index) => (
          <Box
            key={index}
            as="button"
            p={4}
            m={2}
            borderRadius="md"
            onClick={() => onClickHandler(product)}
            fontWeight={product.id === activeProduct.id ? 'bold' : 'normal'}
            color={product.id === activeProduct.id ? 'black.700' : 'gray.700'}
            _hover={{ textDecoration: 'underline' }}
            _after={
              product.id === activeProduct.id
                ? {
                    content: '""',
                    display: 'block',
                    borderBottom: '5px solid',
                    borderColor: 'black.800',
                    borderRadius: 'md',
                  }
                : {}
            }
          >
            <Text>{product.catagiory}</Text>
          </Box>
        ))}
      </Box>
    </Flex>
  )
}

export default ScrollableList
