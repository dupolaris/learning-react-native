import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {
const [name, setname] = useState('Dawood');
const [person, setPerson] = useState({position: '', age: ''})

const clickHandler = () => {
  setname('Intern of Blue Aware');
  setPerson({position: 'React-Native dev', age: 'aged 22'});

}

  return (
    <View style={styles.container}>
      <Text style={styles.userText}>User is {name}</Text>
      <Text style={styles.userText}>{person.position} {person.age}</Text>
      <View style={styles.userInfoButton}>
      <Button title='Click for user info' onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    borderWidth: 2,
    borderColor: '#777',
    borderRadius: 12,
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userInfoButton: {
    margin: 16,
  }
});
