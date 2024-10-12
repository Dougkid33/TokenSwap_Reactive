require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const swapRoutes = require('./routes/swapRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/swap', swapRoutes);

// Conectando ao MongoDB Atlas com suas credenciais
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
