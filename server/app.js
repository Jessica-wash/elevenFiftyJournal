require("dotenv").config();
const Express = require('express');
const app = Express();
const dbConnection = require("./db");

app.use(Express.json());

const controllers = require("./controllers");

app.use("/user", controllers.userController);

app.use(require("./middleware/validate-jwt"));
app.use("/journal", controllers.journalController);

// app.use('/test', (rep,res) =>{
//     res.send('This is a message from the test endpoint on the server!')
// });

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3001, () => {
            console.log(`[Server]: App is listening on 3001.`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    })