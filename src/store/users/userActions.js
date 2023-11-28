import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { setError, setIsAuthenticate, setUser } from "./userSlice";
import { auth } from "../../firebase/firebaseConfig";

export const createAnAccountAsync = (newUser) => async (dispatch) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.password
    );
    await updateProfile(auth.currentUser, {
      displayName: newUser.displayName,
      photoURL: newUser.photoURL,
    });
    dispatch(
      setUser({
        id: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        accessToken: user.accessToken,
      })
    );
    dispatch(setIsAuthenticate(true));
    dispatch(setError(false));
  } catch (error) {
    console.warn(error);
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    );
  }
};

export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  return async (dispatch) => {
    try {
      const userCredencial = await signInWithPopup(auth, provider);
      console.log(userCredencial);
      dispatch(setIsAuthenticate(true));
      dispatch(setUser(userCredencial.user));
    } catch (error) {
      dispatch(setIsAuthenticate(false));
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
};
