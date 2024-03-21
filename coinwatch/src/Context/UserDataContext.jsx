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
  updateDoc,
} from "firebase/firestore";
import { UserAuth } from "./AuthContext";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  // const [userData, setUserData] = useState({});
  const { user } = UserAuth();
  // console.log(user.displayName, user.email);

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
          incomes: [
            {
              date_received: "",
              amount: 0,
              type: "Salary/Wage",
              notes: "",
            },
          ],
          balance: 0,
          expenses: [
            {
              date_received: "",
              name: "",
              amount: 0,
              type: "",
              notes: "",
            },
          ],
          investments: [
            {
              date_received: "",
              name: "",
              amount: 0,
              type: "",
              notes: "",
            },
          ],
          donations: [
            {
              date_received: "",
              name: "",
              amount: 0,
              type: "",
              notes: "",
            },
          ],
          subscriptions: [
            {
              date_received: "",
              name: "",
              amount: 0,
              type: "",
              notes: "",
            },
          ],
        });
        console.log("Document Created with ID: ", user.uid);
      } else {
        // If the user document already exists, log a message
        // console.log("User document already exists");
      }
    } catch (e) {
      // console.error("Error checking or adding document: ", e);
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
        // console.log("No such document!");
      }
    } catch (e) {
      // console.error("Error getting data document: ", e);
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
      // console.error("Error getting info document: ", e);
    }
  };

  const readUserDataWithinDateRange = async (start, end) => {
    try {
      const userDataRef = doc(db, user.email, "user data");
      const userDataSnapshot = await getDoc(userDataRef);

      if (userDataSnapshot.exists()) {
        const userData = userDataSnapshot.data();

        // Filter each array in the "user data" document based on the "date_received" field
        const filteredIncomes = userData.incomes.filter((income) => {
          const dateReceived = new Date(income.date_received);
          return dateReceived >= start && dateReceived <= end;
        });

        const filteredExpenses = userData.expenses.filter((expense) => {
          const dateReceived = new Date(expense.date_received);
          return dateReceived >= start && dateReceived <= end;
        });

        const filteredInvestments = userData.investments.filter(
          (investment) => {
            const dateReceived = new Date(investment.date_received);
            return dateReceived >= start && dateReceived <= end;
          }
        );

        const filteredDonations = userData.donations.filter((donation) => {
          const dateReceived = new Date(donation.date_received);
          return dateReceived >= start && dateReceived <= end;
        });

        const filteredSubscriptions = userData.subscriptions.filter(
          (subscription) => {
            const dateReceived = new Date(subscription.date_received);
            return dateReceived >= start && dateReceived <= end;
          }
        );

        // console.log(
        //   filteredIncomes,
        //   filteredExpenses,
        //   filteredInvestments,
        //   filteredDonations,
        //   filteredSubscriptions
        // );

        // Return the filtered data
        return {
          incomes: filteredIncomes,
          expenses: filteredExpenses,
          investments: filteredInvestments,
          donations: filteredDonations,
          subscriptions: filteredSubscriptions,
        };
      } else {
        // console.log("No 'user data' document found.");
        return null;
      }
    } catch (error) {
      // console.error("Error reading user data within date range:", error);
    }
  };

  const updateIncomeDoc = async (newData) => {
    try {
      const userDocRef = doc(db, user.email, "user data");
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const updatedIncomes = [
          ...userData.incomes,
          {
            date_received: newData.date,
            amount: newData.amount,
            type: newData.category,
            notes: newData.notes,
          },
        ];

        await updateDoc(userDocRef, {
          incomes: updatedIncomes,
        });

        // console.log("Document Updated for user: ", user.email);
      } else {
        // console.log("User document does not exist");
      }
    } catch (e) {
      // console.error("Error updating document: ", e);
    }
  };

  const updateExpensesDoc = async (newData) => {
    try {
      const userDocRef = doc(db, user.email, "user data");
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const updatedExpenses = [
          ...userData.expenses,
          {
            date_received: newData.date,
            amount: newData.amount,
            type: newData.category,
            notes: newData.notes,
          },
        ];

        await updateDoc(userDocRef, {
          expenses: updatedExpenses,
        });

        console.log("Document Updated for user: ", user.email);
      } else {
        console.log("User document does not exist");
      }
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const updateDonationsDoc = async (newData) => {
    try {
      const userDocRef = doc(db, user.email, "user data");
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const updatedDonations = [
          ...userData.donations,
          {
            date_received: newData.date,
            amount: newData.amount,
            type: newData.category,
            notes: newData.notes,
          },
        ];

        await updateDoc(userDocRef, {
          donations: updatedDonations,
        });

        console.log("Document Updated for user: ", user.email);
      } else {
        console.log("User document does not exist");
      }
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const updateInvestmentsDoc = async (newData) => {
    try {
      const userDocRef = doc(db, user.email, "user data");
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const updatedInvestments = [
          ...userData.investments,
          {
            date_received: newData.date,
            amount: newData.amount,
            type: newData.category,
            notes: newData.notes,
          },
        ];

        await updateDoc(userDocRef, {
          investments: updatedInvestments,
        });

        console.log("Document Updated for user: ", user.email);
      } else {
        console.log("User document does not exist");
      }
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const updateSubscriptionsDoc = async (newData) => {
    try {
      const userDocRef = doc(db, user.email, "user data");
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const updatedSubscriptions = [
          ...userData.subscriptions,
          {
            date_received: newData.date,
            amount: newData.amount,
            type: newData.category,
            notes: newData.notes,
          },
        ];

        await updateDoc(userDocRef, {
          subscriptions: updatedSubscriptions,
        });

        console.log("Document Updated for user: ", user.email);
      } else {
        console.log("User document does not exist");
      }
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  return (
    <UserDataContext.Provider
      value={{
        registerUserDoc,
        readUserData,
        readUserInfo,
        readUserDataWithinDateRange,
        updateIncomeDoc,
        updateExpensesDoc,
        updateDonationsDoc,
        updateInvestmentsDoc,
        updateSubscriptionsDoc,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const UserData = () => {
  return useContext(UserDataContext);
};
