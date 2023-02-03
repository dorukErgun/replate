import create from 'zustand'
import { devtools, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authService from '../services/AuthService';

interface AuthState {
	visible : boolean;
	setVisible : (val : boolean) => void;
  loggedIn : boolean;
  login : (email : string, password : string) => any;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        visible: false,
        loggedIn : false,
        setVisible: (val) => set((state) => { 
          return ({ visible : true}); 
        }),
        login: async (email, password) => {
          const userCredentials = await authService.login(email, password);
          if(!userCredentials){
            return;
          }
          console.log(userCredentials);
          set((state) => ({ loggedIn: true }));
        }
      }),
      {
        name: 'auth-storage',
        getStorage: () => AsyncStorage
      }
    )
  )
)

export default useAuthStore;   