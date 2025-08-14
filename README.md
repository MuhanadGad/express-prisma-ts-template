# 🚀 Express.js Backend Boilerplate

A modern, TypeScript-first backend starter for building scalable REST APIs with **Express**, **Prisma**, and **Zod**.  
This template includes sensible defaults, security best practices, and developer-friendly tooling.

---

## 📦 Tech Stack

- **[Express](https://expressjs.com/)** – Minimal and flexible Node.js web application framework
- **[Prisma](https://www.prisma.io/)** – Next-generation ORM for type-safe database access
- **[Zod](https://zod.dev/)** – TypeScript-first schema validation
- **[Helmet](https://helmetjs.github.io/)** – Security middleware for HTTP headers
- **[Pino](https://getpino.io/#/)** – High-performance logging
- **[Vitest](https://vitest.dev/)** – Unit & integration testing
- **[Supertest](https://github.com/visionmedia/supertest)** – HTTP assertions for Express testing

---

## 🛠 Project Structure

```

prisma/ # Database schema and Prisma configuration files

src/
    common/ # Shared resources across the app
        tests/ # Unit and integration tests
        middleware/ # Express middleware functions (auth, validation, logging)
        utils/ # General-purpose helper functions
        validation/ # Zod schemas and input validation logic

    lib/ # Core configurations and singletons
        prisma.ts # Prisma client instance

    modules/ # Feature-based modules
        users/ # Example: user feature (controller, service, repo, router)

    router/ # Central route registration and app-level routing

    index.ts # Main application entrypoint (Express app creation)
    server.ts # Server bootstrap (starts listening for requests)

```

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/express-backend-boilerplate.git
cd express-backend-boilerplate
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

Example:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
PORT=3000
```

### 4️⃣ Run database migrations

```bash
npx prisma migrate dev --name init
```

### 5️⃣ Start development server

```bash
npm run dev
```

API will be available at:

```
http://localhost:8888
```

---

## 📜 Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start development server with hot reload |
| `npm run build`     | Build the project with `tsc` and `tsup`  |
| `npm start`         | Run compiled production build            |
| `npm test`          | Run tests with Vitest                    |
| `npx prisma studio` | Open Prisma Studio for DB management     |

---

## 🧪 Testing

This boilerplate comes with **Vitest** and **Supertest** pre-configured for fast and type-safe tests.

Run all tests:

```bash
npm test
```

---

## 🛡 Security

- **Helmet** for setting secure HTTP headers
- **CORS** configured for cross-origin requests
- Input validation using **Zod** to prevent malformed requests

---

## ✨ Features Out-of-the-Box

- Modular folder structure for scalability
- Pre-configured Prisma ORM with migrations
- Centralized request validation using Zod
- Ready-to-use logger with Pino & Pino-pretty
- API testing setup with Vitest + Supertest
- ES Module (`type: module`) + modern build with TSUP

---

## 🤝 Contributing

Feel free to fork this repo and adapt it to your own needs. Pull requests are welcome for improvements.

---
