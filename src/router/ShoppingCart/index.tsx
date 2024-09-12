import ShoppingCartApp from "@/pages/ShoppingCart";
import AdminPage from "@/pages/ShoppingCart/AdminPage";
import AdminProducts from "@/pages/ShoppingCart/AdminPage/AdminProducts";
import AdminUser from "@/pages/ShoppingCart/AdminPage/AdminUser";
import AdminUsers from "@/pages/ShoppingCart/AdminPage/AdminUsers";
import ContactUsPage from "@/pages/ShoppingCart/ContactUsPage";
import ProductPage from "@/pages/ShoppingCart/ProductPage";
import ProductsPage from "@/pages/ShoppingCart/Products";
import { RouteObject } from "react-router-dom";

export const routerShoppingCart: RouteObject[] = [
  {
    path: "/shoppingcart",
    element: <ShoppingCartApp />,
    children: [
      {
        path: "products",
        element: <ProductsPage />
      },
      {
        path: "products/:id",
        element: <ProductPage />
      },
      {
        path: "contactus",
        element: <ContactUsPage />
      },
      {
        path: "admin",
        element: <AdminPage />,
        children: [
          {
            path: "users",
            element: <AdminUsers />
          },
          {
            path: "users/:id",
            element: <AdminUser />
          },
          {
            path: "products",
            element: <AdminProducts />
          }
        ]
      }
    ]
  }
]