import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'

export default function index() {
  return (
    <div>
      {/* todo */}
      <Heading fontSize={'25px'} pb={'10px'} pt={'15px'}>
        Most Liked Items From The Menu
      </Heading>
      <Box pb={'10px'}>
        {/* <Flex> */}
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacingX="12px" spacingY="20px">
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/7d0137f1-f1d8-4c25-a268-5e933eaca5bd-retina-large.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Quarter Pounder with Cheese Meal</Heading>

                <Text color="gray.600" fontSize="">
                  $11.95
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/7d0137f1-f1d8-4c25-a268-5e933eaca5bd-retina-large.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">10 Piece McNuggets Meal</Heading>

                <Text color="gray.600" fontSize="">
                  $11.83
                </Text>
              </Stack>
            </CardBody>
            {/* <Divider /> */}
            {/* <CardFooter> */}
            {/* <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
          </ButtonGroup> */}
            {/* </CardFooter> */}
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/dfd0ab4e-3e54-4829-a505-37a91417c98f-retina-large.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">French Fries</Heading>

                <Text color="gray.600" fontSize="">
                  $2.63
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
      <Divider />
    </div>
  )
}
