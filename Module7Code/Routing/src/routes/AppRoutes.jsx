import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import DashboardPage, { DashboardMessages, DashboardTasks } from '../pages/DashboardPage.jsx'
import PostsPage, { Post, PostList } from '../pages/PostsPage.jsx'
import LoginForm from '../pages/LoginForm.jsx'
import PageNotFound from '../pages/PageNotFound.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'


function AppRoutes(props) {
  return (
    <Routes>

      <Route index element={<Homepage {...props} />} />

      <Route path="dash" element={
        <ProtectedRoute>
          <DashboardPage {...props} />
        </ProtectedRoute>
      }>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path='/posts' element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        <Route path=":id" element={<Post />} />
      </Route>
      <Route path="login" element={<LoginForm />} />
      <Route path='/about' element={<AboutPage {...props} />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes;
