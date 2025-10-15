import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View } from "react-native";

export default function Index() {
  const route = useRouter();

  const letters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
  ];

  const lettersMap = letters.map((letter, index) => ({ letterText: letter, key: index.toString() }));

  return (
    <>
      <StatusBar style="dark" />
      <View className="flex-1  border bg-white">
        {/* <ScrollView contentContainerClassName="pb-10" className="p-3">
          <View className="flex items-center border p-5 rounded-lg bg-pink-400 mb-5">
            <Text className="text-4xl">Alphabets</Text>
          </View>
          {letters.map((letter, index) => (
            <Text
              key={index}
              className={`text-3xl border  text-center m-1 rounded-lg p-5 active:bg-purple-400 ${index % 2 == 0 ? "bg-cyan-200" : "bg-pink-200"}`}
            >
              {letter.toUpperCase()}
            </Text>
          ))}
        </ScrollView> */}
        <FlatList
          data={lettersMap}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Text className={`text-3xl text-center p-4 border-b border-gray-300 ${parseInt(item.key) % 2 === 0 ? 'bg-cyan-200' : 'bg-pink-200'}`}>
              {item.letterText.toUpperCase()}
            </Text>
          )}
        />

      </View>
    </>
  );
}
