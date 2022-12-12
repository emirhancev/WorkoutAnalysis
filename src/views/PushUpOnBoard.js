import { Text, View,StyleSheet,Image} from 'react-native'
import React, { Component } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import COLORS from '../consts/colors';

const slides = [
  {
    key: 'one',
    title: 'STEP-1',
    text: 'Get down on all fours, placing your hands slightly wider than your shoulders.Straighten your arms and legs.',
    image: require('../assets/pushup1.png'),
  },
  {
    key: 'two',
    title: 'STEP-2',
    text: 'Lower your body until your chest nearly touches the floor.',
    image: require('../assets/pushup2.png'),
  },
  {
    key: 'three',
    title: 'STEP-3',
    text: 'Push yourself back up.',
    image: require('../assets/pushup1.png'),
  }
];


export default class PushUpOnBoard extends Component {
    _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    _onDone = () => {
        this.setState({ showRealApp: true });
        this.props.navigation.navigate('OnBoardScreen');
    }
    render() {
        
        return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
}

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.orange,
    },
    image: {
      width: 320,
      height: 320,
      marginVertical: 20,
      borderRadius:40
    },
    text: {
      color: 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
      fontSize:18
    },
    title: {
      fontSize: 22,
      color: 'white',
      textAlign: 'center',
      fontWeight:'bold'
    },
  });