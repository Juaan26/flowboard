
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import LoginPage from "../features/auth/pages/LoginPage"
import  DashboardPage  from "../features/board/pages/DashboardPage"
import  ProjectPage  from "../features/board/pages/ProjectPage"
import  NotFoundPage  from "../shared/pages/NotFoundPage"

function AppRouter() {


    return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    )

}
export default AppRouter