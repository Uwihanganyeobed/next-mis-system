'use client'

import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

export const requireAuth: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }
  return { props: { session } };
};
