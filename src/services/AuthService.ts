import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, setPersistence, initializeAuth } from "firebase/auth";

class AuthService{


	login = async (email : string, password : string) : Promise<UserCredential> => {
		const auth = getAuth();
		const userCredentials = await signInWithEmailAndPassword(auth, email, password);
		return userCredentials;
	}

	register = async (email : string, password : string) => {
		const auth = getAuth();
		await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
		  // Signed in 
		  const user = userCredential.user;
		  console.log(user);
		  // ...
		})
		.catch((error) => {
		  const errorCode = error.code;
		  const errorMessage = error.message;
		  // ..
		});
	}

}


const authService = new AuthService();
export default authService; 