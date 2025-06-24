import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FormularioProduto from './pages/FormularioProduto';
import ListaProdutos from './pages/ListaProdutos';
import EditarProduto from './pages/EditarProduto';
import { AppBar, Toolbar, Button, Typography, Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <AppBar position="fixed" sx={{ bgcolor: '#1976d2' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Sistema de Produtos
            </Typography>
            <Button color="inherit" component={Link} to="/">Cadastrar</Button>
            <Button color="inherit" component={Link} to="/listar">Listar</Button>
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 8, // espaçamento abaixo da AppBar
            minHeight: '100vh',
            backgroundColor: '#f4f6f8'
          }}
        >
          <Routes>
            <Route path="/" element={<FormularioProduto />} />
            <Route path="/listar" element={<ListaProdutos />} />
            <Route path="/editar/:id" element={<EditarProduto />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
