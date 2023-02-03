import { FirebaseError } from 'firebase/app';
import { UserCredential } from 'firebase/auth';
import React, { useState } from 'react';
import { View, Text, Dimensions, Alert } from 'react-native';
import authService from '../services/AuthService';
import useAuthStore from '../stores/useAuthStore';
import Button from './Button';
import CustomTextInput from './CustomTextInput';
import { EmptyPlateIcon, GoogleIcon } from './Icon';
import IconButton from './IconButton';
import { getErrorTextBasedOnError } from '../utils/ErrorHelper';

interface LoginFormProps {
	onSignUpClicked : any;
}

const LoginForm = ({ onSignUpClicked } : LoginFormProps) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [ wrongPassword, setWrongPassword ] = useState<boolean>(false);

	const handleLogin = () => {
		const userCredentials = authService.login(email, password).then((userCredential : UserCredential) => {
			//A user logged in, maybe a LOG here?
		}).catch((error : FirebaseError) => {
			//There is an error here.
			const errorText = getErrorTextBasedOnError(error);
			if(error.code === 'auth/wrong-password'){
				setWrongPassword(true);
				return;
			}else{
				Alert.alert(
					"Couldn't Find Account",
					errorText,
					[
						{
						 text: "Sign up",
						 onPress: onSignUpClicked,
						 style: "cancel"
						},
						  { 
							text: "Try Again", 
							onPress: () => {}
						}
					]
				);
			}
		});
	};

	return (
		<View
			style={{
				width: Dimensions.get('window').width
			}} 
		>
			<View className="self-center">
				<EmptyPlateIcon size="250" color="white"/>
			</View>
			<View className="px-7">
				<Text className="text-3xl font-bold text-white">
					Login
				</Text>
				<View className='p-2'/> 
				<CustomTextInput
					label="Email"
					placeholder="email@email.com"
					value={email}
					onChangeText={setEmail}
					regex={/[0-9a-zA-Z]{6,}/}
				/>
				<View className='p-2'/> 
				<View>
					<CustomTextInput
						label="Password"
						placeholder="••••••••"
						value={password}
						onChangeText={setPassword}
						isPassword = {true}
						error = {wrongPassword}
					/>
					<View className='p-1'/> 
					{wrongPassword ? <Text className="absolute top-[100%] text-red-500">Wrong password.</Text> : <View/>}
				</View>
				<View className='p-5'/> 
				<Button
					title="Login"
					onPress={handleLogin}
					customClassName="rounded-2xl bg-orange p-2 h-[60px]"
					disabled={email === "" || password === ""}
				/>
				<View className='p-2'/> 
				<Button
					title="Login with Google (Soon)"
					icon={<GoogleIcon />}
					onPress={() => {console.log('Clicked')}}
					customClassName="flex-row bg-white p-2 rounded-2xl h-[60px]"
					titleColor='black'
				/>
			</View>
		</View>
	)
}

export default LoginForm