import { useAsyncData } from "#imports";

export interface Post {
  title: string;
  path: string;
  date: string;
  description?: string;
  tags?: string[];
}

export function usePosts() {
  const fetchPosts = () =>
    useAsyncData("posts", () =>
      queryCollection("post")
        .select("title", "path", "date", "description", "tags")
        .order("date", "DESC")
        .all()
    );

  const groupByTags = (posts: Post[]) => {
    const grouped = new Map<string, Post[]>();

    for (const post of posts) {
      for (const tag of post.tags ?? []) {
        if (!grouped.has(tag)) {
          grouped.set(tag, []);
        }
        grouped.get(tag)?.push(post);
      }
    }

    return grouped;
  };

  return {
    fetchPosts,
    groupByTags,
  };
}
