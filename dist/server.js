import cors from 'cors';
import express from 'express';
import categoryRoutes from './routes/categoryRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
const app = express();
const port = 3001;
async function main() {
    try {
        app.use(cors());
        app.use(express.json());
        app.use('/categories', categoryRoutes);
        app.use('/cart', cartRoutes);
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    }
    catch (err) {
        console.error('Error during server startup:', err);
        process.exit(1);
    }
}
main();
// Optional: global error handlers to catch unexpected errors
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
});
