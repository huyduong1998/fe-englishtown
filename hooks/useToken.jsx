import React, { useEffect, useState } from 'react';
import { StoreKeys } from '../constants/store_keys';

const useToken = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem(StoreKeys.token))
  }, [])
  return token
};

export default useToken;