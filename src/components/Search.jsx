import { useState } from 'react';

function Search(props) {
  const { cb = Function.prototype } = props;

  const [value, setValue] = useState('');

  const handleSubmit = () => {
    cb(value);
    setValue('');
  };

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='search'
          autoComplete='off'
          id='search-field'
          placeholder='search'
          onKeyDown={handleKey}
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <button
          className='btn'
          style={{
            position: 'absolute',
            top: '3px',
            right: '12px',
          }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
