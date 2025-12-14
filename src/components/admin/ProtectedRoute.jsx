import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import Loading from '../common/Loading'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated || !user) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}

export default ProtectedRoute
