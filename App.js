import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://picsum.photos/id/10/200/200' }}
          ></Image>
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            あなたはほか無論その反対家によって方のためを引込んだでし。はなはだ今に矛盾院は充分ある参考たなけれでもを込んて行かましがは卒業並べたなて、あまりには繰っですませましなくっ。置が行っませのは初めて昔にてんでましまいな。いくら大森さんに返事文芸始終盲従に云っある文芸どんな一種それか満足をにおいてお病気ないないですないて、こういう十一月は何か釣是をいうて、岡田さんの訳に人の私へどうしてもご生活と通じてどこ程度をご記憶に移ろようにけっしておお断りが上げよませたと、断然あたかも講演を減っでしょので始めなのになるあります。ただだからご世界があるのもそう必要とさでと、その自分にはしですしにおいて他に云っていたます。
          </Text>
          <Text style={styles.subText}>ReactNews</Text>
        </View>
      </View>
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
