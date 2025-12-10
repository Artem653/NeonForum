import { Post, Tag } from "./types";

export const mockTags: Tag[] = [
  { id: 1, name: "Gaming" },
  { id: 2, name: "Coding" },
  { id: 3, name: "News" },
  { id: 4, name: "Hardware" },
  { id: 5, name: "Tutorials" },
];

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "Найкращі RGB сетапи 2025",
    content: "Огляд топових ігрових конфігурацій з підсвіткою.",
    likes: 42,
    tags: [1, 4],
    imageUrl: "https://i.imgur.com/qC2qVn4.jpeg",
  },
  {
    id: 2,
    title: "Як почати вивчати React з нуля",
    content: "Повний гайд для новачків.",
    likes: 15,
    tags: [2, 5],
    imageUrl: "https://i.imgur.com/6eQ3W0l.jpeg",
  },
  {
    id: 3,
    title: "Геймерські новини цього тижня",
    content: "Головні події в світі ігор.",
    likes: 70,
    tags: [1, 3],
    imageUrl: "https://i.imgur.com/7jz0VbM.jpeg",
  },
];