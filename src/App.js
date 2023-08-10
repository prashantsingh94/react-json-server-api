import {useState, useEffect, lazy, Suspense} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Author from './components/Author';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import MissingPage from './components/MissingPage';
import ProductDetails from './components/ProductDetails';
import themeContext from './context/themeContext';
const PRODUCT_LIST_API_URL = 'http://localhost:3500/products';


const AboutLazyComponent = lazy(() => import('./components/About'))
const AuthorLazyComponent = lazy(() => import('./components/Author'))
const ContctLazyComponent = lazy(() => import('./components/Contact'))


function App() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchProducts = async () => {
    try {
     let response = await fetch(PRODUCT_LIST_API_URL);
     //console.log(response);
     if(!response.ok) { throw new Error('Please try reloading the app!')}
     let productData = await response.json();
     setProductsList(productData);

     } catch (err) {
      console.log(err.message);
      setFetchError(err.message);
      } finally {
      setLoading(false);

    }
}

  useEffect(() => {
    setTimeout(() => {
    fetchProducts();
    }, 3000);

  }, []);

  useEffect(() => {
  const filteredList = productsList.filter((item) => (
    (item.name).toLowerCase().includes(searchText.toLowerCase()) ||
    (item.description).toLowerCase().includes(searchText.toLowerCase()) ||
    (item.author).toLowerCase().includes(searchText.toLowerCase())
  ))
   setSearchResults(filteredList);
   //console.log("Products List", productsList);
   //console.log("Filtered List", filteredList);
  }, [searchText, productsList]);


 return (
    <div className="App">
      <Home
          searchText={searchText} setSearchText={setSearchText}
          productsList={searchResults} loading={loading} fetchError={fetchError} />
      </div>
  );
}

const AppLayout = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((theme) => theme === 'light' ? 'dark' : 'light' )
  console.log(theme)
  return (
      <main className='App-Layout'>
      <themeContext.Provider value={theme}>
        <div className={`${theme}`}>
        <Header toggleTheme={toggleTheme} />
        <Outlet />
        <Footer />
        </div>

      </themeContext.Provider>

    </main>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <Suspense fallback={<p>Loading...</p>}>
          <AboutLazyComponent />
        </Suspense>,
      },
      {
        path: "author",
        element: <Suspense fallback={<p>Loading...</p>}>
          <AuthorLazyComponent />
        </Suspense>,
      },
      {
        path: "contact",
        element: <Suspense fallback={<p>Loading...</p>}>
          <Contact />
        </Suspense>,
      },
      {
        path: "product/:pid",
        element:  <ProductDetails />,
      },
      {
        path: "*",
        element: <MissingPage />,
      }
    ]
  }
]);


export default App;
