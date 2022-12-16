import { StyleSheet } from "react-native";
import HomeStyles from "../home/HomeStyles";

const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageBackGround: {
    width: "100%",
    height: "100%",
    opacity: 0.9,
    bottom: "30%",
  },
  form: {
    width: "100%",
    height: "60%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
  },
  formTitle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 24,
  },
  formRegister: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  formRegisterLink: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "orange",
    marginStart: 5,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "6%",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default RegisterStyles;
