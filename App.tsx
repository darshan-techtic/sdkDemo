//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {multiply} from 'rn-multiplication';

const MyComponent = () => {
  useEffect(() => {}, []);

  const result: number = multiply(10, 10);

  return (
    <View style={styles.container}>
      <Text>Multiplication: {result}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default MyComponent;
