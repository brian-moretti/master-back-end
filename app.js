import cookieParser from "cookie-parser";
import express from "express";
import router from "./Core/Router.js";

const app = express();
app.use(express.static("public"));
app.use(express.json()).use(cookieParser()).use(router);

//app.use(express.urlencoded({ extended: false }));

app.listen(3000, "localhost", (err) => {
  console.error(err);
});
