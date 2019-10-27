import Sequelize from 'sequelize'; // responsável pela comunicação com o BD

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // método que recebe a conexão com bd

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
