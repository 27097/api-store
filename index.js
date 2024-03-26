// const server = require('./src/app')

// const PORT = 3001

// server.listen(PORT,
//     () => { console.log(`server in port:${PORT}`) })

const server = require('./src/app');
const { conn } = require('./src/db.js');
require('dotenv').config
const PORT = process.env.PORT || 3001

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(3001, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});    