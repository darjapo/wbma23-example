import {AsyncStorage} from 'react-native';
import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {MainContext} from '../contexts/MainContext';

const Profile = () => {
  const {setIsLoggedIn} = useContext(MainContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Button
        title="Logout!"
        onPress={async () => {
          console.log('Logging out!');
          setIsLoggedIn(false);
          try {
            await AsyncStorage.clear;
          } catch (error) {
            console.error('clearing asyncstorage failed', error);
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

export default Profile;
