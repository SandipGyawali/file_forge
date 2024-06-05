import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState, CreateUserAccount, LoginUserAccount } from "./interfaces";
import { ID } from "appwrite";
import { account, storage } from "@/apwrite/config";

/**
 * @Note user authentication state-store
 */
const useAuthStore: any = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      createUserAccount: async ({
        email,
        password,
        username,
      }: CreateUserAccount): Promise<any> => {
        try {
          const userAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
          );

          if (userAccount) {
            await get().loginUserAccount({ email, password });
          }
        } catch (err: any) {
          throw err;
        }
      },
      loginUserAccount: async ({
        email,
        password,
      }: LoginUserAccount): Promise<any> => {
        try {
          const userAccount = await account.createEmailPasswordSession(
            email,
            password
          );

          set({
            isAuthenticated: true,
          });
          return userAccount;
        } catch (err: any) {
          console.log("Error: ", err);
        }
      },
      isLoggedIn: async (): Promise<boolean> => {
        try {
          const user = await useAuthStore.getCurrentUser();

          return Boolean(user);
        } catch (err: any) {}

        return false;
      },
      getCurrentUser: async (): Promise<any> => {
        try {
          return account.get();
        } catch (err: any) {
          console.log("Current User error: ", err);
        }
      },
      logout: async () => {
        try {
          set({ isAuthenticated: false });
          return await account.deleteSession("current");
        } catch (err: any) {
          console.log("logout error: " + err);
        }
      },
    }),
    {
      name: "auth",
      getStorage: () => localStorage,
    }
  )
);

export { useAuthStore };
