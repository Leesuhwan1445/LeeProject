-- Lee Project 초기 DB (필요 시 실행)
-- psql -U postgres -d lee_project -f server/scripts/init-db.sql

-- 예: 테이블 생성
-- CREATE TABLE IF NOT EXISTS users (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   created_at TIMESTAMPTZ DEFAULT NOW()
-- );

SELECT 'DB init script ready.' AS status;
