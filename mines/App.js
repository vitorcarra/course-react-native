import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';

import params from './src/params'
import MineField from './src/components/MineField'
import { 
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/functions'

import Header from './src/components/Header'

import LevelSelection from './src/screens/LevelSelection'


export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmout = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmout()),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  onOpenField = (row, column) => {
    const clonedBoard = cloneBoard(this.state.board)
    openField(clonedBoard, row, column)
    const lost = hadExplosion(clonedBoard)
    const won = wonGame(clonedBoard)

    if (lost) {
      showMines(clonedBoard)
      Alert.alert('Perdeu!')
    }
    else if (won){
      Alert.alert('Parabéns', 'Você venceu!')
    }

    this.setState({ board: clonedBoard, lost, won} )
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)

    const won = wonGame(board)

    if (won){
      Alert.alert('Parabéns!', 'Você venceu!')
    }

    this.setState({board, won})
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render () {
    return (
        <View style={styles.container}>
          <LevelSelection isVisible={this.state.showLevelSelection} onLevelSelected={this.onLevelSelected} onCancel={() => this.setState({showLevelSelection: false})}></LevelSelection>
          <Header flagsLeft={this.minesAmout() - flagsUsed(this.state.board)} onNewGame={() => this.setState(this.createState())} 
            onFlagPress={() => this.setState({showLevelSelection: true})}></Header>
          <View style={styles.board}>
            <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField}/>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
