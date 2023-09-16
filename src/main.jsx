/* eslint-disable no-unused-vars */
import React from 'react'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import App from './Index'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
    
  </React.StrictMode>,
)
