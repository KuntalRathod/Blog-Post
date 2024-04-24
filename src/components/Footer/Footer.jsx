import React from "react";
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo } from "../index.js";

const Footer = () => {
  return (
    <footer className="bg-gray-900 ">
      <div className="mx-auto w-full max-w-screen-xl px-3 py-4 sm:p-4  lg:py-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Logo className="w-16 sm:w-20" />
              <span className="self-center text-2xl sm:text-3xl font-semibold whitespace-nowrap text-white">
                Blog-Post
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Websites
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    target="_blank"
                    href=""
                    className="hover:underline"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href=""
                    className="hover:underline"
                  >
                    Company
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow Me
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    target="_blank"
                    href=""
                    className="hover:underline "
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/kuntalrathod"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=7359222576"
                    className="hover:underline"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex text-center sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-500">
            @{new Date().getFullYear()} BlogPost™. All Rights Reserved. Created by{" "}
            <a
              target="_blank"
              href=""
              className="text-gray-300 hover:underline whitespace-nowrap hover:text-gray-100"
            >
              Kuntal Rathod
            </a>
          </span>
          <div className="flex gap-4 sm:gap-2 text-2xl w-full sm:w-auto mt-4 justify-center sm:mt-0">
            <a
              target="_blank"
              href=""
            >
              <FaFacebookSquare className="text-gray-400 cursor-pointer hover:text-cyan-300" />
            </a>
            <a target="_blank" href="https://linkedin.com/in/kuntalrathod">
              <FaLinkedin className="text-gray-400 cursor-pointer hover:text-cyan-300" />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=7359222576"
            >
              <FaWhatsapp className="text-gray-400 cursor-pointer hover:text-cyan-300" />
            </a>
            <a target="_blank" href="https://github.com/kuntalrathod">
              <FaGithub className="text-gray-400 cursor-pointer hover:text-cyan-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;