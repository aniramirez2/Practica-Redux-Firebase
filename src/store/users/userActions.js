import { firestore } from '../../firebase/firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { addProduct, deleteProduct, setError, setIsAuthenticate, setProducts, setUser, updateProduct } from "./userSlice";
import { auth } from "../../firebase/firebaseConfig";

const productCollection = collection(firestore, 'Productos')

export const createAnAccountAsync = (newUser) => async (dispatch) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.password
    );
    await updateProfile(auth.currentUser, {
      displayName: newUser.name,
      photoURL: newUser.photoURL,
    });
    console.log(user);
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

export const getData = () => {
  return async (dispatch) => {
    try {
      const tempArr = []
      const response = await getDocs(productCollection);
      response.forEach((item) => {
          tempArr.push({ id: item.id, ...item.data() })
      });
      dispatch(setProducts(tempArr));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}

export const createData = (product) => {
  return async (dispatch) => {
    try {
      let tempObject = { ...product }
      const response = await addDoc(productCollection, product);
      console.log(response);
      tempObject.id = response.id;
      dispatch(addProduct(tempObject));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}

export const updateData = (product) => {
  const documentRef = doc(productCollection, product.id); /** Referencia del documento */
  return async (dispatch) => {
    try {
      dispatch(updateProduct(product));
      delete product.id;
      await setDoc( documentRef, product);
      // console.log(response);
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}

export const deleteData = (id) => {
  const documentRef = doc(productCollection, id);
  return async (dispatch) => {
    try {
      dispatch(deleteProduct(id));
      const response = await deleteDoc(documentRef);
      console.log(response);
    } catch (error) {
      console.log(error);
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}
