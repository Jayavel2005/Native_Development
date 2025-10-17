import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack initialRouteName="screens/Login">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Login" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Register" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Todo" options={{ headerShown: false }} />
    </Stack>
  );
}
