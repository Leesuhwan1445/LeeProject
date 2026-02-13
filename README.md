# Lee Project

Node.js + Express + React(TypeScript) + PostgreSQL 풀스택 프로젝트입니다.

## 구조

- `client/` — React + TypeScript + Vite + Tailwind CSS
- `server/` — Node.js + Express + TypeScript
- PostgreSQL — DB 연결용 설정 (`server/.env`)

## 사전 요구사항

- Node.js 18+
- PostgreSQL
- npm 또는 yarn

## 설정

### 1. 의존성 설치

```bash
npm install
cd server && npm install && cd ..
cd client && npm install && cd ..
```

### 2. PostgreSQL

로컬에서 PostgreSQL이 실행 중이어야 합니다. DB 생성 예:

```sql
CREATE DATABASE lee_project;
```

### 3. 서버 환경 변수

`server/.env.example`을 복사해 `server/.env`를 만들고 값을 수정합니다.

```bash
cp server/.env.example server/.env
```

## 실행

- **동시 실행 (백엔드 + 프론트)**  
  루트에서: `npm run dev`

- **백엔드만**  
  `npm run dev:server` (기본: http://localhost:3001)

- **프론트만**  
  `npm run dev:client` (기본: http://localhost:5173)

- **API 상태 확인**  
  - 서버: http://localhost:3001/api/health  
  - DB 연결: http://localhost:3001/api/db-check  

## 빌드

```bash
npm run build
```

서버만 실행:

```bash
npm run start
```
