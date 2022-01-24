import moongose from 'mongoose';

(async () => {
  const db = await moongose.connect('mongodb://localhost:27017/galleryapp', {
    useNewUrlParser: true,
  });
  console.log('Connected to: ', db.connection.name);
})();
