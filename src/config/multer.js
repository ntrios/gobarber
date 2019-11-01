import multer from 'multer';
import crypto from 'crypto'; // gera caracteres aleatorios
import { extname, resolve } from 'path'; // extname: get extension // resolve: percorrer path

export default {
  // storage: como multer guarda os arquivos de imagem
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      // file: (filename, ext, size, format, etc.)
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
        // 1st arg: não quero que tenha dado erro
        // 2nd arg: convert 16 bites to hexadecimal
      });
    },
  }),
};
