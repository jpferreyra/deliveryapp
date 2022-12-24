import React, { useEffect } from 'react';
import {
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import homeViewModel from './HomeViewModel';

import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';

import styles from './HomeStyles';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const HomeScreen = ({ navigation, route }: Props) => {
  const { email, password, errorMessage, user, onChange, OnLogin } =
    homeViewModel();

  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      navigation.replace('ProfileInfoScreen');
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackGround}
        source={require('../../../../assets/chef.jpg')}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/logo.png')}
        />
        <Text style={styles.logoText}>DeliveryApp</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Ingresar</Text>

        <CustomTextInput
          image={require('../../../../assets/email.png')}
          placeholder="Correo electronico"
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
          value={email}          
        />

        <CustomTextInput
          image={require('../../../../assets/password.png')}
          placeholder="Contraseña"
          keyboardType="email-address"
          property="password"
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="Entrar" onPress={() => OnLogin()} />
        </View>
        <View style={styles.formRegister}>
          <Text>¿No Tiene cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
          >
            <Text style={styles.formRegisterLink}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
