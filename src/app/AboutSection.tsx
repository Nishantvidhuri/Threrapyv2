export default function AboutSerenaSection() {
    return (
      <section
        id="aboutUs"
        className="relative bg-[#B5DBDF] p-4 py-12 md:py-16 lg:py-28 md:px-[10%]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* IMAGE WITH FLOATING BADGE */}
          <div
            className="mt-0 relative w-[70vw] h-[400px] sm:w-[70vw] sm:h-[380px] md:h-[400px] md:w-[300px] lg:w-[400px] lg:h-[600px] justify-self-center bg-cover bg-center bg-no-repeat rounded-[30px] border-[6px] border-white shadow-xl"
            style={{
              backgroundImage: `url('https://quilted-libra-91f.notion.site/image/attachment%3Afcdeffc3-7fce-4ca7-a4ea-a0888f182399%3Aimage.png?table=block&id=21f4db5d-d615-8076-8a1c-fd184ea4e5df&spaceId=e434db5d-d615-814a-b090-0003034cd63a&width=290&userId=&cache=v2'), linear-gradient(#daf5f1, #daf5f1)`,
            }}
          >
            {/* FLOATING CARD */}
            <div className="inline-flex items-center text-white p-1 pr-4 shadow-md absolute bottom-0 bg-black/60 backdrop-blur-sm  rounded-lg">
              <div className="ml-2 grid grid-cols-1 text-sm">
                <span className="font-semibold">Dr. Serena Blake</span>
                <span className="text-xs text-gray-200">PsyD, Clinical Psychologist</span>
                <div className="font-semibold flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="gold"
                    className="lucide lucide-star h-3 w-3 mr-1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <a>500+ Sessions | 8 Years Experience</a>
                </div>
              </div>
            </div>
          </div>
  
          {/* TEXT CONTENT */}
          <div className="mt-6 lg:mt-0 flex flex-col gap-4">
            <h2 className="mx-auto md:mx-0 max-w-fit rounded-lg bg-amber-100 px-3 py-1 text-sm text-[#0f3f3b]">
              About Dr. Serena Blake, PsyD – Clinical Psychologist in Los Angeles, CA
            </h2>
            <p className="text-4xl font-bold text-[#0f3f3b] lg:text-5xl">
              Hi I&apos;m <span>Dr. Serena Blake</span>
            </p>
  
            <p className="mt-4 text-[#0f3f3b] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
              I&apos;m a licensed clinical psychologist (<strong>PsyD</strong>) based in Los Angeles, CA, with over{" "}
              <strong>eight years of experience</strong> and <strong>500+ client sessions</strong>. I blend evidence-based approaches—like{" "}
              <strong>cognitive-behavioral therapy</strong> and <strong>mindfulness</strong>—with compassionate, personalized care to help
              you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
  
            <p className="mt-4 text-[#0f3f3b] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
              Whether you meet in my Maplewood Drive office or connect virtually via Zoom, I’m committed to creating a{" "}
              <strong>safe, supportive space</strong> where you can truly thrive.
            </p>
          </div>
        </div>
      </section>
    );
  }
  