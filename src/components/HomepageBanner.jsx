const HomepageBanner = () => {
    return (
      <>
        <section className="juice3 bg-gray-100 bg-opacity-90 py-10">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row">
            {/* left */}
            <div className="juice relative lg:w-2/3 rounded-xl bg-secondary-lite bg-cover p-8 md:p-16">
              <p className="max-w-sm text-secondary text-3xl md:text-4xl font-semibold">
                Active Summer With Juice Milk 300ml
              </p>
              <p className="max-w-xs pr-10 text-secondary font-semibold mt-8">
                New arrivals with nature fruits, juice milks, essential for
                summer
              </p>
              <button className="mt-20 bg-white font-semibold px-8 py-2 rounded">
                Shop Now
              </button>
              <div className="absolute bottom-8 right-8 md:bottom-5 md:right-5 flex">
                <a
                  href=""
                  className="h-6 w-6 flex items-center justify-center rounded-md bg-white"
                >
                  <svg
                    className="h-3 text-gray-700"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="chevron-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                    />
                  </svg>
                </a>
                <a
                  href=""
                  className="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-yellow-400"
                >
                  <svg
                    className="h-3 text-gray-700"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="chevron-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* right */}
            <div className="juice2 mt-6 lg:mt-0 lg:ml-6 lg:w-1/3 rounded-xl bg-primary-lite bg-cover p-8 md:p-16">
              <div className="max-w-sm">
                <p className="text-3xl md:text-4xl font-semibold uppercase">
                  20% sale off
                </p>
                <p className="mt-8 font-semibold">
                  Syncthetic seeds
                  <br />
                  2.0 OZ
                </p>
                <button className="mt-20 bg-white font-semibold px-8 py-2 rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default HomepageBanner;
  