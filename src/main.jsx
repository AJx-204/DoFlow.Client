import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import './styles/index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { NotifierProvider, store, ThemeProvider } from './global/index.js'
import Test from '../test/Test.jsx';


createRoot(document.getElementById('root')).render(<Test/>)

// createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <NotifierProvider>
//           <ThemeProvider>
//             <App />
//           </ThemeProvider>
//         </NotifierProvider>
//       </Provider>
//     </BrowserRouter>
// )
