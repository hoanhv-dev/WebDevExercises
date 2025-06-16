const Footer = () => {
  return (
    <footer className="w-full bg-[#e1dbcb]">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="logo.svg" alt="logo" className="w-10 h-8" />
        </div>

        {/* Date */}
        <div className="space-y-2">
          <p className="text-lg tracking-widest text-gray-700">SATURDAY,</p>
          <p className="text-lg tracking-widest text-gray-700">JUNE 23, 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
