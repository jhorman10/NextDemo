import Link from 'next/link';
import { MainLayout } from '../../../components';

const PricingPage = () => {
  return (
    <MainLayout>
      <div className={'description'}>
        <h1>Pricing Page</h1>
        <h2>
          ir a <Link href="/">Home</Link>
        </h2>
      </div>
    </MainLayout>
  );
};

export default PricingPage;
