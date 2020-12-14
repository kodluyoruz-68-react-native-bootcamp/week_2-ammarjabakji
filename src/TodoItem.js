import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function TodoItem({todo}) {
  const [active, setActive] = useState(true);
  const activeFunction = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <TouchableOpacity
      style={styles[active ? 'active' : 'inActive']}
      onPress={() => activeFunction()}>
      <Text style={styles.task}>{todo.task}</Text>
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
  task: {
    color: '#fff',
  },
});

export default TodoItem;
