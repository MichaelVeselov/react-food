import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Preloader from '../components/UI/Preloader';
import MealList from '../components/MealList';

import { getFilteredCategory } from '../API/api.js';

function CategoryPage() {
  const [meals, setMeals] = useState([]);

  const { name } = useParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className='btn' onClick={goBack}>
        go Back
      </button>
      {!meals?.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export default CategoryPage;
