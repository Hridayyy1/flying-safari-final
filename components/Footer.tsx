import Image from "next/image";
import Link from "next/link";
import {
  footerDestinations,
  footerResources,
} from "@/lib/data";

export function Footer() {
  return (
    <footer
      id="footer"
      className="space-y-8 bg-cover bg-top bg-no-repeat px-8 pt-7 pb-7 md:space-y-10 md:px-20 md:pt-12"
      style={{ backgroundImage: "url(/images/footer-bg.jpg)" }}
    >
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-30">
        <div className="shrink-0 space-y-10">
          <img
            src="/images/logo.png"
            alt="Flying Safari Logo"
            width={403}
            height={180}
            className="h-18 w-auto object-contain lg:h-25"
          />
          <div>
            <a
              href="https://www.facebook.com/flyingsafari"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift mr-4 inline-block"
            >
              <Image
                src="/images/social/facebook.png"
                alt="facebook-icon"
                width={24}
                height={24}
                className="inline-block size-6"
              />
            </a>
            <a
              href="https://x.com/flyingsafari"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift mr-4 inline-block"
            >
              <Image
                src="/images/social/x.png"
                alt="x-icon"
                width={24}
                height={24}
                className="inline-block size-6"
              />
            </a>
            <a
              href="https://www.instagram.com/flyingsafari"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift mr-4 inline-block"
            >
              <Image
                src="/images/social/instagram.png"
                alt="instagram-icon"
                width={24}
                height={24}
                className="inline-block size-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/flyingsafari"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift inline-block"
            >
              <Image
                src="/images/social/linkedin.png"
                alt="linkedin-icon"
                width={24}
                height={24}
                className="inline-block size-6"
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:gap-30">
          <div>
            <h3 className="mb-6 text-lg font-medium text-secondary">
              Destination
            </h3>
            <ul className="space-y-3">
              {footerDestinations.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white transition-opacity hover-nav"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-medium text-secondary">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerResources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white transition-opacity hover-nav"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="min-w-60">
          <h3 className="mb-6 text-lg font-medium text-secondary">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+2555895458945"
                className="text-sm text-white transition-opacity hover-nav"
              >
                +255 58954 58945
              </a>
            </li>
            <li>
              <a
                href="mailto:Info@flyingsafari.ae"
                className="text-sm text-white transition-opacity hover-nav"
              >
                Info@flyingsafari.ae
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@flyingsafari.ae"
                className="text-sm text-white transition-opacity hover-nav"
              >
                contact@flyingsafari.ae
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
        <span className="block text-center text-sm text-white lg:text-left">
          @ 2026 Flying Safari Limited. All rights reserved.
        </span>
        <span className="block text-center text-white">
          Designed &amp; Developed by{" "}
          <a href="#" className="font-bold text-secondary hover-nav">
            DotSyndicate
          </a>
        </span>
        <span className="row-start-1 mb-6 block space-x-6 text-center text-sm text-white lg:row-auto lg:mb-0 lg:text-right">
          <a
            href="https://flying-safari-gold.vercel.app/terms-of-service"
            className="text-white hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="https://flying-safari-gold.vercel.app/privacy-policy"
            className="text-white hover:underline"
          >
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  );
}
