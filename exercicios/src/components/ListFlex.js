import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    {id: 1, nome: "João", nota: 7.9},
    {id: 2, nome: "Ana", nota: 9.1},
    {id: 3, nome: "Rafaela", nota: 5.4},
    {id: 4, nome: "Fernando", nota: 7.6},
    {id: 5, nome: "Julia", nota: 6.8},
    {id: 6, nome: "Rafael", nota: 9.9},
    {id: 7, nome: "Roberto", nota: 10},
    {id: 8, nome: "Rebeca", nota: 8.8},
    {id: 9, nome: "Tobias", nota: 8.8},

    {id: 10, nome: "João", nota: 7.9},
    {id: 11, nome: "Ana", nota: 9.1},
    {id: 12, nome: "Rafaela", nota: 5.4},
    {id: 13, nome: "Fernando", nota: 7.6},
    {id: 14, nome: "Julia", nota: 6.8},
    {id: 15, nome: "Rafael", nota: 9.9},
    {id: 16, nome: "Roberto", nota: 10},
    {id: 17, nome: "Rebeca", nota: 8.8},
    {id: 18, nome: "Tobias", nota: 8.8}
]

const itemStyle = {
    paddingHorizonal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // Flex
    alignItems: 'center',
    //justifyContent: 'space-around'
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'flex-end',
}

export const Aluno = props =>
    <View style={itemStyle}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList 
                data={alunos}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
        </ScrollView>

    )
}