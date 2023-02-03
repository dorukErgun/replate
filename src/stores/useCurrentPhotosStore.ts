import { CameraCapturedPicture } from 'expo-camera/build/Camera.types';
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';

interface CurrentPhotoState {
	photos : ImageInfo[];
	addPhoto : (photo : ImageInfo) => void;
	deletePhoto : (uri : string) => void;
	clearPhotos : () => void;
}

const useCurrentPhotosStore = create<CurrentPhotoState>()(
  devtools(
    persist(
      (set) => ({
        photos: [],
        addPhoto: (photo) => set((state) => ({ photos :  [ ...state.photos, photo ] })),
        deletePhoto: (uri) => set((state) => ({ photos : state.photos.filter((photo) => photo.uri !== uri ) })),
        clearPhotos: () => set((state) => ({ photos: [] })),
      }),
      {
        name: 'current-photos-storage',
        getStorage: () => AsyncStorage
      }
    )
  )
)

export default useCurrentPhotosStore;