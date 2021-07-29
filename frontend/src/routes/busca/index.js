import React,{useState} from 'react';
import { 
    Container, 
    Input,
    FormControl,
    FormLabel,
    Box,
    Stack,
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
 } from "@chakra-ui/react"

import {ArrowBackIcon,SearchIcon} from "@chakra-ui/icons"

import ImagemLampadas from '../cadastro/imgs/lampadas.svg';
import ImagemPilhas from '../cadastro/imgs/baterias.svg';
import ImagemEletronicos from '../cadastro/imgs/eletronicos.svg';
import ListaLocalizacao from './imgs/localizacao.svg';
import ListaTempo from './imgs/relogio.svg';


const dadosFake = [
    {
        nome:'Loja Amaral Junior',
        horarios: 'Aberto das 08:00 as 12:00 ate 13:00 as 18:00',
        localizacao:{
            endereco: 'Rua Antonio Manuel dos Santos',
            numero: 393,
            bairro: 'Cacador',
            cidade: 'Capivari de Baixo'
        },
        codModalidades:[1,2,3]
    },
    {
        nome:'Giassi',
        horarios: 'Aberto das 08:00 as 12:00 ate 13:00 as 18:00',
        localizacao:{
            endereco: 'Pasto do Gado',
            numero: 393,
            bairro: 'Andrino',
            cidade: 'Tubarao'
        },
        codModalidades:[1,2,3]
    },
    {
        nome:'Americanas',
        horarios: 'Aberto das 08:00 as 12:00 ate 13:00 as 18:00',
        localizacao:{
            endereco: 'Giassi',
            numero: 393,
            bairro: 'centro',
            cidade: 'tubarao'
        },
        codModalidades:[1,2,3]
    }
]

function ComponentCardsPesquisa({data}){
    return (
        <Stack
            width='calc(50% - 100px)'
            background='red'
            direction='column'
            spacing='25px'
            margin='20px'
            padding='10px'
            background='#F2F2F2'
            border='2px solid #2AC28B'
            borderRadius='10px'
            cursor='pointer'
        >
            <Text 
                fontWeight='bolder'
                fontFamily={`'Roboto', sans-serif`}
                color='#43199C'
                align='center'
                fontSize='15px'
            >
                {data.nome}
            </Text>
            <List spacing='20px'>
                <ListItem
                    display='flex'
                    alignItems='center'
                    textAlign='left'
                    fontFamily={`'Roboto', sans-serif`}
                    color='#43199C'
                    fontSize='12px'
                >
                    <Image 
                        margin='0px 10px 0px 0px'
                        src={ListaTempo}
                    />
                    {data.horarios}
                </ListItem>
                <ListItem
                    display='flex'
                    alignItems='center'
                    textAlign='left'
                    fontFamily={`'Roboto', sans-serif`}
                    color='#43199C'
                    fontSize='12px'
                >
                    <Image 
                        src={ListaLocalizacao}
                        margin='0px 10px 0px 0px'
                    />
                    {`${data.localizacao.endereco}, `} 
                    {`${data.localizacao.bairro}, `}
                    {`${data.localizacao.numero}, `}
                    {`${data.localizacao.cidade}`}

                </ListItem>
            </List>
            <Center>
                <Stack direction='row' spacing='25px'>
                    <Image maxHeight='50px' width='auto' src={ImagemEletronicos}/>
                    <Image maxHeight='50px' width='auto' src={ImagemLampadas}/>
                    <Image maxHeight='50px' width='auto' src={ImagemPilhas}/>
                </Stack>
            </Center>
        </Stack>
    )
}



export function ComponentBusca(props){

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
                    Procura de pontos
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
                        fontSize='35px'
                        textAlign='center'
                        as="h1"
                        fontFamily={`'Ubuntu', sans-serif`}
                        color='#2AC28B'
                        padding='20px'

                >
                        Procura de pontos
                </Heading>
                <Stack
                    width='900px'
                    direction='column'
                    spacing='25px'
                >
                    <Box>
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            margin='0px 0px 30px 0px'
                        >
                            <Text
                                fontSize='25px'
                                color='#322153'
                                fontFamily={`'Ubuntu', sans-serif`}
                                fontWeight='bolder'
                            >
                                Endereço
                            </Text>
                            <Text
                                fontSize='15px'
                                color='#6C6C80'
                                fontFamily={`'Roboto', sans-serif`}
                            >
                                Procure por sua cidade
                            </Text>
                        </Box>
                        <Box>
                            <Stack
                                width='100%'
                                direction='row'
                                spacing='35px'      
                            >
                                <Input 
                                    width='calc(40% - 35px)'
                                    boxSizing='border-box'
                                    padding='15px'
                                    border='2px solid #2AC28B'
                                    borderRadius='10px'
                                    boxShadow='0px 2px 5px 0px rgb(150,150,150)'
                                    placeholder='Cidade'
                                />
                                <Input 
                                    width='calc(40% - 35px)'
                                    boxSizing='border-box'
                                    padding='15px'
                                    border='2px solid #2AC28B'
                                    borderRadius='10px'
                                    boxShadow='0px 2px 5px 0px rgb(150,150,150)'
                                    placeholder='Ex: ...Bairro, Rua, Numero, Complemento'
                                />
                                <InputGroup width='20%'>
                                    <InputRightElement
                                        height='100%'
                                        children={
                                            <IconButton
                                                background='#2AC28B'
                                                color='#FFF'
                                                padding= '5px'
                                                right='10px'
                                                borderRadius='5px'
                                                cursor='pointer'
                                            >
                                                <SearchIcon height='20px' width='auto'/>
                                            </IconButton>
                                        } 
                                    />
                                    <Input 
                                        variant="outline" 
                                        type='text'
                                        width='100%'
                                        boxSizing='border-box'
                                        padding='15px'
                                        border='2px solid #2AC28B'
                                        borderRadius='10px'
                                        boxShadow='0px 2px 5px 0px rgb(150,150,150)'
                                        placeholder='CEP'
                                    />
                                </InputGroup>
                            </Stack>
                        </Box>
                    </Box>
                    <Box 
                        display='flex'
                        justifyContent='space-between'
                        alignItems='flex-end'
                    >
                        <FormControl width='80%'>
                            <FormLabel
                                fontSize='15px'
                                color='#6C6C80'
                                fontFamily={`'Roboto', sans-serif`}
                                margin='0px 0px 10px 0px'
                            >
                                Nome do ponto de coleta
                            </FormLabel>
                            <InputGroup>
                                <InputRightElement
                                    height='100%'
                                    color='#2AC28B'
                                    children={<SearchIcon marginRight='15px' height='20px' width='auto'/>} 
                                />
                                <Input 
                                    variant="outline" 
                                    type='text'
                                    background='#F0F0F5'
                                    width='100%'
                                    borderRadius='15px'
                                    padding='15px 50px 15px 15px'
                                    border='2px solid transparent'
                                    boxSizing='border-box'
                                />
                            </InputGroup>
                        </FormControl>
                        <Button 
                            maxWidth='20%'
                            fontSize='20px'
                            padding='15px 25px'
                            background='#2AC28B'
                            fontWeight='bolder'
                            color='#FFF'
                            boxShadow='0px 2px 2px 0px rgb(150,150,150)'
                            borderRadius='5px'
                            rightIcon={<Spinner marginLeft='10px' width='18px' height='18px' />}
                            className='button-submit'
                        >
                            Buscar
                        </Button>
                    </Box>
                    <Box>
                        <Text
                            margin='50px 0px 25px 0px'
                            fontSize='25px'
                            color='#322153'
                            fontFamily={`'Ubuntu', sans-serif`}
                            fontWeight='bolder'
                        >
                            Resultado(s) encontrado(s)
                        </Text>
                        <Box
                            padding='40px'
                            border='1px solid #d5f6ea'
                            borderRadius='10px'
                        >
                            <Box
                                display='flex'
                                flexDirection='row'
                                alignItems='center'
                                justifyContent='center'
                                flexWrap='wrap'
                            >
                                {dadosFake.map(el =>{
                                    return (
                                        <ComponentCardsPesquisa
                                            data={el}
                                        />
                                    )
                                })}
                            </Box>

                            <Stack
                                direction='column'
                                spacing='15px'
                                margin='100px 0px 0px 0px'
                            >
                                <Text
                                    fontSize='15px'
                                    color='#6C6C80'
                                    fontFamily={`'Roboto', sans-serif`}
                                >
                                    Localização
                                </Text>
                                <AspectRatio  height='auto'>
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224450.92494095035!2d-49.18201722145378!3d-28.478170264824826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952142efba29114d%3A0xb811c0e3c0044343!2sTubar%C3%A3o%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1626543760241!5m2!1spt-BR!2sbr" 
                                    />
                                </AspectRatio>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
            </Center>
        </Container>
    )
}


export default ComponentBusca;