import Product from "../pages/Product";
import Supplier from "../pages/Supplier";

export const listRoutes = [
  {
    path: "customer",
    component: <Product />,
  },
  {
    path: "supplier",
    component: <Supplier />,
  },
];
