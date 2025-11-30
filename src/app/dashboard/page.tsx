import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import styles from "./dashboard.module.css";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Overview</h1>
          <p className={styles.subtitle}>
            Welcome back {session?.user?.name ? session.user.name : ""}.
          </p>
        </div>

        <form action="/api/auth/signout" method="post">
          <button className={styles.logoutButton}>Sign out</button>
        </form>
      </header>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Getting Started</h2>
          <p>Use this as your base for SaaS tools, CRMs, portals, and more.</p>
        </div>

        <div className={styles.card}>
          <h2>Next Steps</h2>
          <ul>
            <li>Add feature modules</li>
            <li>Create API endpoints</li>
            <li>Build reusable components</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
