// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaTimes } from "react-icons/fa";
// const Header = () => {
//   const Links = ["Home", "About Us", "Guide"];

//   const [openNav, setOpenNav] = useState(false);
//   return (
//     <header className="w-full h-18">
//       <nav className="w-full h-full flex justify-between items-center px-3 bg-black">
//         <div className="h-8 w-28 text-white font-bold text-3xl ">Cardify</div>
//         <button
//           className={`text-white cursor-pointer bg-[#23312e] rounded-[10px] border-gray-200 h-10 w-10 justify-self-end md:hidden ${
//             openNav ? "hidden" : "block"
//           } `}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           ☰
//         </button>
//         {/* nav for large screen */}
//         <div className="large md:flex hidden items-center gap-5 text-white h-[40px] w-[30.5%]">
//           {Links.map((link, index) => (
//             <NavLink
//               key={index}
//               className="font-bold text-[1.2rem] cursor-pointer hover:brightness-80"
//             >
//               {link}
//             </NavLink>
//           ))}
//           <button className="ml-6.5 bg-green-800 px-5 py-2 rounded-[8px] font-semibold cursor-pointer hover:brightness-125">
//             Create Card
//           </button>
//         </div>
//       </nav>
//       {/* mobile nav */}
//       <div
//         className={`md:hidden pt-12 overlay relative gap-4 text-white md:opacity-1 h-[30px] ${
//           openNav ? "mobile" : "not-mobile"
//         }`}
//       >
//         <button
//           className="cursor-pointer justify-self-end md:hidden absolute right-8 top-4"
//           onClick={() => setOpenNav(!openNav)}
//         >
//           <FaTimes className={` ${openNav ? "block" : "hidden"} `} />

//         </button>

//         {Links.map((link, index) => (
//           <NavLink
//             key={index}
//             className="mb-4"
//           >
//             {link}
//           </NavLink>
//         ))}
//         <button className="">Create Card</button>
//       </div>
//     </header>
//   );
// };
// export default Header;
// filepath: /home/devuche/cardify/src/components/Header.jsx
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const Links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Guide", href: "#guide" },
  ];

  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="w-full h-18">
      <nav className="w-full h-full flex justify-between items-center px-3 bg-black">
        <div className="h-8 w-28 text-white font-bold text-3xl">Cardify</div>
        <button
          className={`text-white cursor-pointer bg-[#23312e] rounded-[10px] border-gray-200 h-10 w-10 justify-self-end md:hidden ${
            openNav ? "hidden" : "block"
          }`}
          onClick={() => setOpenNav(!openNav)}
        >
          ☰
        </button>
        {/* nav for large screen */}
        <div className="large md:flex hidden items-center gap-5 text-white h-[40px] w-[30.5%]">
          {Links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-bold text-[1.2rem] cursor-pointer hover:brightness-80"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#create-card"
            className="ml-6.5 bg-green-800 px-5 py-2 rounded-[8px] font-semibold cursor-pointer hover:brightness-125"
          >
            Create Card
          </a>
        </div>
      </nav>
      {/* mobile nav */}
      <div
        className={`md:hidden pt-12 overlay relative gap-4 text-white md:opacity-1 h-[30px] ${
          openNav ? "mobile" : "not-mobile"
        }`}
      >
        <button
          className="cursor-pointer justify-self-end md:hidden absolute right-8 top-4"
          onClick={() => setOpenNav(!openNav)}
        >
          <FaTimes className={`${openNav ? "block" : "hidden"}`} />
        </button>

        {Links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="mb-4"
            onClick={() => setOpenNav(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#create-card"
          className=""
          onClick={() => setOpenNav(!openNav)}
        >
          Create Card
        </a>
      </div>
    </header>
  );
};

export default Header;
