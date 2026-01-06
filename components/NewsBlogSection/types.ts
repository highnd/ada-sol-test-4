export interface Article {
  id: string | number;
  title: string;
  description: string;
  image: string;
  readingTime: number;
  href?: string;
}

export interface NewsBlogSectionProps {
  articles?: Article[];
  featuredArticles?: Article[];
}
