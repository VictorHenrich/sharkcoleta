import React,{useState} from 'react';
import { 
    Container, 
    Input,
    FormControl,
    FormLabel,
    Box,
    Stack,
    Divider,
    Center,
    Image,
    Button,
    Text,    
    IconButton,
    Spinner,
    InputGroup,
    InputRightElement,
    Heading,
    AspectRatio,
    List,
    ListItem,
    ListIcon,
    UnorderedList
 } from "@chakra-ui/react"

import {ArrowBackIcon,SearchIcon,PhoneIcon,TimeIcon} from "@chakra-ui/icons"

import Tel from './imgs/tel.svg';
import Local from './imgs/Group.svg';
import Wpp from './imgs/Whatsapp.svg';
import Email from './imgs/E-mail.svg';
import REMOVER from './imgs/backgroundREMOVER.svg'
export function ComponentPerfil(props){

    return (
        <Container 
            display='flex'
            alignItems='center'
            justifyContent='flex-start'
            maxWidth='lg'
            centerContent={true}
            className='container'
        >
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                width='100%'
                background='#219653'
                position='fixed'
                top='0px'
                zIndex={1000}
            >
                <Button
                    leftIcon={<ArrowBackIcon width='25px' height='auto'/>}
                    variant="solid"
                    padding='25px'
                    background='transparent'
                    fontSize='25px'
                    color='#fff'
                    fontFamily={`'Ubuntu', sans-serif`}
                    fontWeight='bolder'
                >
                    Home
                </Button>

                <Text
                    fontSize='25px'
                    color='#e6e6e6'
                    fontFamily={`'Ubuntu', sans-serif`}
                    fontWeight='bolder'
                    margin='0px 40px 0px 0px'
                >
                    Dados da Coleta
                </Text>
            </Box>
                
            <Center
                display='block'
                padding='100px'
                background='#FFF'
                overflow='auto'
            >
                <Heading
                        display='block'
                        maxWidth='900px'
                        fontSize='35px'
                        textAlign='left'
                        as="h1"
                        fontFamily={`'Ubuntu', sans-serif`}
                        color='#2AC28B'
                        padding='20px'
                        margin='0px 0px 40px 0px'

                >
                        IFSC - Instituto Federal de Santa Catarina (Campus Tubarao)
                </Heading>
                <Stack
                    width='900px'
                    direction='column'
                    spacing='25px'
                >
                    <Box 
                        overflow='hidden'
                        borderRadius='20px 20px 0px 0px'
                        boxShadow='1px 2px 5px 0px rgb(150,150,150)'
                    >
                        <Image 
                            width='100%'
                            height='auto'
                            src={REMOVER}
                        />
                        
                    </Box>
                    <Text
                        fontSize='20px'
                        fontFamily={`'Ubuntu', sans-serif`}
                        color='#4F4F4F'  
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.    
                    </Text>
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent='space-between'
                        padding='25px 0px'
                    >
                        <List spacing='50px' width='50%'>
                            <ListItem 
                                color='#4F4F4F' 
                                fontSize='15px'
                                fontWeight='bold' 
                                fontFamily={`'Ubuntu', sans-serif`}
                                display='flex'
                                alignItems='flex-start'
                                justifyContent='flex-start'
                            >
                                <ListIcon as={PhoneIcon} height='25px' width='auto' color='#2AC28B' margin='0px 20px 0px 0px'/>
                                    {`${'(48) 3301-9100'} ${'(48) 3301-9100'}`}
                            </ListItem>
                            <ListItem
                                color='#4F4F4F' 
                                fontSize='15px'
                                fontWeight='bold' 
                                fontFamily={`'Ubuntu', sans-serif`}
                                display='flex'
                                alignItems='flex-start'
                                justifyContent='flex-start'
                                
                            >
                            <ListIcon as={TimeIcon} height='25px' width='auto' color='#2AC28B' margin='0px 20px 0px 0px'/>
                            <Text
                                display='inline-block' 
                                maxWidth='300px'
                                minWidth='200px'
                            >
                                {`${'Rua Deputado Olices Pedra de Caldas'}, ${'480'}, ${'Dehon'} - ${'Tubarão / SC'}`}
                            </Text>
                            </ListItem>
                            <ListItem
                                color='#4F4F4F' 
                                fontSize='15px'
                                fontWeight='bold'
                                fontFamily={`'Ubuntu', sans-serif`}
                                display='flex'
                                alignItems='flex-start'
                                justifyContent='flex-start'
                            >
                                <ListIcon as={TimeIcon} height='25px' width='auto' color='#2AC28B' margin='0px 20px 0px 0px'/>
                                <Text
                                    display='inline-block'
                                    maxWidth='300px'
                                    minWidth='200px'
                                >
                                    {`${'Rua Deputado Olices Pedra de Caldas'}, ${'480'}, ${'Dehon'} - ${'Tubarão / SC'}`}
                                </Text>

                               </ListItem>
                        </List>
                        <Box>
                            <Text
                                textAlign='center'
                                color='#2AC28B'
                                fontWeight='bolder'
                                fontSize='18px'
                                margin='0px 0px 20px 0px'
                                fontFamily={`'Roboto', sans-serif`}
                            >
                                Este ponto de colheta recolhe
                            </Text>
                            <Box
                                border='2px solid #2AC28B'
                                padding='40px'
                                borderRadius='15px'
                            >
                                <UnorderedList 
                                    fontFamily={`'Roboto', sans-serif`} 
                                    spacing='15px'
                                    color='#2AC28B'
                                    fontSize='15px'
                                >
                                    <ListItem>Televisores</ListItem>
                                    <ListItem>Celulares</ListItem>
                                    <ListItem>Lampadas</ListItem>
                                    <ListItem>Camputadores</ListItem>
                                    <ListItem>Carregadores de celulares</ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>     
                    </Box>
                    <Divider />
                    <Box>
                        <Button
                            background='#34CB79'
                            leftIcon={<Image color='inherit' marginRight='10px' src={Wpp}/>}
                            color='#FFF'
                            padding='20px'
                            borderRadius='10px'
                            marginRight='20px'
                            width='200px'
                            float='left'
                            fontWeight='bolder'

                        >
                            WhatsApp
                        </Button>
                        <Button
                            background='#34CB79'
                            leftIcon={<Image color='inherit' marginRight='10px' src={Email}/>}
                            color='#FFF'
                            padding='20px'
                            width='200px'
                            borderRadius='10px'
                            float='left'
                            fontWeight='bolder'
                        >
                            E-mail
                        </Button>
                        <Button
                            background='#2F80ED'
                            leftIcon={<Image color='inherit' marginRight='10px' src={Local}/>}
                            color='#FFF'
                            padding='20px 40px'
                            borderRadius='10px'
                            float='right'
                            fontWeight='bolder'
                        >
                            Localizar
                        </Button>
                    </Box>
                </Stack>
            </Center>
        </Container>
    )
}


export default ComponentPerfil;