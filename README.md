# Agamsiingh.AI – Full-Stack Website

A premium AI startup website for **Agamsiingh.AI**, built with Next.js 16, Tailwind CSS 4, Framer Motion, Express.js, and MongoDB.

---

## 🗂️ Project Structure

```
agamsiingh.ai/
├── frontend/          # Next.js 16 frontend
└── backend/           # Express.js + MongoDB API
```

---

## 🚀 Getting Started (Local Development)

### 1. Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
# Edit .env.local with your backend URL
npm run dev
```

Frontend runs at: **http://localhost:3000**

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env
# Fill in your MONGODB_URI in .env
node src/index.js
# or: npm run dev  (uses nodemon)
```

Backend runs at: **http://localhost:5000**

---

## 🌍 Deployment

### Frontend → Vercel

1. Push `frontend/` to a GitHub repo
2. Import project at [vercel.com](https://vercel.com)
3. Add environment variable: `NEXT_PUBLIC_BACKEND_URL=https://your-backend.onrender.com`
4. Deploy ✅

### Backend → Render

1. Push `backend/` to a GitHub repo
2. Create a new **Web Service** on [render.com](https://render.com)
3. Set **Build Command**: `npm install`
4. Set **Start Command**: `node src/index.js`
5. Add environment variables:
   - `MONGODB_URI` – your MongoDB Atlas connection string
   - `FRONTEND_URL` – your Vercel frontend URL
   - `NODE_ENV=production`
6. Deploy ✅

---

## 🔑 Environment Variables

### Frontend (`frontend/.env.local`)
| Variable | Description |
|---|---|
| `NEXT_PUBLIC_BACKEND_URL` | URL of the backend API |

### Backend (`backend/.env`)
| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `PORT` | Server port (default: 5000) |
| `FRONTEND_URL` | Frontend URL for CORS |
| `NODE_ENV` | `development` or `production` |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| POST | `/api/book-consultation` | Submit booking/contact form |
| GET | `/api/book-consultation` | Fetch all submissions (admin) |

### POST `/api/book-consultation` Payload

```json
{
  "name": "Agam Singh",
  "email": "agamcoder@gmail.com",
  "phone": "+91 85348 55501",
  "service": "AI Agent Development",
  "message": "I need an AI chatbot for my business."
}
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16, React 19, Tailwind CSS 4 |
| Animations | Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Fonts | Google Fonts – Inter, Poppins |
| Deploy | Vercel (frontend), Render (backend) |

---

**Founder:** Agam Singh  
**Contact:** agamcoder@gmail.com | +91 85348 55501  
**WhatsApp:** https://wa.me/918534855501
