import { useEffect, useState } from "react";
import { CloseIcon, Logo, MenuIcon } from "../assets";
import { navLinks } from "../data/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden",open)
  
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [open])
  
  return (
    <header className=" flex justify-between items-center  py-10 relative ">
      <a href="#">
        <img src={Logo} alt="W." className="w-12" />
      </a>
      <nav>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden"
        >
          <img
            className=" absolute -translate-x-full -translate-y-1/2 right-0 z-60"
            src={open ? CloseIcon : MenuIcon}
            alt=""
          />
        </button>
        {open && (
          <div className="fixed z-10 inset-0 bg-black/25 md:hidden"></div>
        )}

        <ul
          className={`${open ? "flex-col" : "hidden"}   md:flex md:bg-transparent md:static md:h-auto md:w-auto md:p-0 fixed  z-20  top-0 right-0 bg-white h-screen w-3/4 pt-12`}
        >
          {navLinks.map((link) => (
            <li className="p-6  text-2xl md:text-lg " key={link.label}>
              <a className="hover:text-soft-red" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
