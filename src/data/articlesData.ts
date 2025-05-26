
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  url: string;
  size: 'big' | 'small';
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Campus Life During Festival Season",
    excerpt: "Exploring the vibrant atmosphere and activities during MIT's biggest cultural festivals.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "#",
    size: "big"
  },
  {
    id: 2,
    title: "Interview with Alumni Innovators",
    excerpt: "Graduates share their journey after MIT.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "#",
    size: "small"
  },
  {
    id: 3,
    title: "Tech Trends of 2024",
    excerpt: "The latest innovations from student projects.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "#",
    size: "small"
  },
  {
    id: 4,
    title: "A Day in the Life of an MIT Student",
    excerpt: "From sunrise to sunset - the typical day.",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "#",
    size: "small"
  },
  {
    id: 5,
    title: "Sports at MIT: Beyond Academics",
    excerpt: "Exploring athletic achievements on campus.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "#",
    size: "small"
  },
  {
    id: 6,
    title: "The Future of AI: Transforming Industries",
    excerpt: "An in-depth look at how AI is revolutionizing various sectors.",
    image: "https://cdn.prod.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg",
    url: "#",
    size: "small"
  }
];
