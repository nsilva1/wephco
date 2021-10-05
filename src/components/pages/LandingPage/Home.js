import SlideShow from './Carousel';
import About from './About';
import Services from './Services';
import Works from './Works';

const Home = () => {
  return (
    <>
      <SlideShow />
      <div className="mt-5">
        <About />
      </div>
      <Services />
      <Works />
    </>
  )
}

export default Home;
