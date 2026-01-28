---
title: ブログ
description: ISMS構築に役立つTips、審査対応のポイント、規格改訂情報などを発信
layout: page
sidebar: false
---

<script setup>
import { data as posts } from './posts.data.ts'
import { ref, computed } from 'vue'

const selectedTag = ref('')

const allTags = computed(() => {
  const tags = new Set()
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
})

const filteredPosts = computed(() => {
  if (!selectedTag.value) return posts
  return posts.filter(post => post.tags.includes(selectedTag.value))
})

function selectTag(tag) {
  selectedTag.value = selectedTag.value === tag ? '' : tag
}
</script>

# ブログ

ISMS構築に役立つTips、審査対応のポイント、規格改訂情報などを発信しています。

<div class="blog-tags" v-if="allTags.length > 0">
  <span class="tag-label">タグ:</span>
  <button
    v-for="tag in allTags"
    :key="tag"
    :class="['tag-button', { active: selectedTag === tag }]"
    @click="selectTag(tag)"
  >
    {{ tag }}
  </button>
  <button
    v-if="selectedTag"
    class="tag-button clear"
    @click="selectedTag = ''"
  >
    クリア
  </button>
</div>

<div class="blog-list">
  <article v-for="post in filteredPosts" :key="post.url" class="blog-post">
    <h2>
      <a :href="post.url">{{ post.title }}</a>
    </h2>
    <div class="post-meta">
      <time :datetime="post.date.time">{{ post.date.string }}</time>
      <span class="author">{{ post.author }}</span>
    </div>
    <p class="post-description">{{ post.description }}</p>
    <div class="post-tags" v-if="post.tags.length > 0">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="post-tag"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</div>

<p v-if="filteredPosts.length === 0" class="no-posts">
  該当する記事がありません。
</p>

<style scoped>
.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.tag-label {
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.tag-button {
  padding: 4px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.tag-button:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.tag-button.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: white;
}

.tag-button.clear {
  background: transparent;
  color: var(--vp-c-text-3);
}

.blog-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.blog-post {
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s;
}

.blog-post:hover {
  border-color: var(--vp-c-brand-1);
}

.blog-post h2 {
  margin: 0 0 12px 0;
  font-size: 1.25rem;
  border: none;
  padding: 0;
}

.blog-post h2 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.blog-post h2 a:hover {
  color: var(--vp-c-brand-1);
}

.post-meta {
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
}

.post-description {
  color: var(--vp-c-text-2);
  margin: 0 0 12px 0;
  line-height: 1.6;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.post-tag {
  padding: 2px 10px;
  background: var(--vp-c-default-soft);
  border-radius: 12px;
  font-size: 12px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}

.post-tag:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.no-posts {
  text-align: center;
  color: var(--vp-c-text-3);
  padding: 48px;
}
</style>
