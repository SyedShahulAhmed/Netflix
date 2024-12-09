import React from 'react';
import { Outlet  } from 'react-router-dom';
const App = () => {

  return (
    <div className="bg-black h-full">
      <Outlet />
    </div>
  );
};

export default App;
