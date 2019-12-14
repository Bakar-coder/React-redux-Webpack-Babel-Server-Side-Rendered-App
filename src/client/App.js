import React from "react";
import Layout from "./components/layouts/layout";
import { renderRoutes } from "react-router-config";

const App = ({ route }) => {
  return (
    <Layout>
      {renderRoutes(route.routes)}
    </Layout>
  );
};

export default {
  component: App
};
