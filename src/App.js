import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import CustomComponent from './CustomComponent';
import TodoItem from './TodoItem';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoFunction = (params) => () =>
    params !== '' && setTodoList([...todoList, {task: params}]);

  const renderList = ({item}) => <TodoItem todo={item} />;

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.todoHeader}>
        <Text style={styles.todoText}>TODO</Text>
        <Text style={styles.todoCounter}>{todoList.length}</Text>
      </View>
      <View style={styles.taskContainer}>
        <FlatList
          testID="list"
          data={todoList}
          keyExtractor={(item, index) => String(index)}
          renderItem={renderList}
        />
        <CustomComponent addTodo={addTodoFunction} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  todoHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  todoText: {
    fontSize: 30,
    color: '#0171b9',
  },
  todoCounter: {
    fontSize: 30,
  },
  taskContainer: {
    flex: 20,
    justifyContent: 'space-between',
    margin: 15,
  },
});

export default App;
