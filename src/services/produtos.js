import api from '../api';

export const listarProdutos = async () => {
  const response = await api.get('/produtos');
  return response.data;
};

export const cadastrarProduto = async (produto) => {
  const response = await api.post('/produtos', produto);
  return response.data;
};

export const atualizarProduto = async (id, produto) => {
  const response = await api.put(`/produtos/${id}`, produto);
  return response.data;
};

export const deletarProduto = async (id) => {
  const response = await api.delete(`/produtos/${id}`);
  return response.data;
};
