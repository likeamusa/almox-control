const express = require('express');

const MaterialRoutes = require('./material');
const ColaboradorRoutes = require('./colaborador');
const CentroRoutes = require('./centro');
const TipoMovRoutes = require('./tipo_mov');
const UsuarioRoutes = require('./usuario');
const UsuarioController = require('../controller/usuario');
const C_A_Routes = require('./c_a_');
const LoteRoutes = require('./lote');
const LaudoRoutes = require('./laudo');
const FornecedorRoutes = require('./fornecedor');
const ArquivoRoutes = require('./arquivo');
const NotaRoutes = require('./nota');
const CadastroController = require('../controller/cadastro');

const MovimentacaoRoutes = require('./movimentacao');

const routes = express.Router();

routes.use('/materials', MaterialRoutes);

routes.use('/colaboradors', ColaboradorRoutes);

routes.use('/centros', CentroRoutes);

routes.use('/tipo_movs', TipoMovRoutes);

routes.use('/usuarios', UsuarioRoutes);

routes.post('/login', UsuarioController.login);

routes.use('/c_as', C_A_Routes);

routes.use('/lotes', LoteRoutes);

routes.use('/laudos', LaudoRoutes);

routes.use('/fornecedores', FornecedorRoutes);

routes.use('/arquivos', ArquivoRoutes);

routes.use('/notas', NotaRoutes);

routes.use('/movimentacoes', MovimentacaoRoutes);

routes.get('/cadastro', CadastroController.read);

routes.get('/status', (req, res) => {
    res.send({ status: 200 });
});

module.exports = routes;