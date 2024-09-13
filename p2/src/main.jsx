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
import CommentairesVendeur from '../src/dashboard_vendeur/home_vendeur/commentaires_vendeur/commentaires_vendeur.jsx'
import CommandeVendeur from '../src/dashboard_vendeur/home_vendeur/commande_vendeur/commande_vendeur.jsx'
import RevenueVendeur from '../src/dashboard_vendeur/home_vendeur/revenue_vendeur/revenue_vendeur.jsx'
import ProduitsVendeur from '../src/dashboard_vendeur/home_vendeur/produits_vendeur/produits_vendeur.jsx'
import ServicesEnDehorsDuSite from '../src/dashboard_vendeur/home_vendeur/services_en_dehors_du_site_vendeur/services_en_dehors_du_site.jsx'
import ParametreVendeur from '../src/dashboard_vendeur/home_vendeur/parametre_vendeur/parametre_vendeur.jsx'
import Panier from './panier/panier.jsx'

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
    path: "/panier",
    element: <Panier />,
  },
  {
    path: "/dashboard_vendeur",
    element: <DashboardVendeur />,
    children: [
      {
        path: "commentaires",
        element: <CommentairesVendeur />,
      },
      {
        path: "commande",
        element: <CommandeVendeur />,
      },
      {
        path: "revenue",
        element: <RevenueVendeur />,
      },
      {
        path: "produits",
        element: <ProduitsVendeur />,
      },
      {
        path: "serivce_en_dehors_du_site",
        element: <ServicesEnDehorsDuSite />,
      },
      
      {
        path: "paramètre_vendeur",
        element: <ParametreVendeur />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
