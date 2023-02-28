import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Search from '../components/Search';
import Preloader from '../components/UI/Preloader';
import CategoryList from '../components/CategoryList';

import { getAllCategories } from '../API/api.js';

function HomePage() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())));
    navigate(`${pathname}?search=${str}`);
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog?.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
    </>
  );
}

export default HomePage;
