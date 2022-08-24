import { Routes, Route, Navigate } from "@solidjs/router"
import { Login } from "../pages/login"

export const AppRoutes = () => (
  <Routes>
    <Route path="/">
      <Navigate href="/login" />
    </Route>
    <Route path="/login" component={Login} />
  </Routes>
)
