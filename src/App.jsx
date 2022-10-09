import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGwttLF9PHTUg/profile-displayphoto-shrink_200_200/0/1650401081873?e=1669248000&v=beta&t=72isiPKKiXDTBp9oFIiVmns65NDYniNL3VkNrofSWIs",
      name: "Roberto Nicolau",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Novo post publicado" },
      { type: "link", content: "https://github.com/RobertoNicolau" },
    ],
    publishedAt: new Date("2022-09-29 21:30:00"),
  },
  /* {
    id: 2,
    author: {
      avatarUrl:
        "https://cdn.dribbble.com/users/759083/screenshots/16022876/media/8e462db1bac370883bf90c94a77d598c.jpg?compress=1&resize=800x600&vertical=top",
      name: "Noia da Internet",
      role: "Aviãozinho",
    },
    content: [
      { type: "paragraph", content: "Novo post publicado" },
      { type: "link", content: "https://github.com/RobertoNicolau" },
      { type: "paragraph", content: "Novo post publicado" },
      { type: "paragraph", content: "Novo post publicado" },
    ],
    publishedAt: new Date("2022-05-04 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl:
        "https://cdn.dribbble.com/users/759083/screenshots/17196153/media/a437d241c694189e6738c54dcdf9cfd6.jpg?compress=1&resize=800x600&vertical=top",
      name: "Robertonha",
      role: "Web Student",
    },
    content: [
      { type: "paragraph", content: "Novo post publicado" },
      { type: "link", content: "https://github.com/RobertoNicolau" },
    ],
    publishedAt: new Date("2022-05-06 20:00:00"),
  }, */
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
