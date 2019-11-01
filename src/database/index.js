import Sequelize from 'sequelize'; // responsável pela comunicação com o BD

import User from '../app/models/User';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // método que recebe a conexão com bd

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models)); // chama o método se ele existir [models]
  }
}

export default new Database();
