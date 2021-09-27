import SlideShow from './Carousel';
import About from './About';

const Home = () => {
  return (
    <>
      <SlideShow />
      <div className="mt-5">
        <About />
      </div>
    </>
  )
}

export default Home;
