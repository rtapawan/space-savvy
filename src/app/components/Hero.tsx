import Image from "next/image";

const Hero = () => {
  const handleScrollDown = () => {
    document
      .getElementById("body-start")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-[700px] w-full bg-cover bg-center flex flex-col justify-center items-center relative text-white p-12 bg-hero-pattern">
      <div className="absolute inset-0 bg-black opacity-50" />
      <p className="absolute top-12 left-12 text-lg">SPACE SAVVY</p>
      <h1 className="text-[64px] drop-shadow-md mb-4 text-center">
        Discover Space Missions
      </h1>
      <Image
        src="/down-chevron.svg"
        alt="Logo"
        width={32}
        height={32}
        className="absolute bottom-12 cursor-pointer transform active:scale-90 transition-transform duration-200"
        onClick={handleScrollDown}
      />
    </div>
  );
};

export default Hero;
