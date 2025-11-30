# 🚀 Next.js 14 Dashboard Starter
### Modern Full-Stack Template — Next.js App Router, NextAuth v4, Prisma 7, Neon PostgreSQL

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?style=for-the-badge&logo=prisma)
![NextAuth](https://img.shields.io/badge/NextAuth-v4-3AA675?style=for-the-badge&logo=auth0)
![PostgreSQL](https://img.shields.io/badge/Neon-Postgres-336791?style=for-the-badge&logo=postgresql)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📍 Overview

This project is a **clean, secure, and scalable dashboard starter template** built using modern, stable technologies:

- **Next.js 14 (App Router)**
- **NextAuth v4 (using Page Router for API auth)**
- **Prisma 7 ORM**
- **Neon PostgreSQL**
- **CSS Modules (no Tailwind)**

It is designed as a **foundation for SaaS apps, CRMs, admin dashboards, client portals, or internal tools**.  
Everything is written using clean code, stable libraries, and predictable architecture suitable for professional development.

---

## ✨ Features

- 🔐 **Secure authentication** using NextAuth v4 (Credentials Provider)
- 🧩 **Protected dashboard routes** using middleware & JWT sessions
- 🗄️ **Prisma 7 ORM with Neon PostgreSQL**
- 🧱 **Reusable layout system** (sidebar, header, content area)
- 🎨 **No Tailwind** — clean CSS modules + global CSS
- ⚙️ **App Router for pages** + **Page Router for auth** (NextAuth v4 requirement)
- 🧑‍💻 **Ready to extend for SaaS features** (billing, roles, settings, API endpoints)
- 🧼 Clean project architecture, production-ready

---

## 🗂️ Project Structure

```bash
my-dashboard/
│
├── prisma/
│   └── schema.prisma               # Prisma schema (Datasource URL lives in prisma.config.ts)
│
├── prisma.config.ts                # Prisma 7 datasource configuration
│
├── src/
│   ├── app/
│   │   ├── login/                  # Login page (App Router)
│   │   ├── register/               # Register page
│   │   ├── dashboard/              # Protected dashboard
│   │   ├── api/
│   │   │   └── register/           # Registration endpoint (App Router API)
│   │   └── globals.css             # Global CSS styling
│   │
│   ├── lib/
│   │   ├── auth.ts                 # NextAuth v4 configuration
│   │   └── prisma.ts               # Prisma client singleton
│   │
│   └── pages/
│       └── api/
│           └── auth/
│               └── [...nextauth].ts # NextAuth v4 route (must use Page Router)
│
├── middleware.ts                    # Protects dashboard routes using JWT token
└── README.md


---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 (App Router) |
| Backend | Next.js Route Handlers |
| Auth | NextAuth.js v4 (Credentials Provider) |
| Database | Neon PostgreSQL |
| ORM | Prisma 7 |
| Styling | CSS Modules + global.css |
| Session | JWT tokens |
| Deployment | Vercel or Docker |

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/<your-username>/<your-repo>.git  
cd <your-repo>

### 2️⃣ Install dependencies

npm install

### 3️⃣ Set environment variables

Create a .env file:

DATABASE_URL="postgresql://..."  
NEXTAUTH_URL="http://localhost:3000"  
NEXTAUTH_SECRET="your_generated_secret"

### 4️⃣ Set up the database (Neon)

npx prisma migrate dev

### 5️⃣ Start the development server

npm run dev

Your app runs at:

http://localhost:3000

---

## 🔐 Authentication Flow

Why Page Router for auth?  
NextAuth v4 requires its API routes to run from:

/pages/api/auth/[...nextauth].ts

The rest of the application uses the App Router.

---

## 🛡️ Route Protection

Middleware protects any route under /dashboard:

export const config = {  
  matcher: ["/dashboard/:path*", "/login", "/register"],  
};

- If the JWT is missing → redirect to /login  
- If the user is already logged in → block access to /login & /register  

---

## 🚀 Deployment (Vercel)

1. Push your repo to GitHub  
2. Go to https://vercel.com/import  
3. Select your repo  
4. Add environment variables:  

DATABASE_URL  
NEXTAUTH_URL  
NEXTAUTH_SECRET  

5. Deploy 🎉  

Prisma automatically handles migrations when deployed properly with Neon.

---

## 🧭 Roadmap

- 🔜 Role-Based Access Control (RBAC)  
- 🔜 User profile & settings page  
- 🔜 Modular sidebar navigation  
- 🔜 SaaS billing integration (Stripe)  
- 🔜 REST + GraphQL API modules  
- 🔜 Audit logs  
- 🔜 Light/Dark mode (CSS modules)  
- 🔜 Email verification + password reset  

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📄 License

This project is open-source under the MIT License.

---

## ⭐ Support

If you like this project, please star the repo — it helps with visibility and future updates 💙
