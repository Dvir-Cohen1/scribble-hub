import { Routes, Route } from "react-router-dom";
import appRoutes from "./_routes";
import Layout from "../Layout/Layout";

const RouterWrapper = () => {
  const routeComponents = appRoutes.map((route, index) => (
    <Route key={index} path={route.path} element={<route.component />} />
  ));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routeComponents}
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Route>
    </Routes>
  );
};

export default RouterWrapper;
