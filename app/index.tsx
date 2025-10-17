import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Register from "./screens/Register";

export default function Index() {
  return (
    <>
      <StatusBar style="dark" />
      <View className="flex-1 bg-white">
        <Register />
      </View>
    </>
  );
}
