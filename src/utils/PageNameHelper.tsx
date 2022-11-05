export enum PageNames  {
	"Home" = "Home",
	"SelectPlate" = "Plate Selection",
	"PhotoTake" = "Camera",
	"Processing" = "Processing"
}

export const getPageNameBasedOnRoute = (route : string) => {
	switch(route) {
		case "Home" : return "Home"
		case "SelectPlate" : return "Plate Selection"
		case "PhotoTake" : return "Camera"
		case "Processing" : return "Processing"
		default : return ""
	}
}
