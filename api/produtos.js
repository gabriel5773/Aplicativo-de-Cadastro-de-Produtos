export default async function handler(req, res) {
    const url = 'http://leoproti.com.br:8004/produtos';
  
    const options = {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    if (req.method !== 'GET') {
      options.body = JSON.stringify(req.body);
    }
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Erro no proxy', error: error.message });
    }
  }
  