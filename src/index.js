import React from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import MyRoutes from './routes/routes'
import GlobalStyles from './styles/globalStyles.js'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
/* const root = ReactDOM.createRoot(document.getElementById('root')) */
root.render(
  <>
    <AppProvider>
      <MyRoutes />
    </AppProvider>

    <ToastContainer autoClose={3000} theme="colored" />
    <GlobalStyles />
  </>
)
