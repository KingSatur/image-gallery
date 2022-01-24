import express from 'express';
import indexRouter from './routes/index.routes';
import fileUpload from 'express-fileupload';
import config from './config';
import database from './database';

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(
  fileUpload({
    tempFileDir: '/temp',
  })
);
app.use('/api', indexRouter);
app.listen(app.get('port'), () => {
  console.log('Server listening on port ', app.get('port'));
});
