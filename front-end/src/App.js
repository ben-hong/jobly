import { useState, useEffect } from 'react';

import JoblyApi from './JoblyApi';


function App() {
  const [testApi, setTestApi] = useState(null);

  useEffect(() => {
    async function testApi() {
      let api = await JoblyApi.getJobs();
      setTestApi(api);
    }
    testApi()
  }, [])


  return (
    <div className="App">
      {console.log({testApi})}
    </div>
  );
}

export default App;
