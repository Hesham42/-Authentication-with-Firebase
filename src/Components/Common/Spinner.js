import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View } from 'react-native';

const Spinner = ({ size }) => (
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={size || 'large'} color="#0000ff" />
        </View>
    );

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  });

export { Spinner };
