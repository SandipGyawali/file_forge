import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserInfo, UserInfoActions } from "./interfaces";

const useUserInfoStore = create<UserInfo & UserInfoActions>()(
  persist(
    (set, get) => ({
      userId: null,
      username: "",
      email: "",
      isEmailVerified: false,
      lastLoggedIn: null,
      setUserInfo: (userInfo: UserInfo) => {
        const { userId, username, email, isEmailVerified, lastLoggedIn } =
          userInfo;
        set({ userId, username, email, isEmailVerified, lastLoggedIn });
      },
      getUserInfo: () => {},
    }),
    {
      name: "userInfo",
      getStorage: () => sessionStorage,
    }
  )
);
