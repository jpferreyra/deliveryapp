import React, { useEffect, useState } from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';

import { useUserLocal } from '../../hooks/useUserLocal';

const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { user, getUserSession } = useUserLocal(); //llamando al Hook

  console.log('USER SESSION:', JSON.stringify(user));

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const OnLogin = async () => {
    if (isValid()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log('RESPONSE:', JSON.stringify(response));

      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        await SaveUserLocalUseCase(response.data);
        getUserSession();
      }
    }
  };

  const isValid = (): boolean => {
    if (values.email === '') {
      setErrorMessage('Ingresa tu correo electronico');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('Ingresa la contraseña');
      return false;
    }
    return true;
  };

  return {
    ...values,
    user,
    onChange,
    errorMessage,
    OnLogin,
  };
};

export default HomeViewModel;

