import CategoryItem from './CategoryItem';

function CategoryList(props) {
  const { catalog = [] } = props;

  return (
    <div className='list'>
      {catalog.map((elem) => (
        <CategoryItem key={elem.idCategory} {...elem} />
      ))}
    </div>
  );
}

export default CategoryList;
