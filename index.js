import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const randomNumber = (Min = 0, Max = 100) => {
    return (
        Math.round(Math.random() * (Max - Min) + Max)
    )
}

export default randomNumber;

const styles = StyleSheet.create({})