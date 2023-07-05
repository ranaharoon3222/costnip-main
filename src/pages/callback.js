import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStoreState, useStoreActions } from 'easy-peasy';

const callback = () => {
  const router = useRouter();
  const { access_token } = router.query;
  const saveUser = useStoreActions((action) => action.saveUser);

  const setUser = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/auth/google/callback?access_token=${access_token}`
      );
      const data = await res.json();

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('bill', true);
      console.log(data);
      saveUser(data.user);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (access_token) {
      setUser();
    }
  }, [access_token]);

  return <div></div>;
};

export default callback;
