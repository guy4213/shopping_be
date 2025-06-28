## ✅ shopping-list-backend/README.md

````markdown
# Shopping List Backend

This is the backend server for the Shopping List app, built with Node.js, Express, TypeScript, and Prisma.

## 📆 Requirements

- Node.js (v18+ recommended)
- MySQL database (e.g., via Aiven or local)
- `prisma` CLI

## 🔧 Setup

1. **Clone the repo**:

   ```bash
   git clone https://github.com/your-username/shopping-list-backend.git
   cd shopping-list-backend
````

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the root:

   ```env
   DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE
   ```

4. **Generate Prisma Client**:

   ```bash
   npx prisma generate
   ```

5. **Create DB schema (only once)**:

   ```bash
   npx prisma migrate dev --name init
   ```

## ▶️ Running Locally

Start the server in dev mode:

```bash
npm run dev
```

Or build and run:

```bash
npm run build
npm start
```

The server will start on:

```
http://localhost:3000
```

## 📁 Project Structure

```
src/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── server.ts
prisma/
  ├── schema.prisma
  └── migrations/
```

````

---

## ✅ shopping-list-frontend/README.md

```markdown
# Shopping List Frontend

This is the frontend for the Shopping List app, built with React and Vite.

## 📆 Requirements

- Node.js (v18+ recommended)
- Backend server running at `http://localhost:3000`

## 🔧 Setup

1. **Clone the repo**:

   ```bash
   git clone https://github.com/your-username/shopping-list-frontend.git
   cd shopping-list-frontend
````

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file:

   ```env
   VITE_API_URL=http://localhost:3000
   ```

   This ensures API requests go to your local backend.

## ▶️ Running Locally

```bash
npm run dev
```

Visit the frontend in your browser:

```
http://localhost:5173
```

## 🧐 API Usage Example

Your frontend should call the backend like this:

```ts
fetch(`${import.meta.env.VITE_API_URL}/api/items`)
```

## 🛠️ Folder Structure

```
src/
  ├── components/
  ├── pages/
  ├── stores/
  ├── App.tsx
  └── main.tsx
.env
vite.config.ts
```

```
```
