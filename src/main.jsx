import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import './styles/index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store, ThemeProvider } from './global/index.js'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
)
