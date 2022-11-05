import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Nav from '../components/Nav/Nav';
import PhotoCard from '../components/PhotoCard/PhotoCard';

const Home = ({navigation}: {navigation: any}) => {

	const historyPhotos = [
		{key:"1", name:"bmwpics", date: "12.05.2022", imageUri: "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"},
		{key:"2", name:"bmw fotolarını severim", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg", "https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg"]},
		{key:"3", name:"bmwpics", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"]},
		{key:"4", name:"bmwpics", date: "12.05.2022", imageUri: "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"},
		{key:"5", name:"bmw fotolarını severim", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg", "https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg"]},
		{key:"6", name:"bmwpics", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"]},		{key:"1", name:"bmwpics", date: "12.05.2022", imageUri: "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"},
		{key:"7", name:"bmw fotolarını severim", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg", "https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg"]},
		{key:"8", name:"bmwpics", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"]},		{key:"1", name:"bmwpics", date: "12.05.2022", imageUri: "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"},
		{key:"9", name:"bmw fotolarını severim", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg", "https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg"]},
		{key:"10", name:"bmwpics", date: "12.05.2022", imageUri: ["https://fardoktoru.com/image/cache/catalog/FARDOKTORU-RES%C4%B0M/ARACINIZA%20%C3%96ZEL%20%C3%87%C3%96Z%C3%9CMLER/BMW/BMW%203%20SER%C4%B0S%C4%B0/BMW%20E46%20PHOTON%20D2S%204300K%20XENON%20YEDEK%20AMPUL%C3%9C/c9fe9be3e7f5718e439d9abf48888cc1-550x550.jpg", "https://www.webtekno.com/images/editor/default/0003/56/9fbd44dc2ed706980beb2e23790095a095b343ca.jpeg"]},
	]

	return (
		<SafeAreaView 
			key="home-page-view" 
			className="flex-1"
		>
			<ScrollView 
				key="home-page-content"
				className="bg-dark-purple px-7"
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
								key= {photo.key}
								name= {photo.name}
								date = {photo.date}
								photo = {photo.imageUri}
							/>
						);
					})}
				</View>
			</ScrollView>
			<Nav navigation={navigation}/>
    	</SafeAreaView>
	)
}

export default Home