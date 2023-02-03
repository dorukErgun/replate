import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import BasePage from '../components/BasePage';
import Nav from '../components/Nav/Nav';
import PhotoCard from '../components/PhotoCard/PhotoCard';
import mediaService from '../services/MediaService';
import * as MediaLibrary from 'expo-media-library';
import keyGenerator from '../utils/KeyGenerator';
import { ImageInfo, ImagePickerMultipleResult } from 'expo-image-picker/build/ImagePicker.types';
import * as ImagePicker from 'expo-image-picker';
import useCurrentPhotosStore from '../stores/useCurrentPhotosStore';
import AddOptionsPopover from '../components/Nav/AddOptionsPopover';

const Home = ({navigation}: {navigation: any}) => {

	const [ isAddOptionsOpen, setIsAddOptionsOpen ] = useState<boolean>(false);

	useEffect(() => {
		const getImagesAsync = async () => {
			const res = await MediaLibrary.requestPermissionsAsync()
			await mediaService.getImages();
		}
		getImagesAsync();
	}, []);

	const historyPhotos = [
		{key:"1", name:"abbmwpics", date: "12.05.2022", imageUri: "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"},
		{key:"2", name:"bbmw fotolarını severim", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg", "https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg"]},
		{key:"3", name:"ssgbmwpics", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"]},
		{key:"4", name:"csfsbmwpics", date: "12.05.2022", imageUri: "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"},
		{key:"5", name:"xsadbmasdsadsadsadsadsadsadasdsaw fotolarını severim", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg", "https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg"]},
		{key:"6", name:"sghbmwpics", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"]},		
		{key:"7", name:"dsaaabmwpicsss", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"]},		
		{key:"8", name:"fabbmwpics", date: "12.05.2022", imageUri: "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"},
		{key:"9", name:"cxzbbmw fotolarını severim", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg", "https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg"]},
		{key:"10", name:"wgssgbmwpics", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"]},
		{key:"11", name:"wecsfsbmwpics", date: "12.05.2022", imageUri: "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"},
		{key:"12", name:"ewqxsadbmw fotolarını severim", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg", "https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg"]},
		{key:"13", name:"sqwewqghbmwpics", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"]},		
		{key:"14", name:"aaabmwptwqticsss", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"]},		
	]

	return (
		<>
			<AddOptionsPopover
				visible = {isAddOptionsOpen}
				onRequestClose = {() => setIsAddOptionsOpen(false)}
				navigation = {navigation}
			/>
			<BasePage
				onMiddleButtonPressed={() => setIsAddOptionsOpen(true)}
			>
				<ScrollView 
					key="home-page-content"
					className="bg-dark-purple px-7 pt-5"
				>
					<View key="header">
						<Text className="text-white text-2xl pb-2">
							Hello Doruk...
						</Text>
						<Text className="text-white text-base">
							Here are the images that you removed plates from.
						</Text>
					</View>
					<View key="history-photos">
						{historyPhotos.map((photo : any) => {
							return(
								<PhotoCard
									key= {keyGenerator('PhotoCard', photo.name)}
									name= {photo.name}
									date = {photo.date}
									photo = {photo.imageUri}
								/>
							);
						})}
					</View>
				</ScrollView>
			</BasePage>
		</>
	);
}

export default Home