import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions , KeyboardAvoidingView, Platform} from 'react-native';
import useAuthStore from '../stores/useAuthStore';
import Button from './Button';
import CustomTextInput from './CustomTextInput';
import { EmptyPlateIcon, GoogleIcon } from './Icon';
import IconButton from './IconButton';

const SignupForm = () => {

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordAgain, setPasswordAgain ] = useState('');
	//const login = useAuthStore((state) => state.login);
//
	//const handleLogin = async () => {
	//	await login(email, password);
	//};

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
					Create new Account
				</Text>
				<View className='p-2'/> 
				<CustomTextInput
					label="Email"
					placeholder="email@email.com"
					value={email}
					onChangeText={setEmail}
				/>
				<View className='p-2'/> 
				<CustomTextInput
					label="Password"
					placeholder="••••••••"
					value={password}
					onChangeText={setPassword}
					isPassword = {true}
				/>				
				<View className='p-2'/> 
				<CustomTextInput
					label="Password Again"
					placeholder="••••••••"
					value={password}
					onChangeText={setPassword}
					isPassword = {true}
				/>
				<View className='p-5'/> 
				<Button
					title="Sign Up"
					onPress={() => {}}
					customClassName="rounded-2xl bg-orange p-2 h-[60px]"
					titleColor='white'
					disabled={ email === '' || password === '' || passwordAgain === ''}
				/>
			</View>
		</View>
	)
}

export default SignupForm