import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        // campos que iremos receber dos usuários
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize, // argumento da init()
      }
    );

    return this;
  }
}

export default File;
