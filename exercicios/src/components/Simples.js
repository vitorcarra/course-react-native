import React from 'react'
import { Text } from 'react-native'
import Default from '../style/Default'

/* Sem User Arrow
export default function(props) {
    return <Text>{props.texto}</Text>
}
*/

/* 
Formato Arrow 


## Retornando APENAS UM COMPONENTE. O comum é retornar 1 container <VIEW> com os componentes dentro
# 1
export default props => <Text>{props.texto}</Text>

# 2
export default props => {
    return <Text>{props.texto}</Text>
}

## Retornando mais de um componente - USAR ARRAY
export default props => [
    <Text>{props.texto}</Text>,
    <Text>{props.texto}</Text>
]
*/


export default props =>
    <Text style={[Default.ex]}>Arrow 1: {props.texto}</Text>