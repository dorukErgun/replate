import React, { useState } from 'react'
import { Dimensions, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View } from 'react-native';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import useAuthStore from '../stores/useAuthStore';
import Theme from '../theme/theme';

const Auth = () => {

	const [ isLogin, setIsLogin ] = useState<boolean>(true);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{
				flex:1,
				justifyContent: 'flex-end',
				alignItems:'center',
				backgroundColor: Theme.color['dark-purple'],
				width: '100%'
			}}>
      	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View 
					style={{
						paddingBottom : Dimensions.get('window').height*0.05,
					}}
				>
					{
						isLogin ? (
							<LoginForm 
								onSignUpClicked={() => {
									setIsLogin(false);
								}}
							/>
						) : (
							<SignupForm />
						)
					}
					<View style={{ alignSelf:'center'}} className="p-8">
						<Text className="text-white">
							{
								isLogin ? (
									"New to replate? "
								) : (
									"Joined us before? "
								)
							}
							<Text className="text-blue" onPress={() => {setIsLogin(!isLogin)}}>
								{
									isLogin ? (
										"Register"
									) : (
										"Login"
									)
								}
							</Text> 
						</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
  );
}

export default Auth