import Search from './Search';
import Catalog from './Catalog';

const Home = ({searchText, setSearchText, productsList, loading, fetchError}) => {
  return (
    <section className='section-home'>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <Catalog productsList={productsList} loading={loading} fetchError={fetchError} />
    </section>
  )
}

export default Home