import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
          {publishedDateFormatted}
        </time>
      </header>
      <div className={styles.content}>
        <p>Novo Post criado e Publicado!</p>

        <a href="https://github.com/RobertoNicolau">
          github.com/RobertoNicolau
        </a>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
