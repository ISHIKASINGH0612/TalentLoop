// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
// import AppLayout from './Layouts/app-layout';
// import LandingPage from './pages/landing';
// import Onboarding from './pages/onboarding';
// import JobListing from './pages/job-listing'; 
// import JobPage from './pages/job';
// import MyJobs from './pages/my-jobs';
// import PostJob from './pages/post-job';
// import SaveJobs from './pages/saved-job';

// const router=createBrowserRouter(
//   [
//     {
//       element:<AppLayout/>,
//       children:[
//         {path:'/',
//         element:<LandingPage/>},

//          {path:'/onboarding',
//         element:<Onboarding/>},

//         {path:'/job-listing',
//         element:<JobListing/>},

//         {path:'/job',
//         element:<JobPage/>},

//         {path:'/my-job',
//         element:<MyJobs/>},

//         {path:'/post-job',
//         element:<PostJob/>},

//         {path:'/saved-job',
//         element:<SaveJobs/>}


//         ]


//     }
//   ]
// )


// function App()
// {
//   return(
//    <RouterProvider router={router}/>
//   )
// }

// export default App;


import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/app-layout";
import ProtectedRoute from "./components/protected-route";
import { ThemeProvider } from "./components/theme-provider";

import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import PostJob from "./pages/post-job";
import JobListing from "./pages/jobListing";
import MyJobs from "./pages/my-jobs";
import SavedJobs from "./pages/saved-jobs";
import JobPage from "./pages/job";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;