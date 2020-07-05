import React from "react";

function Header() {
  return (
    <header className="py-4 flex">
      <div className="w-1/2">
        <img src="/layout/logo.svg" alt="Collectif 201" />
      </div>
      <div className="w-1/2 flex justify-end">
        <a className="flex items-center cursor-pointer">
          <span className="mr-4 text-xl font-display">Menu</span>
          <img src="/layout/icons/burger.svg" alt="Menu" />
        </a>
      </div>
    </header>
  );
}

export default Header;
