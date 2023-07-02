import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { deepClone } from '../util/Util';
import { auth } from '../../fb';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const useSessionStore = defineStore('session', () => {

  // LOGIN SECTION

  // LOGIN - DATA
  const loginTemplate = {
    user: null,
    loginTime: null,
  };
  const loginData = ref(deepClone(loginTemplate));
  
  // LOGIN - METHODS
  const isLoggedIn = () => null != loginData.value.user;

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      loginData.value.user = userCredential.user;
      loginData.value.loginTime = new Date();
      return {
        data: userCredential.user,
        error: null
      }
    }
    catch(error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      return {
        data: null,
        error
      }
    }
  }

  return { 
    // LOGIN
    loginData, isLoggedIn, login  
  }
})
