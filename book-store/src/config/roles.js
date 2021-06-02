import HomePage from "../pages/HomePage"
import PaymentPage from "../pages/PaymentPage"

const pages = {
  home: { page: HomePage, path: "/home" },
  payment: { page: PaymentPage, path: "/payment"}
}

const roles = {
  GUEST: [
    pages.home,
    pages.payment
  ],
  USER: [
    pages.home,
    pages.payment
  ]
}

export default roles;