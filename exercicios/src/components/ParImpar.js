/* Renderização Condicional */
import React from 'react'
import { View, Text } from 'react-native'
import Default from '../style/Default'

function parOuImpar(num) {
    // if (num % 2 == 0){
    //     return <Text style={Default.ex}>Par</Text>
    // } else {
    //     return <Text style={Default.ex}>Impar</Text>
    // }

    const v = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={[Default.ex]}>{v}</Text>
}

export default props => 
    /* Método 1 
    <View>
        
        {
            props.number % 2 == 0
            ? <Text style={Default.ex}>Par</Text>
            : <Text style={Default.ex}>Impar</Text>
        }
    </View>
    */

    /* Método 2 */
    <View>
        {parOuImpar(props.number)}
    </View>
