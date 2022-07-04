import './App.css';
import Header from './modules/modules';
import { Fragment, useState, useEffect } from 'react';
import Form from './modules/form';

function App() {

  const [search, saveSearch] = useState({
    city: '',
    country: ''
  })

  const { country, city } = search;

  const [consult, consultHandler] = useState(false);

  useEffect(() => {


    const callAPI = async () => {

      if (consult) {

        const appId = '12540783bfa6a972bb215dd8080fd41f';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const response = await fetch(url);
        const result = await response.json();

        console.log(result)
      }
    }
  }, [consult])

  return (
    <Fragment>
      <Header
        titulo='Weather App'
      />
      <div class="container">
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <Form
              search={search}
              saveSearch={saveSearch}
              consultHandler={consultHandler}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
