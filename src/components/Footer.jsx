const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-[4rem] mt-5 bg-green-800 flex items-center justify-center text-white">
      <p> &copy;{currentYear} Copyright Cardify. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
