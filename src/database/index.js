import Sequelize from 'sequelize'; // responsável pela comunicação com o BD
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // método que recebe a conexão com bd

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models)); // chama o método se ele existir [models]
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/gorbarber',
      { useNewUrlParser: true, useFindAndModify: true }
    );
  }
}

export default new Database();
