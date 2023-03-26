import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cardIsShown, setCardIsShown] = useState(false);

  function showCardHandler() {
    setCardIsShown(true);
  }

  function hideCardHandler() {
    setCardIsShown(false)
  }
  return (
    <CartProvider>
      {cardIsShown && <div>Card...</div>}
      <Header onShowCard={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider> 
  );
}

export default App;
