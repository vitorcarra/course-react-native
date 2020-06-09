import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'

/* Aqui é o obrigado o uso de chaves porque em Multi não retornamos o Inverter como default -- export default */
/* Quando exportamos por padrão (export default props => ...) não devemos usar {}. APENAS UMA FUNÇÃO PODE SER EXPORTADA COMO DEFAULT */
import { Inverter, MegaSena } from './components/Multi'

/* Há 2 tipos de componentes: baseado em class ou function */

/* Componente em formato de Class */
export default class App extends Component {
    render() {
        /* função para renderizar esse component */
        /* retorna trecho de código JSX - linguagem de marcação convertida para os componentes nativos de cada plataforma */
        return (
            <View style={styles.container}>
                <Simples texto='Flexível!!'></Simples>
                <ParImpar number={33} />
                <Inverter texto='React Nativo!' />
                <MegaSena numbers={6} />
            </View>
        )

    }
}


/* Styles são baseados fortemente FlaxBox */
const styles = StyleSheet.create({
    /* Sempre criado em formato chave:valor - a chave é o nome e o valor são as propriedades */

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})