import { useAssets } from "expo-asset";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { StatusBar } from "expo-status-bar";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View style={styles.container}>
      {assets && <Video resizeMode={ResizeMode.COVER} source={{ uri: assets[0].uri }} isMuted isLooping shouldPlay style={styles.video} />}
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.headerText}>Ready to change the way you money?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Link href={"/login"} style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.dark }]} asChild>
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>Log in</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/signup"} style={[defaultStyles.pillButton, { flex: 1, backgroundColor: "white" }]} asChild>
          <TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  buttonsContainer: {
    marginBottom: 80,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});

export default Page;
