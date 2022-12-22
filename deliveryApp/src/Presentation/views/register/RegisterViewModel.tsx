import { useState } from "react";

import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";

RegisterAuthUseCase;

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const OnRegister = async () => {
    if (isValid()) {
      const apiResponse = await RegisterAuthUseCase(values);
      console.log("RESULT: " + JSON.stringify(apiResponse));
    }
  };

  const isValid = (): boolean => {
    if (values.name === '') {
      setErrorMessage('Ingresa tu nombre');
      return false;
    }
    if (values.lastname === '') {
      setErrorMessage('Ingresa tu Apellido');
      return false;
    }
    if (values.phone === '') {
      setErrorMessage('Ingresa tu telefono');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('Ingresa la contraseña');
      return false;
    }
    if (values.confirmPassword === '') {
      setErrorMessage('Ingresa la confirmacion de contraseña');
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMessage('las contraseñas no coinciden');
      return false;
    }
    return true;
  }

  return {
    ...values,
    onChange,
    OnRegister,    
    errorMessage
  };
};

export default RegisterViewModel;
