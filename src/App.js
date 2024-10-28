import React, { useEffect, useState } from 'react';
import Offline from './components/Offline';
import TodoList from './components/TodoList';

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <div className="App">
      {isOnline ? <TodoList /> : <Offline />}
    </div>
  );
};

export default App;