# Task Management API 🚀
**A modern, secure RESTful backend for task tracking and organization.**

Built with **NestJS**, **TypeScript**, **Prisma ORM**, **PostgreSQL**, and **JWT authentication**. Supports full CRUD for tasks, lists, tags, subtasks, user registration/login, and proper authorization (only owners can access/modify their data).

This project is ideal as a backend foundation for todo apps, productivity tools, or learning advanced NestJS patterns.

Live Swagger docs: [http://localhost:3000/api](http://localhost:3000/api) (after running locally)

## ✨ Features

- **User Authentication** — Register/login with email + password, JWT tokens
- **Task Management** — Create, read, update, delete tasks with title, description, due date, priority, status
- **Lists & Organization** — Group tasks into customizable lists
- **Tags** — Add multiple labels/tags to tasks for filtering
- **Subtasks** — Hierarchical subtasks for complex items
- **Validation & Error Handling** — Class-validator + custom exceptions
- **API Documentation** — Built-in Swagger UI/OpenAPI
- **Docker & PostgreSQL** — Easy setup with Docker Compose
- **Prisma ORM** — Type-safe database queries and migrations
- **Modular Structure** — Clean architecture (controllers, services, modules)

## 🛠 Tech Stack

- **Backend**: NestJS (v10+)
- **Language**: TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: JWT (passport-jwt)
- **Validation**: class-validator + class-transformer
- **Docs**: @nestjs/swagger
- **Dev Tools**: Docker, ESLint, Prettier, Pactum (for API testing)

## 📋 Prerequisites

- Node.js ≥ 18
- npm or yarn
- PostgreSQL (or Docker for easy setup)
- Git

## 🚀 Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/Nando64444/task-management-api
   cd task-management-api
