import { initializeApp } from "firebase/app"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
	apiKey: "AIzaSyB9qQwOGiUi1H_stLjfd0MAszP0E2aecMw",
	authDomain: "react-native-memoapp-eeff3.firebaseapp.com",
	projectId: "react-native-memoapp-eeff3",
	storageBucket: "react-native-memoapp-eeff3.appspot.com",
	messagingSenderId: "283529307296",
	appId: "1:283529307296:web:9c9ca863b04f4562b2d5c5"
};

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }



