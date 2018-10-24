import React from 'react';
import {  StyleSheet } from 'react-native';

const ItemStyles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: 5,
    },
    teamInfo:{
        marginRight: 10,
        marginLeft: 10,
        justifyContent:'center',
    },
    teamImage:{
        width: 70,
        height:70,
        resizeMode:'cover',
        borderRadius: 2,
        padding: 5,
        margin: 5,
    },
    teamName:{
        fontSize: 24,
        fontWeight: '200',
    },
    teamDescription:{
        fontSize:10,
        margin: 5,
    }

});

export default ItemStyles;
