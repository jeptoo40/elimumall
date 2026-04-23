
import Navbar from "../components/Navbar";
import TopBar from "../TopBar"; 
import Hero from "../components/Hero";
import Categories  from "../components/Categories";
import AdvertSection from "../components/AdvertSection";
import ProductCategories from "../components/ProductCategories";
import BestSeller from "../components/BestSeller";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Categories />
      <AdvertSection />
      <ProductCategories />
      <BestSeller/>
      <Footer/>
     
     
    </div>
  );
};

export default Home;