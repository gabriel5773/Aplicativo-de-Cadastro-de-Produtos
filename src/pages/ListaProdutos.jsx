import { useEffect, useState } from 'react';
import { listarProdutos, deletarProduto } from '../services/produtos';
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';


const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    try {
      const data = await listarProdutos();
      setProdutos(data);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir?')) return;
    try {
      await deletarProduto(id);
      carregarProdutos();
    } catch (error) {
      console.error('Erro ao excluir:', error);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <Box sx={{ px: 3, py: 5, backgroundColor: '#f4f6f8', minHeight: '80vh' , maxWidth: '800px', margin: 'auto' }}>
      <Typography variant="h4" mb={3} textAlign="center">
        Lista de Produtos
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: '0 auto' }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#212121' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>ID</TableCell>
              <TableCell sx={{ color: '#fff' }}>Nome</TableCell>
              <TableCell sx={{ color: '#fff' }}>Preço</TableCell>
              <TableCell sx={{ color: '#fff' }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((produto) => (
              <TableRow key={produto.id}>
                <TableCell>{produto.id}</TableCell>
                <TableCell>{produto.nome}</TableCell>
                <TableCell>R$ {produto.preco.toFixed(2)}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    component={Link}
                    to={`/editar/${produto.id}`}
                    sx={{ backgroundColor: '#ffc107', color: '#000', mr: 1 }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="error"
                    onClick={() => handleDelete(produto.id)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {produtos.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Nenhum produto cadastrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListaProdutos;
