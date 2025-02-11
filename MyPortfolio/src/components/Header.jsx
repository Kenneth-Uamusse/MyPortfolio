import logo from "../../public/images/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
        <h1>
          <a href="/" className="logo">
            <img src={logo} alt="logo" width={40} height={40} />
          </a>
        </h1>

        <div className="flex items-center space-x-4 md:justify-self-center">
          <button className="manu-btn md:hidden" onClick={null}>
            <span className="material-symbols-rounded">menu</span>
          </button>

          <a href="#contact" className="">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;