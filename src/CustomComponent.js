import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function CustomComponent({addTodo}) {
  const [task, setTask] = useState('');
  const handleAddTodo = () => {
    task && addTodo(task);
    setTask('');
  };

  return (
    <View style={styles.inputConatiner}>
      <TextInput
        style={styles.input}
        testID="input"
        value={task}
        placeholder="Type something to do .."
        onChangeText={(value) => setTask(value)}
      />
      <TouchableOpacity
        style={styles.button}
        testID="button"
        onPress={handleAddTodo}>
        <Text style={styles.buttonText}>ADD TODO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputConatiner: {
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  input: {
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#eee',
    margin: 10,
  },
  buttonText: {
    alignSelf: 'center',
    padding: 10,
    margin: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0171b9',
  },
});

export default CustomComponent;
