import * as MediaLibrary from 'expo-media-library';

class MediaService {

	private ALBUM_NAME = "Replate";

	private getPermissions = async () => {
		await MediaLibrary.requestPermissionsAsync();
	}

	private getReplateAlbum = async () => {
		const replateAlbum = await MediaLibrary.getAlbumAsync(this.ALBUM_NAME);
		return replateAlbum;
	}

	saveToImages = async (images : any[]) => {
		await this.getPermissions();
		const replateAlbum = await this.getReplateAlbum();
		console.log(images);

	}

	getImages = async () => {
		await this.getPermissions();
		const replateAlbum = await this.getReplateAlbum();
		if(!replateAlbum){
			//There are no images seen currently.
			//Return empty.
			return [];
		}
		//console.log('Album',album);
		//if the album is not there, create one.
		/*
		const albums = await MediaLibrary.getAlbumsAsync();
		const album = await MediaLibrary.getAssetsAsync({
			album : "278607672"
		})
		console.log(album);
		const asset = await MediaLibrary.createAssetAsync('file:///storage/emulated/0/WhatsApp/Media/WhatsApp Images/IMG-20200130-WA0002.jpg');
		console.log(asset);
		const album = await MediaLibrary.createAlbumAsync('Replate',asset,false);
		console.log(album);
		const photo = await MediaLibrary.getAssetsAsync();
		console.log(album);
		*/
		return;
	}

}

const mediaService = new MediaService();
export default mediaService; 