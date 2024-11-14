import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Index = () => {
  const handlePatient = () => {
    router.push("/LoginUser");
  };
  const handleAdmin = () => {
    router.push("/LoginAdmin");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/initialPage.png")} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Melhore a sua vida</Text>
        <Text style={{ fontStyle: "italic" }}>
          Um app feito pensando em você
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.buttonAdmin} onPress={handleAdmin}>
          <Text style={{ color: "white" }}>Admin</Text>
        </Pressable>

        <Pressable style={styles.buttonPatient} onPress={handlePatient}>
          <Text style={{ color: "#00FFCB" }}>Paciente</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonsContainer: {
    width: "100%",
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonAdmin: {
    backgroundColor: "#000",
    padding: 10,
    paddingInline: 20,
    borderRadius: 10,
  },
  buttonPatient: {
    backgroundColor: "#000",
    padding: 10,
    paddingInline: 20,
    borderRadius: 10,
  },
});
