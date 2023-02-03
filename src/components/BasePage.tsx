import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import Nav from './Nav/Nav';
import {NavigationProp, ParamListBase, useNavigation} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import useSpinnerStore from '../stores/useSpinnerStore';

interface BasePageProps {
	children : React.ReactNode;
	onMiddleButtonPressed? : any;
	withoutNav? : boolean;
}

const BasePage : React.FC<BasePageProps> = ({ children, onMiddleButtonPressed, withoutNav } : BasePageProps) => {

	const visible = useSpinnerStore((state) => state.visible);

	//Get the base navigator.
	const navigationProp : NavigationProp<ParamListBase> = useNavigation();

	return (
		<View className="bg-dark-purple flex-1">
			<Spinner
				visible={visible}
				textStyle={{}}
			/>
			{children}
			{!withoutNav &&
				<Nav 
					navigation={navigationProp}
					middleButtonOnPress={onMiddleButtonPressed}
				/>
			}
		</View>
	);
}

export default BasePage