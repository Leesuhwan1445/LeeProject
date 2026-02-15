create table todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) not null,
    completed boolean not null default false,
    created_at timestamp not null default current_timestamp
);