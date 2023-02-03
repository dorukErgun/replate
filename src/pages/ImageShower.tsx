import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, LayoutChangeEvent } from 'react-native';
import useCurrentPhotosStore from '../stores/useCurrentPhotosStore';
import BasePage from '../components/BasePage';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import keyGenerator from '../utils/KeyGenerator';
import Theme from '../theme/theme';
import IconButton from '../components/IconButton';
import { DeleteIcon } from '../components/Icon';
import DeletePhotoConfirmationPopup from '../components/DeletePhotoConfirmationPopup';

const { width } = Dimensions.get('window');
const height = width * 0.8

const ImageShower = ({ navigation} : {navigation : any}) => {

   const [ deletePhotoConfirmationPopupOpen, setDeletePhotoConfirmationPopupOpen ] = useState<boolean>(false);
   const [ photoToBeDeleted, setPhotoToBeDeleted ] = useState<ImageInfo>();
   const photos = useCurrentPhotosStore((state) => state.photos);
   const deletePhoto = useCurrentPhotosStore((state) => state.deletePhoto);

   const getHeightForGivenPhoto = (photo : ImageInfo) => {
      const ratio = photo.height / photo.width;
      const ratioToBeUsed = ratio < 16/9 ? ratio : 16/9;
      return width * 0.8 * ratioToBeUsed
   }

   const onDeletePhoto = (photo : ImageInfo) => {
      setPhotoToBeDeleted(photo);
      setDeletePhotoConfirmationPopupOpen(true);
   }

   const onDeletionConfirmed = () => {
      if(!photoToBeDeleted){
         return;
      }
      deletePhoto(photoToBeDeleted.uri);
      setDeletePhotoConfirmationPopupOpen(false);
   }

   return (
      <BasePage
         onMiddleButtonPressed={() => navigation.navigate('SelectPlate')}
      >
         <DeletePhotoConfirmationPopup
            visible = {deletePhotoConfirmationPopupOpen}
            onRequestClose={() => { setDeletePhotoConfirmationPopupOpen(false) }}
            onConfirmClicked={onDeletionConfirmed}
         />
         <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.scrollContainer}
         >
               {photos.map(photo => {
                  console.log(photos);
                  return (
                     <View 
                        key={keyGenerator('ImageShover', photo.uri as string)} 
                        style={{paddingHorizontal: width*0.1}}
                     >
                        <IconButton
                           icon={<DeleteIcon size="20" color="white"/>}
                           onPress={() => onDeletePhoto(photo)}
                           style={{ position: 'absolute', zIndex:10, width:40, height:40}}
                           customClassName="rounded-full bg-light-purple right-[7%] -top-[3%]"
                        />
                        <Image 
                           style={{
                              height: getHeightForGivenPhoto(photo),
                              width : width*0.8,
                              borderColor: Theme.color['light-purple'],
                              borderWidth: 5
                           }} 
                           source={{uri : photo.uri}}
                        />
                     </View>
                  );
               })}
         </ScrollView> 
      </BasePage>
   );
}

const styles = StyleSheet.create({
   scrollContainer: {
      alignItems: 'center'
   },
});

export default ImageShower;
