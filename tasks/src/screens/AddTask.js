import React, { Component } from 'react'
import { Modal, 
         View, 
         StyleSheet, 
         TouchableWithoutFeedback, 
         Text,
         TouchableOpacity,
         TextInput,
         Platform } from 'react-native'

import commomStyles from '../commonStyles'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

const initialState = { desc: '', date: new Date(), showDatePicker: false }

export default class AddTask extends Component {

    state = {
        ...initialState
    }

    save = () => {
        const newTask = {
            desc: this.state.desc,
            date: this.state.date
        }

        if (this.props.onSave) {
            this.props.onSave(newTask)
            this.setState({ ...initialState })
        }
    }

    getDateTimePicker = () => {
        let datePicker= <DateTimePicker 
                            value={this.state.date} 
                            onChange={ (_, date) => this.setState({ date, showDatePicker: false }) } 
                            mode='date'   />

        const dateString = moment(this.state.date).format('ddd, DD/MM/YYYY')
        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={ () => this.setState({ showDatePicker: true }) }>
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            )
        }

        return datePicker
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType='slide'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.backgroud}>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput style={styles.input} placeholder="Informe o títula da tarefa" 
                                                    value={this.state.desc} 
                                                    onChangeText={desc => this.setState({ desc })} />
                    {this.getDateTimePicker()}
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={this.props.onCancel}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this.save}>
                            <Text>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.backgroud}>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container: {
        backgroundColor: '#FFF'
    },
    header: {
        fontFamily: commomStyles.fontFamily,
        backgroundColor: commomStyles.colors.today,
        textAlign: 'center',
        color: commomStyles.colors.secondary,
        fontSize: 20,
        padding: 15
    },
    input: {
        fontFamily: commomStyles.fontFamily,
        height: 50,
        margin: 15,
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderColor: '#E3E3E3',
        borderRadius: 6,
        fontSize: 22
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        margin: 15,
        marginRight: 20,
        color: commomStyles.colors.today
    },
    date: {
        fontFamily: commomStyles.fontFamily,
        fontSize: 20,
        marginLeft: 15
    }
})