import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import UserLayout from './layouts/UserLayout';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <UserLayout />
    </>
  );
}

export default App;