import React from 'react'
import { Text } from 'react-native'
import Default from '../style/Default'

/* função Arrow não tem nome. Então devemos armazenar em uma constante quando a mesma precisa ser exportada */
export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return <Text style={Default.ex}>{inv}</Text>
}

export const MegaSena = props => {
    const [min, max] = [1, 60]
    const numeros = Array(props.numbers || 6).fill(0) // caso não passe um valor, o padrão será 6

    for (let i = 0; i < numeros.length; i++) {
        let novo = 0

        // garantir que o numero gerado não está no array
        while (numeros.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }

        numeros[i] = novo
    }

    numeros.sort((a,b) => a - b)
    return <Text style={Default.ex}>{numeros.join(', ')}</Text>
}