import { Avatar } from "./Avatar";

import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGwttLF9PHTUg/profile-displayphoto-shrink_200_200/0/1650401081873?e=1669248000&v=beta&t=72isiPKKiXDTBp9oFIiVmns65NDYniNL3VkNrofSWIs"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Roberto Nicolau</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 2h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
