import Image from "next/image";

export default function Home() {
  return (
    <section className="px-6 md:px-20 py-24 flex flex-col xl:flex-row gap-16">
      <section className="flex flex-col justify-center items-center">
        <section>
          <div className="flex gap-2">
            <p className="text-primary">Smart Shopping Starts Here:</p>
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="arrow"
              width={16}
              height={16}
            />
          </div>
          <h1 className="head-text">
            Unleash the Power of{" "}
            <span className="text-6xl leading-[72px] font-bold tracking-[-1.2px] text-primary">
              Pricewise
            </span>
          </h1>
          <p className="mt-6">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more
          </p>
          <form className="flex gap-4 mt-12">
            <input
              type="text"
              className="searchbar-input"
              placeholder="Enter Product link"
            />
            <button className="searchbar-btn" type="submit">
              Search
            </button>
          </form>
        </section>
      </section>
      <section className="hero-carousel">
        <div className="flex justify-center items-center">
          <img
            src="/assets/images/hero-4.svg"
            alt=""
            width={484}
            height={484}
          />
        </div>
        <img
          src="/assets/icons/hand-drawn-arrow.svg"
          alt=""
          width={175}
          height={175}
          className="absolute bottom-0 left-[-15%] hidden xl:block"
        />
      </section>
    </section>
  );
}
