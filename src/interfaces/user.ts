export interface User {
  readonly userID: string;
  name: string;
  email: string;
  tele_number: number;
  loggedIn(): boolean;
}

export interface User {
  address?: string;
}
