import React from 'react';
import { WebView } from 'react-native-webview';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
// import deviceInfoModule from 'react-native-device-info';
// import FormInput from '../components/FormInput';
// import FormButton from '../components/FormButton';
// import SocialButton from '../components/SocialButton';
// import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {

  // WebView will not work without userAgent and originWhitelist
  return (
    <WebView 
        source={{ uri: 'https://deliverhealthychat--dhchat-040722-00-13nfby0u.web.app/'}} 
        userAgent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
        originWhitelist={["https://*", "http://*", "file://*", "sms://*"]}        
        />
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});