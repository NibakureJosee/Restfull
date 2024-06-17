
import express from 'express';
import { sequelize, testConnection } from './config/db.js';
import { userRoutes } from './routes/usersRoutes.js';
import { postRoutes } from './routes/postsRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Test database connection and start server
sequelize.sync().then(async () => {
  await testConnection();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => console.error('Unable to connect to the database:', error));
