import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeIcon, HamburgerIcon, PlusIcon, CameraIcon, RightArrowIcon } from '../Icon';
import IconButton from '../IconButton';
import AddOptionsPopover from './AddOptionsPopover';
import { useRoute } from '@react-navigation/native';
import { Dimensions } from 'react-native'
import Theme from '../../theme/theme';

interface NavProps {
	navigation : any;
	middleButtonOnPress? : any;
}

const Nav = ({ navigation, middleButtonOnPress } : NavProps) => {

	const route = useRoute();
	const [ isAddOptionsOpen, setIsAddOptionsOpen ] = useState<boolean>(false);
	const [ middleButtonIcon, setMiddleButtonIcon ] = useState<React.ReactNode>(<PlusIcon size="45" color="white"/>);
	const touchable = useRef();

	useEffect(() => {
		switch(route.name){
			case "Home" : setMiddleButtonIcon(<PlusIcon size="45" color="white"/>);
			break; 

			case "PhotoTake" : setMiddleButtonIcon(<CameraIcon size="45" color="white"/>);
			break;

			case "ImageShower" : setMiddleButtonIcon(<RightArrowIcon size="45" color="white"/>);
			break;

			default : setMiddleButtonIcon(<PlusIcon size="45" color="white"/>);
		}
	}, [route])

	const onHomeButtonPressed = () => {
		navigation.navigate("Home");
	}

	const onMoreButtonPressed = () => {

	}

	const onMiddleButtonPressed = () => {
		if(!middleButtonOnPress){
			if(isAddOptionsOpen){
				return;
			}
			setIsAddOptionsOpen(true);
			return;
		}
		middleButtonOnPress();
	}

	return (
		<>
			<View style={styles.container}>
				<IconButton
					key="home-icon-button"
					icon={<HomeIcon size="45" color="white"/>}
					onPress={onHomeButtonPressed}
				/>
				<View style={styles.actionButton}>
					<IconButton
						key="middle-icon-button"
						icon={middleButtonIcon}
						onPress={onMiddleButtonPressed}
						customClassName="bg-orange rounded-full h-[70px] w-[70px]"
						customRef = {touchable}
					/>
				</View>
				<IconButton
					key="more-icon-button"
					icon={<HamburgerIcon size="45" color="white"/>}
					onPress={onMoreButtonPressed}
				/>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Theme.color['mid-purple'],
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		bottom:0,
		width:'100%',
		height: Dimensions.get('window').height*0.10,
	},
	actionButton: {
		bottom:Dimensions.get('window').height*0.05
	}
 });

export default Nav;