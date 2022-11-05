export interface Plate {
	key : string;
	imgSrc : string;
}

class PlateService {

	getPlates = async () : Promise<Plate[]> => {
		const mockPlates : Plate[] = [
			{key:"1", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"2", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"3", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"4", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"5", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"6", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"7", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"8", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"9", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"10", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"11", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"12", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"13", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"14", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"15", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
			{key:"16", imgSrc : 'https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png'},
		]	
		return mockPlates;
	}

}

const plateService = new PlateService();
export default plateService; 