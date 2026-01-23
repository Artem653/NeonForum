import { useEffect, useState } from "react";
import PostList from "../../components/post-list/PostList";
import { Post, Tag } from "../../shared/types";
import SearchPost from "../../components/filters/SearchPost";
import SelectTags from "../../components/filters/SelectTags";
import SelectMinimumLikes from "../../components/filters/SelectMinimumLikes";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const [searchValue, setSearchValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [likesMinimumValue, setLikesMinimumValue] = useState(0);

  useEffect(() => {
    // TEST DATA
    const testTags = [
      { id: 1, name: "Gaming" },
      { id: 2, name: "Coding" },
    ];

    const testPosts: Post[] = [
      {
        id: 1,
        title: "RGB сетапи",
        content: "Дуже довгий текст поста...",
        likes: 156,
        tags: [testTags[0]],
      },
    ];

    setTags(testTags);
    setPosts(testPosts);
    setFilteredPosts(testPosts);
  }, []);

  useEffect(() => {
    const result = posts.filter((post) => {
      const matchTitle = post.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const matchLikes = post.likes >= likesMinimumValue;

      const matchTags =
        selectedTags.length === 0 ||
        post.tags.some((t) => selectedTags.includes(t.id));

      return matchTitle && matchLikes && matchTags;
    });

    setFilteredPosts(result);
  }, [searchValue, selectedTags, likesMinimumValue, posts]);

  return (
    <>
      <SearchPost value={searchValue} onChange={setSearchValue} />
      <SelectTags tags={tags} selected={selectedTags} onChange={setSelectedTags} />
      <SelectMinimumLikes value={likesMinimumValue} onChange={setLikesMinimumValue} />
      <PostList posts={filteredPosts} />
    </>
  );
}

