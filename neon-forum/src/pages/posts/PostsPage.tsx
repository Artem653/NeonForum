import { useEffect, useState } from "react";
import { Post } from "../../shared/types/post";
import { Tag } from "../../shared/types/tag";
import PostList from "../../components/post-list/PostList";
import SearchPost from "../../components/filters/SearchPost";
import SelectTags from "../../components/filters/SelectTags";
import SelectMinimumLikes from "../../components/filters/SelectMinimumLikes";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  const [searchValue, setSearchValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [likesMinimumValue, setLikesMinimumValue] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/posts").then(r => r.json()),
      fetch("http://localhost:5000/tags").then(r => r.json())
    ])
      .then(([postsData, tagsData]) => {
        setPosts(postsData);
        setFilteredPosts(postsData);
        setTags(tagsData);
      })
      .catch(() => setError("Помилка завантаження"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = posts;

    if (searchValue) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (selectedTags.length) {
      result = result.filter(p =>
        selectedTags.every(t => p.tags.includes(t))
      );
    }

    if (likesMinimumValue > 0) {
      result = result.filter(p => p.likes >= likesMinimumValue);
    }

    setFilteredPosts(result);
  }, [searchValue, selectedTags, likesMinimumValue, posts]);

  if (loading) return <div className="loader">⏳ Loading...</div>;
  if (error) return <div className="error">⚠ {error}</div>;

  return (
    <>
      <SearchPost value={searchValue} onChange={setSearchValue} />
      <SelectTags tags={tags} selected={selectedTags} onChange={setSelectedTags} />
      <SelectMinimumLikes value={likesMinimumValue} onChange={setLikesMinimumValue} />
      <PostList posts={filteredPosts} />
    </>
  );
}
