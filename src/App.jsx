import "./App.css";
// import {NewsFlash} from "./components/HomePage/Newsflash/Newsflash";
import {Navigation} from "./components/HomePage/Navigation/Navigation";
import {Hero} from "./components/HomePage/Hero/Hero";
import {Recommendations} from "./components/HomePage/Recommendations/Recommendations";
import {Categories} from "./components/HomePage/Categories/Categories";
import {Gallery} from "./components/HomePage/Gallery/Gallery";
import {CTA} from "./components/HomePage/CTA/CTA";
import {Sets} from "./components/HomePage/Sets/Sets";
import {NewArrivals} from "./components/HomePage/NewArrivals/NewArrivals";
import {Testimonials} from "./components/HomePage/Testimonials/Testimonials";

export function App() {
  return (
    <div>
      {/* <NewsFlash /> */}
      <Navigation />
      <Hero />
      <Recommendations />
      <Categories />
      <Gallery />
      <CTA />
      <Sets />
      <Testimonials />
      <NewArrivals />
    </div>
  );
}
