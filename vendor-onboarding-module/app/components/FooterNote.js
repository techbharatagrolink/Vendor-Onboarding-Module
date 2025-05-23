// "use client";
// import Image from "next/image";

// export default function FooterNote() {
//   return (
//     <nav className="sticky top-0 z-50 bg-background  flex justify-between items-center py-2 px-6">
//       <div className="flex items-center text-appText">
//         <Image
//           src="/logo1.svg"
//           alt="Logo"
//           width={140}
//           height={40}
//           className="mr-3"
//         />
//       </div>
//       <div className="flex items-center text-appText">
//         © 2022 Bharat Agrolink, All Rights Reserved
//       </div>
//       <div className="space-x-4">
//         <a href="/" className="text-appText font-medium">
//           Privacy Policy
//         </a>
//         <span className="text-appText">|</span>
//         <a href="/" className="text-appText font-medium">
//           Terms of Use
//         </a>
//       </div>
//     </nav>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";

export default function FooterNote() {
  return (
    <footer className="bg-white py-4 px-6 text-appText">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo1.svg"
            alt="Logo"
            width={140}
            height={40}
            className="mx-auto md:mx-0"
          />
        </div>

        {/* Copyright */}
        <div className="text-center md:text-left text-sm">
          © 2025 Bharat Agrolink, All Rights Reserved
        </div>

        {/* Links */}
        <div className="flex space-x-2 text-sm">
          <Link href="/" className="font-medium hover:underline">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/" className="font-medium hover:underline">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
