export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
}

export interface ProfileState {
  isLogged: boolean;
  user: User | null;
}
