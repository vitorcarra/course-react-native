import React from 'react-native'
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'

export default createDrawerNavigator({
    MegaSena: { 
        screen: () => <MegaSena numeros={6} />,
        navigationOptions: {title: 'Mega Sena'}
    }
}, {drawerWidth: 300 })