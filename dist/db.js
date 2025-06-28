import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
export const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false // <-- עוקף את בדיקת תעודת ה-SSL
    },
    allowPublicKeyRetrieval: true // <-- זו שורה שלא קיימת בטייפ, אז נוסיף `as any`
});
