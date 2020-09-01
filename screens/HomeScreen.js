import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import ListItem from '../components/ListItem'
import Loading from '../components/Loading'
import Constants from 'expo-constants'
import axios from 'axios'

const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`

export default HomeScreen = (props) => {
  const { navigation } = props
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  // 第２引数に空配列を渡すと最初だけ実行する
  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    setLoading(true)
    try {
      const response = await axios.get(URL)
      setArticles(response.data.articles)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() =>
              navigation.navigate('Article', {
                article: item,
              })
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {loading && <Loading />}
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
