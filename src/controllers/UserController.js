const User = require('../models/User');

const UserController = {
  index: (req, res) => {
    const users = User.findAll();
    res.render('user/index', { users });
  },

  show: (req, res) => {
    const { id } = req.params;
    const user = User.findById(id);
    res.render('user/show', { user });
  },

  createForm: (req, res) => {
    res.render('user/form', { user: null });
  },

  editForm: (req, res) => {
    const { id } = req.params;
    const user = User.findById(id);
    const required = user ? false : true; // Se o usuário já existe, não é obrigatório enviar um novo avatar

    res.render('user/form', { user, required });
  },

  create: (req, res) => {
    const user = req.body;
    const avatar = req.file.filename;

    User.create(user, avatar);

    res.redirect('/');
  },

  update: (req, res) => {
    const { id } = req.params;
    const user = req.body;
    let avatar = '';
  
    // Verifica se o usuário está atualizando um registro existente
    const existingUser = User.findById(id);
    if (existingUser && existingUser.avatar) {
      avatar = existingUser.avatar;
    }
  
    if (req.file) {
      avatar = req.file.filename;
    }
  
    User.update(id, user, avatar);
  
    res.redirect('/users');
  },
  

  delete: (req, res) => {
    const { id } = req.params;

    User.removeAvatar(id);
    User.delete(id);

    res.redirect('/users');
  }
}

module.exports = UserController;
