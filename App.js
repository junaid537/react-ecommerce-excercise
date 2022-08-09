import logo from './logo.svg';
import './App.css';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import {Route,Routes} from 'react-router-dom';
import {Home} from './pages/Home'
import {Product} from './pages/Product'
import {Navbar} from './components/Navbar'

const queryClient = new QueryClient();


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:Id" element={<Product />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
