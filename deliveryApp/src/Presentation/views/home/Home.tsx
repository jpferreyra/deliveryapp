import React from "react";
import {
  Image,  
  Text,    
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";

import homeViewModel from "./HomeViewModel";

import { RoundedButton } from "../../components/RoundedButton";
import { CustomTextInput } from "../../components/CustomTextInput";

import styles from './HomeStyles'

export const HomeScreen = () => {

  const {email, password, onChange} = homeViewModel();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackGround}
        source={require("../../../../assets/chef.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../../assets/logo.png")}
        />
        <Text style={styles.logoText}>DeliveryApp</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Ingresar</Text>

        <CustomTextInput 
            image={require("../../../../assets/email.png")}
            placeholder="Correo electronico"
            keyboardType="email-address"
            property="email"
            onChangeText={ onChange }
            value= {email}
        />

        <CustomTextInput 
            image={require("../../../../assets/password.png")}
            placeholder="Contraseña"
            keyboardType="email-address"
            property="password"
            onChangeText={ onChange }
            value= {password}
            secureTextEnty={true}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="Entrar"
            onPress={() => {
              console.log("Email:", email);
              console.log("Password:", password);
            }}
            // onPress={() => ToastAndroid.show("HOLA!", ToastAndroid.SHORT)}
          />
        </View>
        <View style={styles.formRegister}>
          <Text>¿No Tiene cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.formRegisterLink}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
