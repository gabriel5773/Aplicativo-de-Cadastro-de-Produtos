import { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Stack } from '@mui/material';
import { cadastrarProduto } from '../services/produtos';

const FormularioProduto = () => {
  const [nome, setnome] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome || !preco) {
      alert('Preencha todos os campos');
      return;
    }

    try {
      await cadastrarProduto({
        nome,
        preco: parseFloat(preco)
      });

      alert('Produto cadastrado com sucesso!');
      setnome('');
      setPreco('');
    } catch (error) {
      alert('Erro ao cadastrar produto');
      console.error(error);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', maxWidth: '800px', margin: 'auto' }}>
      <Paper elevation={3} sx={{ p: 5, width: '100%', maxWidth: 1200, borderRadius: 3 }}>
        <Typography variant="h4" mb={3} textAlign="center">
          Cadastro de Produto
        </Typography>
        <Stack spacing={2} component="form" onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            value={nome}
            onChange={(e) => setnome(e.target.value)}
            fullWidth
          />
          <TextField
            label="Preço"
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            fullWidth
          />
          <Button type="submit" variant="contained" fullWidth size="large">
            Cadastrar Produto
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default FormularioProduto;
