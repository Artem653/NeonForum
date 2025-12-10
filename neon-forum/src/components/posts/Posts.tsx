import React, { useEffect, useState } from "react";
import styles from "./posts.module.css";

import { Post, Tag } from "./types";
import { mockPosts, mockTags } from "./mock-data";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [likesMinimumValue, setLikesMinimumValue] = useState<number>(0);

  useEffect(() => {
    setPosts(mockPosts);
    setTags(mockTags);
    setFilteredPosts(mockPosts);
  }, []);

  const toggleTag = (tagId: number) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((t) => t !== tagId)
        : [...prev, tagId]
    );
  };

  useEffect(() => {
    let result = posts;

    if (searchValue.trim() !== "") {
      result = result.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (selectedTags.length > 0) {
      result = result.filter((post) =>
        selectedTags.every((t) => post.tags.includes(t))
      );
    }

    if (likesMinimumValue > 0) {
      result = result.filter((post) => post.likes >= likesMinimumValue);
    }

    setFilteredPosts(result);
  }, [searchValue, selectedTags, likesMinimumValue, posts]);

  return (
    <div className={styles.postsPage}>
      <h2>Всі пости</h2>
      <p>Знайдено: {filteredPosts.length}</p>

      {/* ПОШУК */}
      <input
        type="text"
        className={styles.search}
        placeholder="Пошук постів..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {/* ТЕГИ */}
      <div className={styles.tags}>
        {tags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => toggleTag(tag.id)}
            className={`${styles.tag} ${
              selectedTags.includes(tag.id) ? styles.activeTag : ""
            }`}
          >
            {tag.name}
          </button>
        ))}
      </div>

      {/* ФІЛЬТР ПО ЛАЙКАМ */}
      <div className={styles.likes}>
        <label>
          <input
            type="radio"
            name="likes"
            onChange={() => setLikesMinimumValue(0)}
          />
          Будь-яка кількість
        </label>

        <label>
          <input
            type="radio"
            name="likes"
            onChange={() => setLikesMinimumValue(10)}
          />
          10+
        </label>

        <label>
          <input
            type="radio"
            name="likes"
            onChange={() => setLikesMinimumValue(50)}
          />
          50+
        </label>
      </div>

      {/* ПОСТИ */}
      <div className={styles.postsList}>
        {filteredPosts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <img src={post.imageUrl} alt="" />
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className={styles.likesCount}>❤️ {post.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}