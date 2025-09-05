export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
  coverImage?: string;
}

export interface BlogPostMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
  coverImage?: string;
}
