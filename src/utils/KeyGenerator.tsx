const shape = (str : string) => {
	return str.replace(/ /g,'').toLowerCase();
}

const keyGenerator = (componentName:string, itemName:string) => {
	return `${shape(componentName)}-${shape(itemName)}`;
}

export default keyGenerator;