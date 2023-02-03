import { PropsWithChildren } from 'react';
import Svg, { Path, G } from 'react-native-svg';

interface IconProps {
   color? : string
   size : string
}

const BaseIcon = ({children, color, size} : PropsWithChildren<IconProps>) => {
   return (
      <Svg 
         style={{width:`${size}px`, height:`${size}px`}} 
         color={!color ? 'white' : color} 
         viewBox={`0 0 24 24`}
         >{children}
      </Svg>
   );
}

const PlusIcon = ({color, size} : IconProps) => {
   return (
      <BaseIcon color={color} size={size}>
         <Path fill={color} d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
      </BaseIcon>
   ); 
}

const HomeIcon = ({color, size} : IconProps) => {
   return (
      <BaseIcon color={color} size={size}>
         <Path fill={color} d="M11.03 2.59a1.5 1.5 0 011.94 0l7.5 6.363a1.5 1.5 0 01.53 1.144V19.5a1.5 1.5 0 01-1.5 1.5h-5.75a.75.75 0 01-.75-.75V14h-2v6.25a.75.75 0 01-.75.75H4.5A1.5 1.5 0 013 19.5v-9.403c0-.44.194-.859.53-1.144l7.5-6.363zM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v6.25h5v-9.403L12 3.734z"/>
      </BaseIcon>
   ); 
}

const HamburgerIcon = ({color, size} : IconProps) => {
   return (
      <BaseIcon color={color} size={size}>
         <Path fill={color} d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
      </BaseIcon>
   ); 
}

const CameraIcon = ({color, size} : IconProps) => {
   return (
      <BaseIcon color={color} size={size}>
         <Path fill={color} d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z" />
      </BaseIcon>
   ); 
}

const FolderIcon = ({color, size} : IconProps) => {
   return (
      <BaseIcon color={color} size={size}>
         <Path fill={color} d="M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" />
      </BaseIcon>
   ); 
}

const RightArrowIcon = ({color, size} : IconProps) => {
   return (
      <BaseIcon color={color} size={size}>
         <Path fill={color}  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </BaseIcon>
   ); 
}

const EmptyPlateIcon = ({color, size} : IconProps) => {
   return (
      <BaseIcon color={color} size={size}>
         <Path fill={color} d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4Z"/>
      </BaseIcon>
   ); 
}

const CarIcon = ({color, size} : IconProps) => {
   return (
      <BaseIcon color={color} size={size}>
         <Path fill={color} d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z"/>
      </BaseIcon>
   ); 
}

const LeftChevronIcon = ({color, size} : IconProps) => {
   return (
      <BaseIcon color={color} size={size}>
         <Path fill={color} d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
      </BaseIcon>
   ); 
}

const DotsIcon = ({color, size} : IconProps) => {
   return (
      <BaseIcon color={color} size={size}>
         <Path fill={color} d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/>
      </BaseIcon>
   ); 
}

const DeleteIcon = ({color, size} : IconProps) => {
   return (
      <BaseIcon color={color} size={size}>
         <Path fill={color} d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"/>
      </BaseIcon>
   ); 
}

const ShareIcon = ({color, size} : IconProps) => {
   return (
      <BaseIcon color={color} size={size}>
         <Path fill={color} d="M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z"/>
      </BaseIcon>
   ); 
}

const GoogleIcon = () => {
   return (
      <Svg viewBox="0 0 48 48" width="30px" height="30px">
         <Path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><Path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
         <Path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
         <Path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
      </Svg>
   );
}


export { PlusIcon, HomeIcon, HamburgerIcon, CameraIcon, FolderIcon, RightArrowIcon, EmptyPlateIcon, CarIcon, LeftChevronIcon, DotsIcon, DeleteIcon, ShareIcon, GoogleIcon };