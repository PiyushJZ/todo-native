import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  Switch,
} from 'react-native';
import styles from './styles';

let id = 0;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: '',
    };
  }
  render() {
    return (
      <View style={styles.bar}>
        <Text style={styles.heading}>ToDo App</Text>
        <Text style={[styles.box, styles.blue]}>Total Tasks: {this.state.tasks.length} </Text>
        <Text style={[styles.box, styles.red]}>
          Unchecked Tasks:{' '}
          {this.state.tasks.filter(todo => !todo.checked).length}
        </Text>
        <TextInput
          value={this.state.input}
          placeholder="Task Name"
          style={[styles.box, styles.inputBox]}
          onChangeText={text => this.setState({ input: text })}
        />
        <View style={styles.button}>
        <Button
          title="Add Task"
          onPress={() => this.addTodo()}
        />
        </View>
        <ScrollView>
          {this.state.tasks.map(task => (
            <Task
              onToggle={() => this.toggleTodo(task.id)}
              onDelete={() => this.deleteTodo(task.id)}
              task={task}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  addTodo() {
    // add a new task.
    const text = this.state.input;
    this.setState({
      tasks: [...this.state.tasks, { id: id++, text: text, checked: false }],
      input: '',
    });
  }

  deleteTodo(id) {
    // delete the task
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id),
    });
  }

  toggleTodo(id) {
    // change the status of the task.
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id !== id) return task;
        return {
          id: task.id,
          text: task.text,
          checked: !task.checked,
        };
      }),
    });
  }
}

function Task(props) {
  return (
    <View style={[styles.task]}>
      <Switch
        onValueChange={props.onToggle}
        value={props.task.checked}
        style={{ flex: 1 }}
      />
      <Text style={{ flex: 6}}>{props.task.text}</Text>
      <Button style={{ flex: 1}} onPress={props.onDelete} title="Delete" />
    </View>
  );
}
