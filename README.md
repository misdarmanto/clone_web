## 📁 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/) + [Docker Compose](https://docs.docker.com/compose/) (for containerization)

## 📄 Environment Setup

### 1. Copy `.env.example` to `.env`

Start by copying the example environment file:

```bash
cp .env.example .env
```

Then, update the environment variables in `.env` as needed for your application.

## ⚙️ Installation

Install project dependencies using npm or yarn:

```bash
npm install
```

## 🧪 Running in Development Mode

To start the development server:

```bash
npm run dev
```

This will start Vite’s development server at [http://localhost:5173](http://localhost:5173) with hot-reload enabled.

## 🐳 Running with Docker

### Using Docker Compose

Build and start the Docker containers:

```bash
docker-compose up -d --build
```

The app will be available at [http://localhost:8080](http://localhost:8080)

> To rebuild without starting in detached mode:
>
> ```bash
> docker-compose build
> ```
