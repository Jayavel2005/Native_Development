import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import auth from "../../services/firebase";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const router = useRouter();

	const handleRegister = () => {
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
		if (password.length < 8) {
			setPasswordError("Password must be at least 8 characters long");
			setEmailError("");
			return;
		}
		if (!password.match(/[a-z]/)) {
			setPasswordError("Password must contain at least one lowercase letter");
			setEmailError("");
			return;
		}
		if (!password.match(/[A-Z]/)) {
			setPasswordError("Password must contain at least one uppercase letter");
			setEmailError("");
			return;
		}
		if (!password.match(/[0-9]/)) {
			setPasswordError("Password must contain at least one number");
			setEmailError("");
			return;
		}
		if (!password.match(/[^a-zA-Z0-9]/)) {
			setPasswordError("Password must contain at least one special character");
			setEmailError("");
			return;
		}

		setEmailError("");
		setPasswordError("");

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				Alert.alert("Successfully Registered");
				router.push("/screens/Todo");
			})
			.catch((error) => {
				console.log(error.code, error.message);
			});
	};

	return (
		<View className="flex-1 justify-center items-center bg-white p-5">
			<Text className="text-3xl font-bold text-teal-600 mb-8">Create Account ✨</Text>

			<TextInput
				placeholder="Email"
				keyboardType="email-address"
				className="w-full border border-gray-300 rounded-lg p-3 mb-3"
				onChangeText={setEmail}
			/>
			{emailError ? <Text className="w-full text-red-500 mb-2">{emailError}</Text> : null}

			<TextInput
				placeholder="Password"
				secureTextEntry
				className="w-full border border-gray-300 rounded-lg p-3 mb-3"
				onChangeText={setPassword}
			/>
			{passwordError ? <Text className="w-full text-red-500 mb-2">{passwordError}</Text> : null}

			<Pressable
				className="bg-teal-500 active:bg-teal-600 w-full p-3 rounded-lg items-center mb-3"
				onPress={handleRegister}
			>
				<Text className="text-white text-lg font-semibold">Register</Text>
			</Pressable>

			<View className="flex-row">
				<Text className="text-gray-600">Already have an account? </Text>
				<Pressable onPress={() => router.push("/screens/Login")}>
					<Text className="text-teal-600 font-semibold">Login</Text>
				</Pressable>
			</View>
		</View>
	);
}
