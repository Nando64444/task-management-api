# Task Management API

Backend API built with NestJS, Prisma and PostgreSQL for managing users, tasks, tags and subtasks.

## Prerequisites

- Node.js 18+
- Docker (optional for local Postgres)

## Setup

```bash
npm install
```

Create `.env` and `.env.test` files in project root:

```env
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret
```

## Run

```bash
npm run db:dev:up
npm run prisma:dev:deploy
npm run start:dev
```

## Useful scripts

```bash
npm run lint
npm run build
npm run test
npm run test:e2e
```

## API docs

Swagger UI is available at `http://localhost:3000/docs`.
