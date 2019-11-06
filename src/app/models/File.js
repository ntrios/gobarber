import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        // campos que iremos receber dos usuários
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.path}`;
          },
        },
      },
      {
        sequelize, // argumento da init()
      }
    );

    return this;
  }
}

export default File;
