import MealItem from './MealItem';

function MealList(props) {
  const { meals } = props;

  return (
    <div className='list'>
      {meals.map((elem) => (
        <MealItem key={elem.idMeal} {...elem} />
      ))}
    </div>
  );
}

export default MealList;
