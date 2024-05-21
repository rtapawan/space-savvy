const Footer = () => {
  const handleScrollUp = () => {
    document
      .getElementById("missions-list")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-row mt-6">
      <p className="flex-1 text-gray-300">Copyright &copy; 2018 Space Savvy</p>
      <a
        className="text-gray-600 underline cursor-pointer transform active:scale-90 transition-transform duration-200"
        onClick={handleScrollUp}
      >
        Back to top
      </a>
    </div>
  );
};

export default Footer;
