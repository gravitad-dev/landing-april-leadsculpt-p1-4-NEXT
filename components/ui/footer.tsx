import "@/app/css/fonts.css";
import Image from "next/image";
import logo from "@/public/images/LeadLogo.png";
import SocialButtons from "../socialButtons";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-10 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3">
            <h6
              className="text-gray-800 font-medium mb-2 expressa"
              style={{ fontSize: "25px" }}
            >
              <a href="/">
                <Image src={logo} alt="logo" width={180} height={150} />
              </a>
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Únete a Leadsculpt hoy y descubra cómo la realidad virtual
                  puede transformar su desarrollo profesional.
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                ></a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                ></a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 expressa">
              Enlaces rápidos
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="/#hero"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Inicio
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/#features"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/#features-blocks"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 expressa">
              Sobre nosotros
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="https://vrexecutivemastery.blog.jumpylife.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            {/* Social as */}

            <SocialButtons />
          </div>
        </div>

        {/* Bottom area */}
        <div
          className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; Copyright 2024. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
