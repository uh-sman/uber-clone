// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { Alert } from "react-native";

// const auth = getAuth();

// export const getErrorMessage = (error: unknown): string => {
//   let message: string;

//   if (error instanceof Error) {
//     message = error.message;
//   } else if (error && typeof error === "object" && "message" in error) {
//     message = String(error.message);
//   } else if (typeof error === "string") {
//     message = error;
//   } else {
//     message = "Unknown error, something went wrong!";
//   }

//   Alert.alert(message);
//   return message;
// };

// export const createUser = async (email: string, password: string): Promise<{ user?: any; error?: string }> => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     return { user: userCredential.user };
//   } catch (error: unknown) {
//     return { error: getErrorMessage(error) };
//   }
// };


const user = async () => {
    
}