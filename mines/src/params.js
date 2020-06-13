import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 4,
    fontSize: 15,
    headerRatio: 0.15, // Proporção do painel superior na tela
    difficultLevel: 0.1, // facil = 10%, medio = 20% , dificil = 30% dos campos com bomba
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params