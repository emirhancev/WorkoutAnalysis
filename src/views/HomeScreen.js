import React, {Component} from 'react';
import COLORS from '../consts/colors';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    };      
  }

  componentDidMount() {
    var data = [
      {
        name: 'CRUNCH',
        img: require('../assets/crunch.png'),
        description:
          'The crunch is a classic core exercise. It specifically trains your abdominal muscles, which are part of your core.',
        address:
          'CrunchOnBoard'
      },
      {
        name: 'PUSH-UP',
        img: require('../assets/pushup.png'),
        description:
          'Pushups are a simple and effective bodyweight movement that can help increase strength in your upper body and core.',
        address:
          'PushUpOnBoard'
      },
      {
        name: 'SQUAT',
        img: require('../assets/squat.png'),
        description:
          'Squats are an effective exercise that can help you build your leg and lower body muscles.',
        address:
          'SquatOnBoard'
      },
  
    ];

    this.setState({
      dataBackup: data,
      dataSource: data,
    });
  }

  filterItem = event => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == '') {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter(l => l.name.toLowerCase().match(query));

      this.setState({
        dataSource: data,
      });
    }
  };

  separator = () => {
    return (
      <View style={{height: 10, width: '100%', backgroundColor: '#253439'}} />
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <StatusBar translucent={false} backgroundColor={COLORS.orange} />
        <View style={styles.header}>       
          <TextInput
            placeholder="Enter the name of the move"
            placeholderTextColor="gray"
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            style={styles.input}
          />
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={() => this.separator()}
          renderItem={({item, index}) => {
            return (            
                <View style={styles.bookContainer}>
                  <TouchableOpacity onPress={()=>navigate(item.address)}>    
                    <View style={styles.bookContainer2}>                
                          <Image style={styles.image} source={item.img} />
                          <View style={styles.dataContainer}>
                              <Text numberOfLines={1} style={styles.title}>
                                  {item.name}
                              </Text>
                              <Text numberOfLines={4} style={styles.description}>
                                  {item.description}
                              </Text>                   
                          </View>                
                    </View>
                  </TouchableOpacity>   
                </View>                 
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#253439'
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: '#253439',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
  },

  bookContainer: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor:'#253439'

  },

  bookContainer2: {
    flexDirection: 'row',
    borderRadius:20,
    backgroundColor:COLORS.orange,
  },

  image: {
    height: 150,
    width: 120,
    borderRadius:20
  },
  dataContainer: {
    padding: 10,
    paddingTop: 5,
    width: width - 132,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  description: {
    fontSize: 17,
    color:COLORS.white
  },
 
});