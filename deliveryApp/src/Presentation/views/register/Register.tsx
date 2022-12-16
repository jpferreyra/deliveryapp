import React from "react";
import {
  Image,  
  Text,
  View,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { CustomTextInput } from "../../components/CustomTextInput";

import registerViewModel from "./RegisterViewModel";

import styles from './RegisterStyles'

export const RegisterScreen = () => {

  const { name, lastname, phone, email, password, confirmPassword, onChange, OnRegister } =
    registerViewModel();

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackGround}
        source={require("../../../../assets/chef.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../../assets/user_image.png")}
        />
        <Text style={styles.logoText}>Selecciona una imagen</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Registrarse</Text>
        
        <CustomTextInput
          placeholder="Nombres"
          keyboardType="default"
          image={require("../../../../assets/user.png")}
          property="name"
          onChangeText={ onChange }
          value= {name}          
          />

          <CustomTextInput
          placeholder="Apellidos"
          keyboardType="default"
          image={require("../../../../assets/my_user.png")}
          property="lastname"
          onChangeText={ onChange }
          value= {lastname}          
          />
        
        <CustomTextInput
          placeholder="Telefono"
          keyboardType="numeric"
          image={require("../../../../assets/phone.png")}
          property="phone"
          onChangeText={ onChange }
          value= {phone}          
          />

        <CustomTextInput
            placeholder="Correo electronico"
            keyboardType="email-address"
            image={require("../../../../assets/email.png")}
            property="email"
            onChangeText={ onChange }
            value= {email}
            />
         
         <CustomTextInput 
            placeholder="Contraseña"
            keyboardType="default"
            image={require("../../../../assets/password.png")}
            property="password"
            onChangeText={ onChange }
            value= {password}
            secureTextEnty={true}
            />

          <CustomTextInput 
            placeholder=" Confirmar contraseña"
            keyboardType="default"
            image={require("../../../../assets/confirm_password.png")}
            property="confirmPassword"
            onChangeText={ onChange }
            value= {confirmPassword}
            secureTextEnty={true}
            /> 

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="Confirmar" onPress={ () => OnRegister() } />
        </View>
      </View>
    </View>
  );
};