import Header from '../components/layout/header/header';
import HeroSection from '../components/layout/hero/hero';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection/>
      <main>
        <h1>Welcome to the Home Page!</h1>
      </main>
    </>
  );
}
