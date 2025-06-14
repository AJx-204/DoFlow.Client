import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import './styles/index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { NotifierProvider, store, ThemeProvider, UIStateProvider } from './global/index.js'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Provider store={store}>
        <NotifierProvider>
          <UIStateProvider>
            <ThemeProvider>
                <App />  
            </ThemeProvider>
          </UIStateProvider>
        </NotifierProvider>
      </Provider>
    </BrowserRouter>
)
