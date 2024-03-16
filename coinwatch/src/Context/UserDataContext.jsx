import { createContext, useContext } from "react";
import { db } from "../Components/firebase";
import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { UserAuth } from "./AuthContext";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  // const [userData, setUserData] = useState({});
  const { user } = UserAuth();

  //   console.log(user.displayName, user.email);

  const registerUserDoc = async () => {
    try {
      // Check if the user document already exists
      const userQuery = query(
        collection(db, user.email),
        where("email", "==", user.email)
      );
      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.empty) {
        // If the query result is empty, create a new document
        await setDoc(doc(db, user.email, "user info"), {
          timestamp: serverTimestamp(), // Add a timestamp field with the current server time
          name: user.displayName,
          email: user.email,
          user_settings: { theme: "black" },
        });
        await setDoc(doc(db, user.email, "user data"), {
          timestamp: serverTimestamp(), // Add a timestamp field with the current server time
          user_income_data: {
            income_type_salary: 0,
            user_income_passive_income: 0,
            user_income_gift: 0,
            user_income_royalty: 0,
            user_income_freelance: 0,
            user_income_commission: 0,
            user_income_pension: 0,
            user_income_others: 0,
          },
          balance: 0,
          expenses: 0,
          investments: 0,
          subscription: 0,
        });
        console.log("Document Created with ID: ", user.uid);
      } else {
        // If the user document already exists, log a message
        console.log("User document already exists");
      }
    } catch (e) {
      console.error("Error checking or adding document: ", e);
    }
  };

  const readUserData = async () => {
    try {
      const docRef = doc(db, user.email, "user data");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("user data:", docSnap.data());
        const userData = docSnap.data();
        return userData;
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (e) {
      console.error("Error getting data document: ", e);
    }
  };

  const readUserInfo = async () => {
    try {
      const docRef = doc(db, user.email, "user info");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userInfo = docSnap.data();
        return userInfo;
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (e) {
      console.error("Error getting info document: ", e);
    }
  };

  //   useEffect(() => {
  //     registerUserDoc();
  //   }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <UserDataContext.Provider
      value={{ registerUserDoc, readUserData, readUserInfo }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const UserData = () => {
  return useContext(UserDataContext);
};
