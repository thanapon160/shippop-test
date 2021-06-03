import HomePage from "../pages/HomePage"
import PaymentPage from "../pages/PaymentPage"
import CartPage from "../pages/CartPage"

const pages = {
  home: { page: HomePage, path: "/home" },
  payment: { page: PaymentPage, path: "/payment" },
  cart: { page: CartPage, path: '/cart' }
}

const roles = {
  GUEST: [
    pages.home,
    pages.payment,
    pages.cart
  ],
  USER: [
    pages.home,
    pages.payment,
    pages.cart
  ]
}

export default roles;