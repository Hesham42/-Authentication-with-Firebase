/* eslint-disable no-undef */
import React from 'react';

import { Text, View } from 'react-native';

const Header = (props) => (
<View style={styles.viewStyle}>
<Text style={styles.textStyle}> {props.headerText} </Text>
</View>
);
const styles = {
 viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 4,

 },   
textStyle: {
    fontSize: 20,
}
};
export { Header };
