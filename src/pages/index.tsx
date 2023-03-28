import Link from 'next/link';
import { Inter } from 'next/font/google';
import { MainLayout } from '../../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <MainLayout>
      <div className={'description'}>
        <h1>Home Page</h1>
        <h2 className={'title'}>
          ir a <Link href="/about">About</Link>
        </h2>
      </div>
    </MainLayout>
  );
}
