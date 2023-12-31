'use client'
import React, { ReactElement, ReactNode } from 'react'
import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Icon,
} from '@chakra-ui/react'
import Product from '../Product'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import {} from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { Flex, Spacer } from '@chakra-ui/react'
import ScrollableList from '../Category'

const Index = () => {
  return (
    <>
      <Divider />
      <Box h={'80px'} w={'100%'} justifyContent={'space-between'} pt={'20px'}>
        <Flex>
          <Box>
            <Heading as={'h5'} fontSize={'20px'}>
              Dinner Menu <Icon as={ChevronDownIcon} />
            </Heading>
            <Text fontSize="lg">4:00 am - 10:29 am</Text>
          </Box>
          <Spacer />

          <Box>
            <InputGroup borderRadius={'15px'} size="sm" h={'50px'}>
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.600" />}
              />
              <Input
                type="text"
                placeholder="Search store menu"
                rounded="full"
                bg="gray.100"
                textColor={'gray.800'}
                fontSize={'15px'}
                h={'35px'}
                fontWeight="semibold"
              />
            </InputGroup>
          </Box>
        </Flex>
      </Box>

      <Box>
        <ScrollableList />
      </Box>

      <Product />
    </>
  )
}

export default Index
