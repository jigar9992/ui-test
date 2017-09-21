import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row',flexWrap: 'wrap'}}>
          <View style={styles.card}>
            <Image
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
              style={{ height: 140, width: 100 }}
            />
            <Text style={styles.paragraph}>
              Change code in the editor and watch it change on your phone!
              Save to get a shareable url. You get a new url each time you save.
            </Text>
          </View>
          <View style={styles.card}>
            <Image
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
                style={{ height: 140, width: 100 }}
              />
            <Text style={styles.paragraph}>
              Change code in the editor and watch it change on your phone
            </Text>
          </View>          
          <View style={styles.card}>
            <Image
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
                style={{ height: 140, width: 100 }}
              />
            <Text style={styles.paragraph}>
              Change code in the editor and watch it change on your phone
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
              style={{ height: 140, width: 100 }}
            />
            <Text style={styles.paragraph}>
              Change code in the editor and watch it change on your phone!
              Save to get a shareable url. You get a new url each time you save.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    
  },
  paragraph: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    flexWrap: 'wrap'
  },
  card: {
    width: Dimensions.get('screen').width / 2
  }
});
