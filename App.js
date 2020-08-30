import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import ListItem from './components/ListItem'
import dummyArticles from './dummies/articles.json'

export default function App() {
  const [articles, setArticles] = useState([])
  // 第２引数に空配列を渡すと最初だけ実行する
  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(dummyArticles)
    }, 2000)
    // クリーンナップ関数
    return () => clearTimeout(timer)
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
