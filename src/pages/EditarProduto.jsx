import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { atualizarProduto, listarProdutos } from '../services/produtos';
import { TextField, Button, Box, Typography } from '@mui/material';

const EditarProduto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nome, setnome] = useState('');
  const [preco, setPreco] = useState('');

  const carregarProduto = async () => {
    try {
      const produtos = await listarProdutos();
      const produto = produtos.find((p) => p.id === parseInt(id));
      if (produto) {
        setnome(produto.nome);
        setPreco(produto.preco);
      } else {
        alert('Produto não encontrado');
        navigate('/listar');
      }
    } catch (error) {
      console.error('Erro ao carregar produto:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await atualizarProduto(id, {
        nome,
        preco: parseFloat(preco),
      });
      alert('Produto atualizado com sucesso!');
      navigate('/listar');
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      alert('Erro ao atualizar produto');
    }
  };

  useEffect(() => {
    carregarProduto();
  }, [id]);

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" mb={3}>Editar Produto</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          value={nome}
          onChange={(e) => setnome(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Preço"
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained">
          Salvar Alterações
        </Button>
      </Box>
    </Box>
  );
};

export default EditarProduto;
