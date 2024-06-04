interface AuthState {
  isAUthenticated: boolean;
  setAuthStatus: (status: boolean) => void;
}

interface SignUpType {
  email: string;
  password: string;
  username: string;
}

interface LoginType {
  email: string;
  password: string;
}

export type { AuthState, SignUpType, LoginType };
