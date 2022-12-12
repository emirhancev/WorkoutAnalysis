import React from "react";
import { Text,StyleSheet, View, ImageBackground, StatusBar, TouchableOpacity,Image } from 'react-native';
import COLORS from '../consts/colors';

const OnBoardScreen = ({navigation}) => {
    return (
      <View style={{flex:1}}>
          <StatusBar translucent={false} backgroundColor={COLORS.orange}/>
          <ImageBackground 
            style={{flex:1}}
            source={require('../assets/background.jpg')}>
            <View style={style.Logo}>
              <Image style={{width:150,height:150}} source={require('../assets/logo.png')}/>
            </View>
            <View style={style.BoardText}>
              <Text style={{color:COLORS.light,fontSize:30,fontWeight:'bold'}}>Workout Analysis</Text>
              <Text style={{color:COLORS.light,lineHeight:20,marginTop:20,fontSize:15}}>
                  Capture the correct forms {'\n'} of movements with {'\n'} AI algorithm-supported {'\n'} Workout Analysis.</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                <View style={style.BoardBtn}>
                    <Text style={{fontWeight:'bold',color:'black',fontSize:15}}>Get Started</Text>
                </View>
              </TouchableOpacity>       
            </View>
          </ImageBackground>
      </View>
    );
};

export default OnBoardScreen;

const style=StyleSheet.create({
  Logo:{
    alignItems:'center',
  },
  BoardText:{
      height:'42%',
      bottom:0,
      position:'absolute',
      paddingHorizontal:19,
  },
  BoardBtn:{
      height:55,
      width:110,
      backgroundColor:'#BD8312',
      marginTop:50,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',

  }
});