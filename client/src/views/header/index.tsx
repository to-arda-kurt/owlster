import React from 'react';
import { Logo, Navigation } from '../../components/header';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex align-middle justify-between p-4 border-b-2">
      <Logo />
      <Navigation />
    </header>
  );
}
