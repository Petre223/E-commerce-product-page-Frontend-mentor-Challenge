import { useState } from "react";
import logo from "../images/logo.svg";
import { IoCartOutline } from "react-icons/io5";
import avatar from "../images/image-avatar.png";
import menu from  "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import Cart from "./Cart.js";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartIsOpen, setCartIsOpen] = useState(false);

    return (
      <>
        <header className="relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex item-center justify-start gap-4">
          <ul className="flex items-center jusifty-start gap-4">
            {!isOpen && <li onClick={() => setIsOpen(true)} className="lg:hidden">
                <img src={menu} alt="" className="cursor-pointer" />
            </li>}
            {isOpen && <li onClick={() => setIsOpen(false)} className="lg:hidden close">
                <img src={close} alt="" className="cursor-pointer w-6" />
            </li>}
            <li>
                <img src={logo} alt="" />
            </li>
          </ul>
  
          <nav className={isOpen && "open"}>
            <ul className="flex item-center justify-start gap-4">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
  
        <div>
          <ul className="flex item-center justify-start gap-4">
            <li>
              <button onClick={() => setCartIsOpen(!cartIsOpen)} className="pt-3">
              <IoCartOutline className="text-2xl text-slate-600" />
              </button>
            </li>
            <li>
              {cartIsOpen && <Cart />}
            </li>
            <li><img src={avatar} alt="" className="w-10" /></li>
          </ul>
        </div>
        </header>
      </>
    )
  }