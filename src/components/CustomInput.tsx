import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

type Props = {
  placeholder: string;
};

const CustomInput = ({ placeholder }: Props) => {
  return (
    <View style={styles.input}>
      <Text style={styles.text}>{placeholder}</Text>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  text: {
    color: colors.textLight,
    fontSize: 14,
  },
});