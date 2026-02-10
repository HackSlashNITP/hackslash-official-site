import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 text-lg z-50">
      {/* Top Border */}
      <div className="w-11/12 mx-auto border-t border-gray-700 mt-4 pt-24"></div>

      {/* Footer Content */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col ml-9 md:flex-row md:justify-between md:items-start text-center md:text-left">
          {/* Left Section */}
          <div className="flex flex-col items-center mb-8 w-full md:w-1/3 md:items-start">
            <div className="mb-4">
              <Link href={"/"}>
                <Image
                  src="/staticAssets/images/logo.png"
                  alt="HackSlash Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
            </div>
            <p className="mb-4 text-md">Let&apos;s connect with our socials</p>
            <div className="flex gap-7">
              <Link href="https://www.instagram.com/hackslash.nitp?igsh=MTA3d3hid2l2MmQxZw==">
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://www.linkedin.com/company/hackslash/">
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://discord.gg/7SsdsuXD57">
                <Image
                  src="/icons/discord.svg"
                  alt="Discord"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://youtube.com/@hackslashdevelopersclub?si=jrdTA8MQDDJVtiKR">
                <Image
                  src="/icons/youtube.svg"
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://x.com/hackslash_nitp">
                <Image
                  src="/icons/twitter-x.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-16 mb-8 md:mb-0 w-full md:w-2/3 pl-4">
            {/* <div className="mb-8 md:mb-0 w-full md:w-1/2">
              <h4 className="text-base font-semibold mb-5">Useful Links</h4>
              <ul className="space-y-3 text-md">

               
              </ul>
            </div> */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <h4 className="text-base font-semibold mb-5">COMMUNITY</h4>
              <ul className="space-y-3 text-md">
                {/* Forum will be added to the next update of the website */}
                {/* <li>
                  <Link href="#" className="hover:text-green-400">
                    Forum
                  </Link>
                </li> */}
                <li>
                  <Link href="https://discord.gg/7SsdsuXD57" className="hover:text-green-400">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="/office" className="hover:text-green-400">
                    Office 
                  </Link>
                </li>
                <li>
                  <Link href="/teams" className="hover:text-green-400">
                    Teams
                  </Link>
                </li>
                <li>
                  <Link href="/people/developers" className="hover:text-green-400">
                    Website
                  </Link>
                </li>
                <li>
                    <a href="mailto:hackslash@nitp.ac.in">Sponsor us</a>
                </li> 
                <li>
                  <Link href="/admin" className="hover:text-green-400">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/4 mt-8 md:mt-0 ">
            <h4 className="text-base font-semibold mb-5">Get In Touch</h4>
            {/* <p className="mb-2 text-md hover:text-green-400 cursor-pointer">+91 123456789</p>
            <p className="mb-2 text-md hover:text-green-400 cursor-pointer">+91 123456789</p> */}
            <a href="mailto:hackslash@nitp.ac.in" className="mb-2 text-md hover:text-green-400 cursor-pointer">
              HackSlash@nitp.ac.in
            </a>
            <p className="text-md hover:text-green-400 cursor-pointer">
              NIT Patna BIHTA Campus,
              <br /> Patna, Bihta 801103 
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="pt-24">
        <div className="text-center border-t mx-auto w-11/12 border-gray-700">
          <h1 className="font-bold text-xs pt-4">
            Copyright © 2024 HackSlash NITP.
            <br />
            All Rights Reserved.
            <br />
            Version : 1.0
          </h1>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
