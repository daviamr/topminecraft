import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className="relative bg-[#262626] w-full h-full">
        <div className="p-4">
          <div className="flex justify-between">
            <p>teste</p>

            <button
              className="cursor-pointer"
              onClick={() => { setIsOpen(prev => !prev) }}>
              <Menu size={24} />
            </button>

          </div>
        </div>

      </header>
        <div
          className={`
          absolute h-0 w-full bg-orange-400 duration-300 overflow-hidden
          ${isOpen && 'h-[400px]'}`}>
          <nav>
            <ul>
              <li>
                <p>testeminecraft</p>
              </li>
            </ul>
          </nav>
        </div>
    </>
  )
}

export default Header;