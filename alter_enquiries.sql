ALTER TABLE enquiries ADD COLUMN unit VARCHAR(50), ADD COLUMN category VARCHAR(255), ADD COLUMN description TEXT;

CREATE TABLE IF NOT EXISTS enquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    unit VARCHAR(50),
    category VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
