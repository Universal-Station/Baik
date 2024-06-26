import React from 'react';
import {TextInput} from 'react-native';
import { darkGreen, gray } from '../components/Constants';


const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, borderWidth:1, borderColor:darkGreen, height:35, border:1, paddingHorizontal: 10, width: '75%',  marginVertical: 5}}
      placeholderTextColor={gray}></TextInput>
  );
};

export default Field;