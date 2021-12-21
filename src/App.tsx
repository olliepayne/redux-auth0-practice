import { useAuth0 } from "@auth0/auth0-react"

import LoginButton from "components/LoginButton"
import LogoutButton from "components/LogoutButton"

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <LogoutButton />
        </div>
      )}
    </div>
  )
}

export default App
