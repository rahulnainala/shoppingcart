const Footer = () => {
  return (
    <footer className=" bg-black px-4 py-4 flex items-center justify-center text-center text-xl font-light">
      <p className=" font-light text-gray-600">
        Developed by{" "}
        <a
          href="https://rahulnainala.com"
          className="no-underline text-white hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rahul Nainala
        </a>
      </p>
    </footer>
  );
};

export default Footer;
