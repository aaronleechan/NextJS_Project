import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <ul>
      <li>
        <Link href="/user_application">
          <a>Sample User Application Form</a>
        </Link>
      </li>

      <li>
        <Link href="/stock">
          <a>Stock API</a>
        </Link>
      </li>
    </ul>
  );
};

export default Home;
