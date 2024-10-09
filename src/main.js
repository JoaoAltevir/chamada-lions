import "dotenv/config";
import "./db.js"
import e from "express";


const app = e();

app.use(e.json());




app.listen(process.env.PORT_API, () => {
    console.log(`listening on port ${process.env.PORT_API}`);
})