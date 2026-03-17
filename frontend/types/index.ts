export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: string;
  summary: string;
  description: string;
  badges?: string[];
};

export type ArtisanStory = {
  id: string;
  name: string;
  title: string;
  location: string;
  image: string;
  quote: string;
  body: string;
};
