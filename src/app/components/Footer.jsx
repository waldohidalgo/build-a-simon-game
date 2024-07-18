import logoWaldo from "../assets/images/logo_waldo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-black py-4" translate="no">
        <div className="mx-auto w-10/12 max-w-52 text-center font-bold text-white">
          <div translate="no" id="footer_tag">
            Developed by:
          </div>

          <div className="w-full">
            <a
              href="https://waldohidalgo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                priority
                src={logoWaldo}
                alt="logo waldo"
                width={820}
                height={218}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
