type UserAuth = {
  isAuthenticated: boolean;
};

type CreateUserAccount = {
  email: string;
  password: string;
  username: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

interface AuthActions {
  createUserAccount: (data: CreateUserAccount) => Promise<any>;
  loginUserAccount: (data: LoginUserAccount) => Promise<any>;
  isLoggedIn: () => Promise<boolean>;
  logout: () => void;
  getCurrentUser: () => Promise<any>;
}

export interface AuthState extends UserAuth, AuthActions {}
export type { CreateUserAccount, LoginUserAccount };
