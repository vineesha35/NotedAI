# ✨ AI Notes App | Quill

A modern, full-stack Notes Application built with **Next.js (App Router + TypeScript)**, **TailwindCSS**, **Shadcn UI**, and **Supabase**.  
Includes features like user authentication, CRUD for notes, AI-powered summarization and explanations, and smooth state management using **React Query**.

---

## 🚀 Features

### 🔐 User Authentication
- Google & Email/Password login via Supabase Auth  
- Protected routes for authenticated users  
- User metadata management (name, email, avatar)

### 📝 Notes Management
- Create, Read, Update, and Delete (CRUD) personal notes  
- Notes stored in Supabase Postgres DB  
- Auto-generated titles from note content  
- Responsive, animated note input UI

### 🤖 AI Features (via Groq API)
- `Summarize`: Get a brief TL;DR  
- `Explain`: Detailed explanations of any note  
- `Insight`: Smart suggestions based on content

### ⚙️ State Management
- **React Query** handles:  
  - Data fetching  
  - Mutations  
  - Cache invalidation  
  - Optimistic UI updates

### 💅 UI & Styling
- Built with **TailwindCSS** & **Shadcn UI**  
- Fully responsive & supports **dark mode**  
- Smooth animations with **Framer Motion**

---

## 📦 Tech Stack

| Layer     | Tech                          |
|-----------|-------------------------------|
| Frontend  | Next.js (App Router), TypeScript |
| Backend   | Supabase (Auth + DB)          |
| Styling   | TailwindCSS, Shadcn UI        |
| AI        | Groq LLM API                  |
| State     | React Query                   |
| Hosting   | Vercel                        |

---

## 👩‍💻 Getting Started
### 1. Clone the repository

```bash
git clone https://github.com/vineesha35/NotedAI.git
cd notedai




