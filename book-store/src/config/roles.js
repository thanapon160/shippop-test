import HomePage from "../pages/HomePage"
import PaymentPage from "../pages/PaymentPage"
import CartPage from "../pages/CartPage"
import ProductPage from "../pages/ProductPage"

const pages = {
  home: { page: HomePage, path: "/home" },
  payment: { page: PaymentPage, path: "/payment" },
  cart: { page: CartPage, path: '/cart' },
  product: { page: ProductPage, path: '/product'}
}

const roles = {
  GUEST: [
    pages.home,
    pages.payment,
    pages.cart,
    pages.product
  ],
  USER: [
    pages.home,
    pages.payment,
    pages.cart,
    pages.product
  ]
}

export default roles;