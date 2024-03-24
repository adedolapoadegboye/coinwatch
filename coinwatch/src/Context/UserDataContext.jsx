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
              date: new Date(),
              amount: 0,
              type: "Salary/Wage",
              notes: "",
            },
          ],
          balance: 0,
          expenses: [
            {
              date: new Date(),
              name: "",
              amount: 0,
              type: "",
              notes: "",
            },
          ],
          investments: [
            {
              date: new Date(),
              name: "",
              amount: 0,
              type: "",
              notes: "",
            },
          ],
          donations: [
            {
              date: new Date(),
              name: "",
              amount: 0,
              type: "",
              notes: "",
            },
          ],
          subscriptions: [
            {
              date: new Date(),
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

  function formatTimestamp(timestamp) {
    // Extract seconds and nanoseconds from the Timestamp object
    const { seconds, nanoseconds } = timestamp;

    // Convert nanoseconds to milliseconds
    const milliseconds = nanoseconds / 1000000;

    // Create a Date object using the seconds and milliseconds
    const date = new Date(seconds * 1000 + milliseconds);

    // Format the date string
    const options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    const dateString = date.toLocaleString("en-US", options);

    return dateString;
  }

  const readUserDataWithinDateRange = async (startDate, endDate) => {
    const userData = await readUserData();
    if (userData) {
      // Filter incomes within the date range
      const filteredIncomes = userData.incomes.filter((income) => {
        const incomeDate = new Date(formatTimestamp(income.date));
        return incomeDate >= startDate && incomeDate <= endDate;
      });

      // Filter expenses within the date range
      const filteredExpenses = userData.expenses.filter((expense) => {
        const expenseDate = new Date(formatTimestamp(expense.date));
        return expenseDate >= startDate && expenseDate <= endDate;
      });

      // Filter investments within the date range
      const filteredInvestments = userData.investments.filter((investment) => {
        const investmentDate = new Date(formatTimestamp(investment.date));
        return investmentDate >= startDate && investmentDate <= endDate;
      });

      // Filter donations within the date range
      const filteredDonations = userData.donations.filter((donation) => {
        const donationDate = new Date(formatTimestamp(donation.date));
        return donationDate >= startDate && donationDate <= endDate;
      });

      // Filter subscriptions within the date range
      const filteredSubscriptions = userData.subscriptions.filter(
        (subscription) => {
          const subscriptionDate = new Date(formatTimestamp(subscription.date));
          return subscriptionDate >= startDate && subscriptionDate <= endDate;
        }
      );

      // Return the filtered data
      return {
        incomes: filteredIncomes,
        expenses: filteredExpenses,
        investments: filteredInvestments,
        donations: filteredDonations,
        subscriptions: filteredSubscriptions,
      };
    } else {
      console.log("Loading user data");
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
            date: newData.date,
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
            date: newData.date,
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
            date: newData.date,
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
            date: newData.date,
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
            date: newData.date,
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
