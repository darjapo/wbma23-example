import {StatusBar} from 'expo-status-bar';
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
} from 'react-native';
import List from './components/List';
import {Settings} from 'react-native-feather';

// eslint-disable-next-line require-jsdoc
const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#52060a" style="auto" />
        <View style={styles.header}>
          <ImageBackground
            source={require('./assets/leaves.jpg')}
            style={styles.bgImage}
            imageStyle={styles.image}
          />
          <Text style={styles.text}>Hello!</Text>
          <Settings
            style={styles.icon}
            stroke="#F0F4EF"
            width={32}
            height={32}
          />
        </View>
        <List />
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#210d13',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  header: {
    height: 200,
    padding: 10,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    borderRadius: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  text: {
    position: 'absolute',
    color: '#F0F4EF',
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 20,
    left: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  icon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
