import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TodoItem({todo}) {
  return (
    <View style={styles.container}>
      <Text style={styles.task}>{todo.task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
    backgroundColor: '#0171b9',
  },
  task: {
    color: '#fff',
  },
});

export default TodoItem;
