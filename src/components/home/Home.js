import React, { useState, useEffect } from 'react';

const Home = () => {
  const listData = ['choco', 'milk', 'melon', 'car', 'bread', 'water', 'fire'];
  const [optionInput, setOptionInput] = useState('');
  console.log(optionInput);
  const inputHandle = (e) => {
    console.log(e.target.value);
  };
  useEffect(() => {
    console.log(optionInput);
  }, []);

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid' }}>
        <h1>Home Page</h1>
        <h1>새로운 태그를 연습</h1>
      </header>
      <section style={{ height: '30rem', borderBottom: '1px solid' }}>
        <h1>body area</h1>
        <div>
          <input
            type="text"
            list="optionid"
            name="option-choice"
            id="option-choice"
            // value={(e) => setOptionInput(e.target.value)}
          />
          <datalist id="optionid">
            {listData.map((info, i) => {
              <option value={info} key={i} onChange={inputHandle} />;
            })}
          </datalist>
        </div>
      </section>
      <footer>
        <div>footer</div>
      </footer>
    </div>
  );
};

export default Home;
