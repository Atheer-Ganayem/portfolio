import {
  GoOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  NodejsOriginalWordmark,
  MongodbOriginal,
  TypescriptOriginal,
  AmazonwebservicesOriginalWordmark,
  GoOriginalWordmark,
} from "devicons-react";

export const projects: Project[] = [
  {
    title: "SnapWS",
    description: `Websocket library built in Go.

    ##Features
    🔹 Minimal and easy to use API.

    🔹 Fully passes the autobahn-testsuite

    🔹 Automatic handling of ping/pong and close frames

    🔹 Connection management built-in (useful when communicating between different clients like chat apps)

    🔹 Room manager built-in (usefull for apps like group chats)
    
    🔹 Built-in easy to use rate limiter

    🔹 Written completely in standard library amd Go offical libraries, no external libraries imported

    🔹 Support for middlewares and connect/disconnect hooks.
    `,
    tech: [{ title: "Go", icon: GoOriginal }],
    imagesPath: "/projects/snapws/",
    images: ["ws-logo.png"],
    githubRepo: "https://github.com/Atheer-Ganayem/SnapWS",
  },
  {
    title: "Chatify",
    description: `Real-time direct messaging app for seamless one-on-one conversations made with my own Websocket library "SnapWS".

    ##Features
    🔹 Instant messaging with real-time updates (WebSocket)

    🔹 Sending messages, deleting messages, and creating conversations are all done in real-time

    🔹 User authentication and protected routes (JWT)

    🔹 User status (online/offline)
    
    🔹 Profile avatars with image upload (stored on AWS S3)

    🔹 Account settings (chaning name, password and avatar)

    🔹 Notifications

    🔹 Responsive, clean UI for desktop and mobile

    ##Tech Stack
    Frontend: Next.js, React, Tailwind CSS, TypeScript

    Backend: Go (Gin Framework), SnapWS (my Weboscket library)

    Storage: AWS S3

    Database: MongoDB

    `,
    link: "https://chatify-3-0.vercel.app",
    tech: [
      { title: "Go", icon: GoOriginal },
      { title: "Gin", icon: GoOriginalWordmark },
      { title: "SnapWS", icon: GoOriginalWordmark },
      { title: "Next.js", icon: NextjsOriginal },
      { title: "React", icon: ReactOriginal },
      { title: "Tailwind", icon: TailwindcssOriginal },
      { title: "MongoDB", icon: MongodbOriginal },
      { title: "Typescript", icon: TypescriptOriginal },
      { title: "AWS S3", icon: AmazonwebservicesOriginalWordmark },
    ],
    imagesPath: "/projects/chatify/",
    images: ["1.png"],
    githubRepo: "https://github.com/Atheer-Ganayem/Chatify-3.0",
    accounts: [
      { email: "user1@example.com", password: "123456" },
      { email: "user2@example.com", password: "123456" },
    ],
  },
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
];
