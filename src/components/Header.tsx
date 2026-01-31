import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'AI Website' }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>{title}</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
