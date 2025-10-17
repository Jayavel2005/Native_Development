import auth from "@/services/firebase";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleLogin = () => {
        if (!email && !password) {
            setEmailError("Email is required");
            setPasswordError("Password is required");
            return;
        }
        if (!email) {
            setEmailError("Email is required");
            setPasswordError("");
            return;
        }
        if (!email.includes("@") || !email.includes(".com")) {
            setEmailError("Invalid email address");
            setPasswordError("");
            return;
        }
        if (!password) {
            setEmailError("");
            setPasswordError("Password is required");
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                Alert.alert("Successfully Logged In");
                router.push("/screens/Todo");
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    }

    return (
        <View className="flex-1 justify-center items-center bg-white p-5">
            <Text className="text-3xl font-bold text-teal-600 mb-8">Welcome Back 👋</Text>

            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                onChangeText={(email) => setEmail(email)}
            />

            <TextInput
                placeholder="Password"
                secureTextEntry
                className="w-full border border-gray-300 rounded-lg p-3 mb-6"
                onChangeText={(password) => setPassword(password)}
            />

            <Pressable
                className="bg-teal-500 active:bg-teal-600 w-full p-3 rounded-lg items-center mb-3"
                onPress={handleLogin}
            >
                <Text className="text-white text-lg font-semibold">Login</Text>
            </Pressable>

            <View className="flex-row">
                <Text className="text-gray-600">Don’t have an account? </Text>
                <Pressable onPress={() => router.push("/screens/Register")}>
                    <Text className="text-teal-600 font-semibold">Register</Text>
                </Pressable>
            </View>
        </View>
    );
}
