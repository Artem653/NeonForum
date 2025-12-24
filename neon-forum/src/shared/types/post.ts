import { Comment } from "./comment";
import { User } from "./user";

export interface Post {
  id: number;
  title: string;
  body: string;
  likesCount: number;
  createdAt: string;
  comments?: Comment[];
  likedBy?: User[];
}


