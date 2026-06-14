const app = require('./src/app')
const {PORT} = require('./src/utils/config')
const port = PORT;


app.listen(port, () => { 
   console.log(`Server is running on http://localhost:${port}`);
});
