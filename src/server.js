import "babel-polyfill";
import express from "express";
import proxy from "express-http-proxy";
import { join } from "path";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import creatStore from "./helpers/createStore";
import renderer from "./helpers/render";

const port = process.env.PORT || 3000,
  app = express();

app.use("/api", proxy("http://localhost:80/api"));
app.use(express.static("public"));

app.use(express.static(join(__dirname, "public")));
app.get("*", (req, res) => {
  const store = creatStore(req);

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  promises.map(promise => {
    if (promise) {
      console.log(promise);
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  const render = () => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.uri) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) res.status(404);

    return res.send(content);
  };

  Promise.all(promises)
    .then(render)
    .catch(render);
});
app.listen(port, () =>
  console.log(`Server side rendering app on port: ${port}`)
);
