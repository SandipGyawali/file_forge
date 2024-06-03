interface AuthState {
  isAUthenticated: boolean;
  setAuthStatus: (status: boolean) => void;
}

interface SignUpType {
  email: string;
  password: string;
  username: string;
}

export type { AuthState, SignUpType };
