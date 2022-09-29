import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1560415755-bd80d06eda60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
      />
      <div className={styles.profile}>
        <Avatar
          hasBorder
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGwttLF9PHTUg/profile-displayphoto-shrink_200_200/0/1650401081873?e=1669248000&v=beta&t=72isiPKKiXDTBp9oFIiVmns65NDYniNL3VkNrofSWIs"
        />
        <strong>Roberto Nicolau</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
