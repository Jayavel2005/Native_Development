import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";


export default function Index() {
  const route = useRouter();
  const [text, setText] = useState("");

  return (
    <>
      <StatusBar style="dark" />
      <View className="flex-1 justify-center items-center p-5">


        <TextInput placeholder="Type here" className="border rounded-md w-full  placeholder:p-5 placeholder:bg-blue-200" onChangeText={(newText) => { setText(newText) }} />
        <Text className="mt-5 text-4xl">{text}</Text>
      </View>
    </>
  );
}
