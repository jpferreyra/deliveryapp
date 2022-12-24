import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../../../../App';
import { ProfileInfoViewModel } from './ProfileInfoViewModel';

interface Props extends StackScreenProps<RootStackParamList,'ProfileInfoScreen'>{};

export const ProfileInfoScreen = ({navigation, route}: Props) => {
  const { clearSession } = ProfileInfoViewModel();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={()=> {
        clearSession();
        navigation.navigate('HomeScreen');
      }} title='Cerrar Sesion'/>
    </View>
  );
};

const styles = StyleSheet.create({});
