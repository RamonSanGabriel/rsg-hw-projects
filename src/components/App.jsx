import { useState } from 'react';
import Button from './Button/Button';

const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div>
      <Button />
    </div>
  );
};

export default App;
