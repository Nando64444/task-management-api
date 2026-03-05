<<<<<<< HEAD
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
=======
<<<<<<< HEAD
# Task Management API

This Task Management System is a web application built using NestJS, TypeScript, Prisma, and Docker. It allows you to manage tasks, organize them in lists, add tags, and create subtasks. Below, you will find information on setting up, running, and using this application.

## Getting Started
These instructions will help you set up and run the Task Management System on your local machine.

### Prerequisites
Make sure you have the following tools installed on your machine:

- Node.js
- Docker
### Installation
1. Clone the repository:

```shell
git clone https://github.com/helioLJ/task-management-api
cd task-management-api
```
2. Install project dependencies:

```shell
npm install
```

3. Create a .env and .env.test file in the project root and configure the environment variables as needed. You may want to configure the database connection settings and other environment-specific variables.

```shell
DATABASE_URL= // take this URL from docker-compose file
JWT_SECRET= // your secret
```

### Running the Application
To start the application, run the following commands:

```shell
# Start the PostgreSQL database in a Docker container
npm run db:dev:up

# Run the NestJS application
npm run start:dev
```

The application should now be accessible at http://localhost:3000.


### Database Migration
If you make changes to the data model (e.g., add new tables or modify existing ones), you can create a new database migration using Prisma. After making the changes, run the following commands:

```shell
# Generate a new migration
npm run prisma:dev:deploy
```

## API Documentation
The application provides an API with several endpoints for managing tasks, lists, tags, and subtasks. You can explore the API documentation by accessing the Swagger UI at http://localhost:3000/api.

## Usage
Once the application is up and running, you can use it to manage your tasks, lists, tags, and subtasks. Here are some of the key features:

- Tasks: Create, update, and delete tasks. Assign due dates, tags, and organize them into lists.
- Lists: Organize your tasks into lists for better task management.
- Tags: Add and manage tags to categorize your tasks and make them easier to find.
- Subtasks: Create subtasks for more detailed task management.
=======
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
>>>>>>> acfd92f177462d3a5bd5ecafcedd701d97357fd9
>>>>>>> 234bec5f03c86a21f1d225ec3fac1744cc5031da
