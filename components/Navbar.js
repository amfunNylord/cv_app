// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link href="/">Главная</Link></li>
        <li><Link href="/about">Обо мне</Link></li>
        <li><Link href="/experience">Опыт работы</Link></li>
        <li><Link href="/education">Образование</Link></li>
        <li><Link href="/skills">Навыки</Link></li>
        <li><Link href="/contact">Контакты</Link></li>
      </ul>
    </nav>
  );
}
