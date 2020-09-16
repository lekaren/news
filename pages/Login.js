import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import * as userApi from "../api/user";

function Login () {
  const [isClick, setIsClick] = useState(false);
  const [userInfo, setUserInfo] = useState({
      email: '',
      password: ''
  });

  const loginAction = async() => {
    setIsClick(true);


    if (userInfo.email && userInfo.password){
        
        const users = await userApi.getUsers();
        const matchData = users.filter((user) => {
            return user.email === userInfo.email && user.password === userInfo.password
        });

        if (matchData.length){
            Alert.alert('성공', '로그인이 완료되었습니다.');
        } else {
            Alert.alert('실패', '일치하는 사용자 정보가 없습니다.');
        }
     }
  };
  
  return (
      <>
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.png')}
        style={{ width: 70, height: 70 }}
      />
      <Text style={{ padding: 30 }}>Welcome to my app</Text>
    </View>
    <View style={styles.container}>
        <Text style={styles.text}>이메일</Text>
        <TextInput
            style={styles.textBox}
            placeholder="Email"
            placeholderTextColor='#ffffff'
            selectionColor='#fff'
            keyboardType='email-address'
            onChangeText={(text) => setUserInfo({ ...userInfo, email: text})}
        />
        { isClick && userInfo.email === ''
        ?
        <Text style={{ color: 'red', marginTop: 5}}>Email을 입력해주세요</Text>
        :
        null
        }
        <Text style={styles.text}>Password</Text>
        <TextInput 
          style={styles.textBox}
          placeholder='Password'
          placeholderTextColor='#ffffff'
          selectionColor='#fff'
          onChangeText={(text) => setUserInfo({ ...userInfo, password: text})}
          secureTextEntry
        />
        { isClick && userInfo.password === ''
        ?
        <Text style={{ color: 'red', marginTop: 5}}>password를 입력해주세요</Text>
        :
        null
        }
        <TouchableOpacity style={styles.button} onPress={loginAction}>
            <Text style={styles.buttonText}>Login</Text></TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    logocontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBox: {
        backgroundColor:'silver',
        width: 300,
        height: 50,
        borderRadius: 25,
        paddingLeft: 30,
        paddingRight: 30,
        color: '#ffffff'
    },
    text: {
        width:300, 
        fontWeight: '700', 
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 16
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: '#1c313a',
        marginVertical:10,
        borderRadius: 25
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '900',
        marginTop: 15
    }
});

export default Login;