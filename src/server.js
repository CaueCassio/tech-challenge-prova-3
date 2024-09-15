const app = require('./app');
const connectDB = require('./config/database');
const PORT = process.env.PORT || 8080;

async function startServer() {
  try {
    await connectDB(); 
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
}

startServer();