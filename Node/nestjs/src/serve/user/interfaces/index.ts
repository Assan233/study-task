export interface User {
  id: number;
  name: string;
}

export interface CreateUser {
  name: string;
  password: string;
}

export type UpdateUser = CreateUser & { id: number };
