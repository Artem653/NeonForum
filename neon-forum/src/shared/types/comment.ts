import { User } from "./user";

export interface Comment {
  id: number;
  body: string;
  createdAt: string;
  author: User;
}

