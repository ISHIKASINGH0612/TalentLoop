import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './Layouts/app-layout';
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import JobListing from './pages/job-listing'; 
import JobPage from './pages/job';
import MyJobs from './pages/my-jobs';

const router=createBrowserRouter(
  [
    {
      element:<AppLayout/>,
      children:[
        {path:'/',
        element:<LandingPage/>},

         {path:'/onboarding',
        element:<Onboarding/>},

        {path:'/job-listing',
        element:<JobListing/>},

        {path:'/job',
        element:<JobPage/>},

        {path:'/my-job',
        element:<MyJobs/>},

        {path:'/post-job',
        element:<PostJob/>},

        {path:'/saved-job',
        element:<SaveJobs/>}


        ]


    }
  ]
)


function App()
{
  return(
   <RouterProvider router={router}/>
  )
}

export default App;