import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <main className="bg-primary-200">
        <Outlet />
      </main>
    </>
  )
}

export default App
