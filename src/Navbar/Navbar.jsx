import { Link, useLocation } from "react-router-dom"
import { Home, ShoppingCart, AlignJustify } from "lucide-react"
import "./Navbar.css"

const navigationItems = [
  {
    href:"/catalog",
    icon: AlignJustify,
    label: "Catalog",
  },
  {
    href: "/",
    icon: Home,
    label: "Home",
  },
  {
    href: "/cart",
    icon: ShoppingCart,
    label: "Cart",
  },
]

function Navbar() {
  const location = useLocation()

  return (
    <nav className="bottom-nav">
      <div className="nav-container">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.href

          return (
            <Link
              key={item.href}
              to={item.href}
              className={"nav-item"}
              aria-label={item.label}
            >
              <Icon size={20} className={"nav-icon"} />
              <span className={"nav-label"}>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar;
