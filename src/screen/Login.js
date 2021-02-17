import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'

class Login extends React.Component {
    render() {
        return(
            <View style={styles.flex}>
              <View>
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>awokwok.</Text>
                </View>
                <View style={styles.content}>
                  <Text style={styles.contentTitle}>Let's sign you in</Text>
                  <View style={styles.contentSubtitleWrapper}>
                    <Text style={styles.contentSubtitle}>Welcome back,</Text>
                    <Text style={styles.contentSubtitle}>You've been missed!</Text>
                  </View>
                  <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#3B3B3F" />
                    <TextInput style={styles.input} placeholder="Passsword" placeholderTextColor="#3B3B3F" secureTextEntry/>
                  </View>
                </View>
              </View>
              <View style={styles.footer}>
                <TouchableOpacity style={styles.btnSignIn}>
                  <Text style={styles.btnSignInTxt}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
        )
    }
}

export default Login

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#191A1A',
    padding: 50,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  headerTitle: {
    color: '#2B71FF',
    fontSize: 35,
    fontWeight: '700'
  },
  content: {
    padding: 20,
    marginTop: 50,
  },
  contentTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700'
  },
  contentSubtitleWrapper: {
    marginTop: 15,
  },
  contentSubtitle: {
    color: '#777478',
    fontSize: 25,
  },
  form: {
    marginTop: 40
  },
  input: {
    color: '#fff',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#211E29',
    borderWidth: 2,
    borderColor: '#3B3B3F',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  footer: {
    padding: 20,
  },
  btnSignIn: {
    height: 60,
    backgroundColor: '#2B71FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnSignInTxt: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
})