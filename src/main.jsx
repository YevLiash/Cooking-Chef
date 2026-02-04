import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RecipePage from './pages/RecipePage.jsx'
import Layout from './components/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<App />}
        />
        <Route
          path="/recipes/:id"
          element={<RecipePage />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
)
