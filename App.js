import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

// eslint-disable-next-line require-jsdoc
export default function App() {
  console.log('App starting!');
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
