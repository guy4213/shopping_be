## ✅ shopping-list-backend/README.md

````markdown
# Shopping List Backend

This is the backend server for the Shopping List app, built with Node.js, Express, TypeScript, and Prisma.

## 🧰 Technologies Used

- **Node.js** + **Express**: RESTful API server
- **TypeScript**: Type-safe server logic
- **Prisma ORM**: Interact with MySQL database
- **MySQL (Aiven)**: Cloud database for structured item/category/cart data
- **dotenv**: Environment variable management

## ✨ Functionality

- Manage shopping list items, categories, and carts
- REST API for CRUD operations
- Each item is linked to a category and a cart
- Server validates and persists incoming data
- Exposes API endpoints consumed by the frontend

## 🛠 Development Setup

### 📦 Requirements

- Node.js (v18+ recommended)
- MySQL database (e.g., via Aiven or local)
- `prisma` CLI

### 🔧 Setup Steps

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

### ▶️ Running Locally

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
  ├── controllers/     # Express route logic
  ├── models/          # Type definitions / Prisma data logic
  ├── routes/          # API routes
  └── server.ts        # Main entrypoint
prisma/
  ├── schema.prisma    # DB schema
  └── migrations/      # Prisma migrations
```

```
```
