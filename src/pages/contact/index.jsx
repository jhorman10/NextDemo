import Link from 'next/link';
import { Inter } from 'next/font/google';
import { MainLayout } from '../../../components';

const inter = Inter({ subsets: ['latin'] });

export default function AboutPage() {
  return (
    <MainLayout>
      <div className={'description'}>
        <h1>Contact Page</h1>
        <h2>
          ir a <Link href="/">Home</Link>
        </h2>
      </div>
    </MainLayout>
  );
}
