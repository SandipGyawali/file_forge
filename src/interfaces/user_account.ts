interface CreateUserAccount {
  email: string;
  password: string;
  username: string;
}

interface LoginUserAccount {
  email: string;
  password: string;
}

export type { CreateUserAccount, LoginUserAccount };
