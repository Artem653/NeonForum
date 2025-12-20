import { Post } from "../types/post";

export const POSTS: Post[] = [
  {
    id: 1,
    title: "Найкращі RGB-сетапи 2025",
    content: "Огляд топових геймерських конфігурацій...",
    image: "/assets/pc.jpg",
    likes: 120,
    tags: [
      { id: 1, name: "Gaming" },
      { id: 2, name: "Hardware" }
    ]
  },
  {
    id: 2,
    title: "React для початківців",
    content: "Основи React та хуки...",
    image: "/assets/pc.jpg",
    likes: 45,
    tags: [
      { id: 3, name: "Coding" }
    ]
  }
];