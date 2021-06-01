import HomePage from "../pages/HomePage"

const pages = {
  home: { page: HomePage, path: "/home" }
}

const roles = {
  GUEST: [
    pages.home,
  ],
  USER: [
    pages.home,
  ]
}

export default roles;