import React from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet,
   Image,
} from 'react-native'

class Home extends React.Component {
  render() {
    return(
      <View style={styles.flex}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>awokwok.</Text>
        </View>
        <View style={styles.topMenu}>
          <TouchableOpacity>
            <Text style={styles.textMenuActive}>For You</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textMenu}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textMenu}>Folllowing</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.feedWrapper}>
          <View style={styles.feed}>
            <View style={styles.feedHeader}>
              <View style={styles.avaWrapper}>
                <Image source={{uri: imgAva}} style={styles.ava}/>
              </View>
              <View>
                <Text style={styles.txtName}>Samantha</Text>
                <Text style={styles.txtRank}>Legend</Text>
              </View>
            </View>
            <View style={styles.feedContent}>
              <Image style={styles.imgContent}/>
            </View>
            <View style={styles.feedFooter}>
              <Text style={styles.feedDesc}>My first post</Text>
              <View style={styles.feedFooterInfo}>
                <View style={styles.feedAction}>
                  <View style={styles.like}>
                    <Text style={styles.likeIcon}>L</Text>
                    <Text style={styles.likeTxt}>12.678</Text>
                  </View>
                  <View style={styles.comment}>
                    <Text style={styles.commentIcon}>C</Text>
                    <Text style={styles.commentTxt}>357</Text>
                  </View>
                </View>
                <Text style={styles.feedTime}>3 hours ago</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#191A1A',
  },
  header: {
    marginTop: 50,
    alignItems: 'center'
  },
  headerTitle: {
    color: '#2B71FF',
    fontSize: 20,
    fontWeight: '700'
  },
  topMenu: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
  textMenuActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
  textMenu: {
    color: '#777478',
    fontWeight: 'bold',
    fontSize: 15
  },
  feedWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  feed: {
    marginBottom: 15,
  },
  feedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avaWrapper: {
    marginRight: 10,
  },
  ava: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#2B71FF'
  },
  txtName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
  txtRank: {
    color: '#777478'
  },
  feedContent: {
    marginVertical: 10,
  },
  imgContent: {
    backgroundColor: '#fff',
    height: 200,
    borderRadius: 10,
  },
  feedDesc: {
    color: '#fff',
    fontWeight: 'bold'
  },
  feedFooterInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  feedTime: {
    color: '#777478',
  },
  feedAction: {
    flexDirection: 'row'
  },
  like: {
    marginRight: 15,
    flexDirection: 'row'
  },
  likeIcon: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5
  },
  likeTxt: {
    color: '#fff'
  },
  comment: {
    flexDirection: 'row'
  },
  commentIcon: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5,
  },
  commentTxt: {
    color: '#fff',
  }
})

const imgAva = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/1831E/production/_116820199_elonmusk.jpg'