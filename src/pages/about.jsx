import Link from 'next/link';
import { Inter } from 'next/font/google';
import { DarkLayout, MainLayout } from '../../components';

const inter = Inter({ subsets: ['latin'] });

export default function AboutPage() {
  return (
    <>
      <div className={'description'}>
        <h1>About Page</h1>
        <h2>
          ir a <Link href="/">Home</Link>
        </h2>
      </div>
    </>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
