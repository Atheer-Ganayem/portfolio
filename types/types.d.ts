interface Project {
  title: string;
  description: string;
  link?: string;
  tech: { title: string; icon: React.FC<any> }[];
  imagesPath: string;
  images: string[];
  githubRepo: string;
  accounts?: Account[];
}

interface Account {
  email: string;
  password: string;
}
