import moongose from 'mongoose';

(async () => {
  const db = await moongose.connect('mongodb://localhost:27000/galleryapp', {
    useNewUrlParser: true,
    useUnifiedToplogy: true,
  });

  console.log('Connected to: ', db.connection.name);
})();
