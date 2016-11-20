import express from 'express';

const app = express();
app.get('/', (req, res) => {

  const a = (req.query.a === undefined) ? 0: parseInt(req.query.a);
  const b = (req.query.b === undefined) ? 0: parseInt(req.query.b);
  const result = a + b;

  res.json({
    result: result
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});


