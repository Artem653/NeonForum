import { Tag } from "./tag";
import { User } from "./user";

export interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
  likes: number;
  tags: Tag[];
  likedBy?: User[];
}

