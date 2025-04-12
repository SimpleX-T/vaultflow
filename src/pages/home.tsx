import Hero from "../components/landing/hero";
import Teams from "../components/landing/teams";
import Features from "../components/landing/features";
import Analytics from "../components/landing/analytics";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Teams />
      <Features />
      <Analytics />
    </main>
  );
};

export default Home;
