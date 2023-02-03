import { FirebaseError } from 'firebase/app';

export const getErrorTextBasedOnError = (error : FirebaseError) => {
	console.log(error.code);
	switch(error.code) {
		case "auth/invalid-email" || "auth/user-not-found" : return "We could not find an account with the given email, Please try another email or sign up if you dont have an account."
		case "auth/wrong-password" : return "Password is wrong, please check again."
		default : return ""
	}
}
