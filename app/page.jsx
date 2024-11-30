import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="h1 mb-8">
                <span className="text-accent"> Anne-Julie HOYE</span>
              </h1>
              <h2 className="h3 mb-6"> Engineer Manager </h2>
              <p className="max-w-[500px] mb-12 text-white/80"> Master's student in Creative Technology at ESILV. I create innovative projects as part of the Human Learning group.</p>
              {/*btn and social*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button 
                variant="outline" 
                size="lg" 
                className="uppercaseflex items-center gap-2"
                >
                  <a href="/assets/CV Anne-Julie HOYE.pdf" download>
                    <span>Download CV</span>
                  </a>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials  containerStyles="flex gap-4" iconStyles="w-14 h-14 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
            </div>
          
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Home;
