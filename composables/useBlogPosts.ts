import { useAsyncData } from "#imports";

export interface BlogPost {
  title: string;
  path: string;
  date: string;
  description?: string;
  tags?: string[];
}

export function useBlogPosts() {
  const fetchPosts = () =>
    useAsyncData("blog-posts", () =>
      queryCollection("blog")
        .select("title", "path", "date", "description", "tags")
        .order("date", "DESC")
        .all()
    );

  const groupByTags = (posts: BlogPost[]) => {
    const grouped = new Map<string, BlogPost[]>();

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
