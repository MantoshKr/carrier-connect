import React from "react";

const BottomSection = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full bg-gray-50 lg:max-w-screen md:px-24 lg:px-8 lg:py-20 xl:py-80">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div class="min-h-screen flex items-center justify-center p-10">
              <iframe
              title="video"
                class="aspect-video w-full rounded-lg shadow-lg shadow-yellow-800/70"
                src="https://www.youtube.com/embed/IlYUUN8rL_Y?autoplay=0&mute=1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="lg:pr-10">
            <button
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            ></button>
            <h5 className="mb-4 text-5xl text-red-900 leading-none">
              Connect to chase my dream
            </h5>
            <p className="mb-6 text-gray-600 text-3xl">
              Check out Gayatri’s story of finding a new job on CarrierConnect
            </p>
          </div>
        </div>
      </div>
   
      <section className="relative bg-[url(https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2022-07/community_400x_0.png)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-start lg:px-8">
          <div className=" text-center ltr:sm:text-left rtl:sm:text-right ">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Join your colleagues, classmates, and friends on Carrier Connect.
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <button
              
                className="block w-full rounded-full bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto  "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
     </div>
  );
};

export default BottomSection;
