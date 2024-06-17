import {
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  NodejsOriginalWordmark,
  MongodbOriginal,
  TypescriptOriginal,
  ExpressOriginal,
  SocketioOriginal,
} from "devicons-react";

export const projects: Project[] = [
  {
    title: "EcoAlt",
    description:
      "Eco-Alt is an innovative e-commerce web app developed as a school project to promote sustainable living through eco-friendly products. The platform offers a diverse range of environmentally conscious alternatives to everyday items, such as plastic water bottles and plastic boxes. Designed with user experience in mind, Eco-Alt provides a seamless shopping experience where users can easily browse, compare, and purchase products that help reduce their ecological footprint. Discover how small changes can make a big difference with Eco-Alt, your go-to source for sustainable alternatives.",
    link: "https://eco-alt.vercel.app",
    tech: [
      { title: "next.js", icon: NextjsOriginal },
      { title: "react", icon: ReactOriginal },
      { title: "tailwind", icon: TailwindcssOriginal },
      { title: "node.js", icon: NodejsOriginalWordmark },
      { title: "mongodb", icon: MongodbOriginal },
      { title: "typescript", icon: TypescriptOriginal },
    ],
    imagesPath: "/projects/eco-alt/",
    images: ["1.png", "2.png"],
    githubRepo: "https://github.com/Atheer-Ganayem/new-EcoAlt",
    accounts: [{ email: "user@example.com", password: "123456" }],
  },
  {
    title: "Swipe",
    description:
      "Swipe is a dynamic social media application that revolutionizes the way users interact and share content online. With a sleek design and user-friendly interface, Swipe allows users to create profiles, log in, follow, like, comment ,and post. Whether you're sharing moments from your daily life, engaging with friends, or discovering new content, Swipe provides a vibrant community and robust features to enhance your social media experience.",
    link: "https://swipe-blond.vercel.app",
    tech: [
      { title: "Next.js", icon: NextjsOriginal },
      { title: "React", icon: ReactOriginal },
      { title: "Tailwind", icon: TailwindcssOriginal },
      { title: "Node.js", icon: NodejsOriginalWordmark },
      { title: "MongoDB", icon: MongodbOriginal },
      { title: "Typescript", icon: TypescriptOriginal },
    ],
    imagesPath: "/projects/swipe/",
    images: ["1.png", "2.png"],
    githubRepo: "https://github.com/Atheer-Ganayem/swipe",
    accounts: [{ email: "user@example.com", password: "123456" }],
  },
  {
    title: "Chatify",
    description:
      "Chatify is a sleek and modern real-time messaging app designed for seamless direct messaging (DM) experiences. With a focus on speed and simplicity, Chatify allows users to connect and communicate instantly, providing a smooth and intuitive interface for one-on-one conversations. Whether you're catching up with friends, coordinating plans, or just staying in touch, Chatify ensures your messages are delivered and received in real-time. Experience the future of direct messaging with Chatify—fast, reliable, and user-friendly.",
    link: "https://chtify-full.vercel.app",
    tech: [
      { title: "Next.js", icon: NextjsOriginal },
      { title: "React", icon: ReactOriginal },
      { title: "Tailwind", icon: TailwindcssOriginal },
      { title: "Node.js", icon: NodejsOriginalWordmark },
      { title: "MongoDB", icon: MongodbOriginal },
      { title: "Typescript", icon: TypescriptOriginal },
      { title: "Express.js", icon: ExpressOriginal },
      { title: "Socket.io", icon: SocketioOriginal },
    ],
    imagesPath: "/projects/chatify/",
    images: ["1.png"],
    githubRepo: "https://github.com/Atheer-Ganayem/Chtify-full",
    accounts: [
      { email: "user1@example.com", password: "123456" },
      { email: "user2@example.com", password: "123456" },
    ],
  },
];
