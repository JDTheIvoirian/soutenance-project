import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductPageDescription from './product_page_description/product_page_description.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import QuiSommesNous from './qui_sommes_nous/qui_sommes_nous.jsx'
import NousContacter from './nous_contacter/nous_contacter.jsx'
import Marketplace from './marketplace/marketplace.jsx'
import DashboardVendeur from './dashboard_vendeur/dashboard_vendeur.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product_page_description",
    element: <ProductPageDescription />,
  },
  {
    path: "/qui_sommes_nous",
    element: <QuiSommesNous />,
  },
  {
    path: "/nous_contacter",
    element: <NousContacter />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
  {
    path: "/dashboard_vendeur",
    element: <DashboardVendeur />,
    children: [
      {
        path: "commentaires",
        element: <div>Commentaires</div>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
