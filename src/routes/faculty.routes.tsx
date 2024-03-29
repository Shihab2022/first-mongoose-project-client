import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Create Admin",
    path: "create-admin",
    element: <CreateAdmin />,
  },
  {
    name: "Create Faculty",
    path: "create-faculty",
    element: <CreateFaculty />,
  },
  {
    name: "Create Student",
    path: "create-student",
    element: <CreateStudent />,
  },
];
