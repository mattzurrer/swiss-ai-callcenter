export default function cta() {
  return (
    <section className="bg-[var(--sac-500)] py-8 md:py-12">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-black text-center md:text-left">
              Do you want your own AI? Call us now to make your life easier!
            </h2>
            <div className="flex flex-col items-center md:items-end gap-2">
              <svg className="w-48 md:w-96 h-12 md:h-20" viewBox="0 0 386 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.52413 35.0689V27.3965H42.6771V20.9184H9.65692C7.84957 20.9184 6.09646 20.1946 4.81325 18.9099C3.53004 17.6251 2.80713 15.8699 2.80713 14.0603V7.23844C2.80713 3.45653 5.86159 0.398438 9.63893 0.398438H48.6594V8.07082H11.3739V13.2461H44.3579C46.1833 13.2461 47.9184 13.9699 49.2016 15.2546C50.4848 16.5394 51.2078 18.2765 51.2078 20.1042V28.2289C51.2078 30.0384 50.4848 31.7937 49.2016 33.0784C47.9184 34.3632 46.1833 35.087 44.3579 35.087H4.50603L4.52413 35.0689Z" fill="white"/>
                <circle cx="27" cy="70" r="6" fill="white"/>
                <path d="M0 54C0 51.2386 2.23858 49 5 49H7V64H5C2.23858 64 0 61.7614 0 59V54Z" fill="white"/>
              </svg>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-black text-center">
                Your AI team: +41 411 441 41 41
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}