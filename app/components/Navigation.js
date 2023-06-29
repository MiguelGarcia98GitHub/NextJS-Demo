import Link from "next/link";
import styles from "./Navigation.module.css";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];

export function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {links.map(({ label, route }) => {
            console.log({ label, route });

            return (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
