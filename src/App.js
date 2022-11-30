import React, { useEffect, useState } from "react";
import {
  Hero,
  Navbar,
  Detail,
  OurTeam,
  OurExpert,
  ContactUs,
  Subscribe,
  Footer,
  ScrollToTop,
  LoadingPage,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) return <LoadingPage />;

  return (
    <div>
      <Navbar />
      <Hero />
      <Detail />
      <OurTeam />
      <OurExpert />
      <ContactUs />
      <Subscribe />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
