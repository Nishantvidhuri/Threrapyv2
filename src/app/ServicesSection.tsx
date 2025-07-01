export default function ServicesSection() {
    return (
      <section className="relative bg-[#f6f8fa] px-4 py-16 lg:py-28 overflow-hidden">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-darkMain1 mb-12">
          How I Help
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  max-w-5xl ml-10">
          {/* Service 1 */}
          <a
            href="/therapy/christian-individual-counseling/richmond"
            className="group transition duration-200 hover:shadow-xl rounded-xl bg-[#b3dfe6] p-4 border border-gray-300 flex flex-col max-w-sm "
          >
            <div className="relative h-48 w-full mb-3 overflow-hidden rounded-md">
              <img
                src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwomanPrayingOutdoor.99f58aaf.jpg&w=1920&q=75"
                alt="Christian Individual Counseling"
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-bold text-darkMain1 mb-1 leading-tight">
              Christian Individual Counseling in Richmond, VA
            </h3>
            <p className="text-darkMain1 text-sm mb-3 leading-relaxed">
              Discover Peace, Purpose, and God Truth in Richmond, VA.
            </p>
            <button className="mt-auto px-4 py-2 border border-darkMain1 text-darkMain1 rounded-md hover:bg-white hover:text-black transition text-sm">
              Learn More
            </button>
          </a>
  
          {/* Service 2 */}
          <a
            href="/therapy/christian-couples-counseling/richmond"
            className="group transition duration-200 hover:shadow-xl rounded-xl bg-[#b3dfe6] p-4 border border-gray-300 flex flex-col max-w-sm "
          >
            <div className="relative h-48 w-full mb-3 overflow-hidden rounded-md">
              <img
                src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCouplesHappyHoldingBible.225997a3.jpg&w=1920&q=75"
                alt="Christian Couples Counseling"
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-bold text-darkMain1 mb-1 leading-tight">
              Christian Couples Counseling in Richmond, VA
            </h3>
            <p className="text-darkMain1 text-sm mb-3 leading-relaxed">
              Heal Your Relationship, Grow Closer to God Together in Richmond.
            </p>
            <button className="mt-auto px-4 py-2 border border-darkMain1 text-darkMain1 rounded-md hover:bg-white hover:text-black transition text-sm">
              Learn More
            </button>
          </a>
        </div>
  
        {/* Decorative Plant Image */}
        <img
          src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2Fassets%2Fflower_green.webp&w=640&q=75"
          alt="Decorative Plant"
          className="absolute right-0 bottom-0 w-32 md:w-48 opacity-80"
        />
      </section>
    );
  }
  