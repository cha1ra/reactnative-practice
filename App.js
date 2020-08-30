import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ListItem from './components/ListItem'

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        author="SampleNews"
        imageUrl="https://picsum.photos/id/10/200/200"
        title="なたはほか無論その反対家によって方のためを引込んだでし。はなはだ今に矛盾院は充分ある参考たなけれでもを込んて"
      />
      <ListItem
        author="SampleNews"
        imageUrl="https://picsum.photos/id/9/200/200"
        title="引込んだでし。はなはだ今に矛盾院は充分ある参考たなけれでもを込んて"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    // こいつが横並びにするのに必要
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    // flexDirection: 'column' がデフォルト
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
})
