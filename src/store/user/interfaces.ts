interface UserInfo {
  userId: string | null;
  username: string;
  email: string;
  isEmailVerified: boolean;
  lastLoggedIn: Date | null;
}

interface UserInfoActions {
  getUserInfo: (userInfo: UserInfo) => void;
  setUserInfo: (userInfo: UserInfo) => void;
}

export type { UserInfo, UserInfoActions };
