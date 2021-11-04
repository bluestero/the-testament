import React from "react";
import image from '../assets/Coffee.jpg';

const Home = () => {
  return (
    <main>
      <img src={image} alt="Error Loading" className="absolute object-covers w-full h-full"/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-white font-bold cursive leading-none lg:leading-snug home-name">Hello, I am Ahmed</h1>
      </section>
    </main>
  );
};

export default Home;
