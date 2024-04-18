import Link from 'next/link'
import LinkClient from './component/LinkClient'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MarketPlace',
  description: 'Shop ejemplo sobre Next.js',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {/*BARRA NAVEGACION*/}
        <nav
          className="navbar fixed-top navbar-expand-lg bg-body-secondary"
          data-bs-theme=""
        >
          <div className="container-fluid">
          <LinkClient route='/' texto='MarketPlace'>
            
              <img
                src="./img/logo.png"
                alt="Logo"
                height={35}
                className="d-inline-block align-text-top"
              />
              <span className="fs-2 ps-3 fw-bold">ElecScoot</span>
      
            </LinkClient>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className='nav-link active' href='/'>Home</Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link' href='/producto'>Producto</Link>
                  
                </li>
                <li className="nav-item">
                <Link className='nav-link' href='/importacion'>Importacion</Link>
                </li>
              </ul>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Tema oscuro
              </label>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}