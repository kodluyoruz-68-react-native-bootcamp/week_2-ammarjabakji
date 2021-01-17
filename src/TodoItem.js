import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function TodoItem({todo, deleleTodo, onToggle}) {
  return (
    <TouchableOpacity
      testID="button"
      style={styles[todo.isDone ? 'inActive' : 'active']}
      onPress={onToggle(todo.id)}
      onLongPress={deleleTodo(todo.id)}>
      <Text style={styles[todo.isDone ? 'textDone' : 'text']}>{todo.task}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  active: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
    backgroundColor: '#0171b9',
  },
  inActive: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
    backgroundColor: '#64a8d4',
  },
  text: {color: '#fff'},
  textDone: {
    color: '#fff',
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
