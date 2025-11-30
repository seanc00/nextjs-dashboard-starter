import styles from "./dashboard.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Dashboard</div>
        <nav className={styles.nav}>
          <a href="/dashboard">Overview</a>
        </nav>
      </aside>

      <section className={styles.content}>
        {children}
      </section>
    </main>
  );
}
