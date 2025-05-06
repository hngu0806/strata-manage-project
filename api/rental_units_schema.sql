CREATE TABLE IF NOT EXISTS rental_units (
    id SERIAL PRIMARY KEY,
    landlord_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    unit_number VARCHAR(50) NOT NULL,
    rent_amount DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'available'
); 