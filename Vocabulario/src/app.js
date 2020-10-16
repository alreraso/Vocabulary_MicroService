const express = require('express');

require('./dataBase');

const methodOverride = require('method-override');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(methodOverride());
app.use(morgan('dev'));

app.set('port', process.env.Port || 3001);

app.use('/words', require('./routes/words'));
app.use('/category', require('./routes/category'));


async function main(){
  await app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });
}

main();
