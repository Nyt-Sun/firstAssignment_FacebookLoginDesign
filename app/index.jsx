import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>facebook</Text>

      <TextInput
        style={styles.input}
        placeholder="Email or Phone Number"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>
        Forgotten Password?
      </Text>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createText}>
          Create New Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  logo: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#1877f2",
    textAlign: "center",
    marginBottom: 40,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
  },

  loginButton: {
    backgroundColor: "#1877f2",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  forgotPassword: {
    textAlign: "center",
    color: "#1877f2",
    marginTop: 15,
  },

  createButton: {
    backgroundColor: "#42b72a",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 25,
  },

  createText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
