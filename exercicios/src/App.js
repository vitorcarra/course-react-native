import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'

/* Aqui é o obrigado o uso de chaves porque em Multi não retornamos o Inverter como default -- export default */
/* Quando exportamos por padrão (export default props => ...) não devemos usar {}. APENAS UMA FUNÇÃO PODE SER EXPORTADA COMO DEFAULT */
import { Inverter, MegaSena } from './components/Multi'
import { TextoSincronizado } from './components/ComunicacaoIndireta'
import ListFlex from './components/ListFlex'

/* Há 2 tipos de componentes: baseado em class ou function */

/* Componente em formato de Class */
//export default class App extends Component {
//    render() {
//        /* função para renderizar esse component */
//        /* retorna trecho de código JSX - linguagem de marcação convertida para os componentes nativos de cada plataforma */
//        return (
//            <View style={styles.container}>
//                <Simples texto='Flexível!!'></Simples>
//                <ParImpar number={33} />
//                <Inverter texto='React Nativo!' />
//                <MegaSena numbers={6} />
//            </View>
//        )
//
//    }
//}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="MegaSena">
                <Drawer.Screen
                    name="MegaSena" 
                    component={MegaSena}
                    options={{ title: 'Mega Sena' }}
                />
                <Drawer.Screen
                    name="Simples" 
                    component={Simples}
                    options={{title: 'Simples'}}
                    
                />
                <Drawer.Screen
                    name="Indireta" 
                    component={TextoSincronizado}
                    options={{ title: 'Indireta' }}
                />
                <Drawer.Screen
                    name="ListFlex" 
                    component={ListFlex}
                    options={{ title: 'Lista Flex' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
  }


/* Styles são baseados fortemente FlaxBox */
const styles = StyleSheet.create({
    /* Sempre criado em formato chave:valor - a chave é o nome e o valor são as propriedades */

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    f20: {
        flex: 1,
        fontSize: 20
    }
})