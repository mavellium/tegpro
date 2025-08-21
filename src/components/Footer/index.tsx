import LinkButton from "../Link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#060606]">
      {/* CTA topo */}
      <div className="flex items-center justify-center py-[64px] px-5 gap-7 text-[#F0F0F0] flex-wrap">
        <div className="max-w-[600px] sm:text-start text-center">
          <h2 className="text-gradient sm:text-[32px] text-[24px] font-bold mb-3">
            Chega de tentar sozinho
          </h2>
          <p className="sm:text-[16px] text-[14px] text-center sm:text-start max-w-[500px]">
            Com o TegPro, você tem método, apoio e resultado real. <strong>Essa é sua chance de vender de verdade.</strong>
          </p>
        </div>

        {/* Envolve o LinkButton na div com hover */}
        <div className="group inline-block transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#C9A050]/50 rounded-xl">
          <LinkButton text="Quero transformar meu negócio" shadow full />
        </div>
      </div>


      {/* Bloco inferior */}
      <div className="bg-[#000000] text-[#DEDEDE] py-[50px] border-t border-[#F0F0F0] text-base">
        <div className="container flex mx-auto px-5 grid grid-cols-1 md:grid-cols-3 items-center flex-col">
          {/* Coluna esquerda vazia para balancear o centro */}
          <div className="hidden md:block" aria-hidden="true" />

          {/* Centro: Logo + direitos (centralizados em relação ao container) */}
          <div className="flex flex-col justify-self-center items-center text-center">
            <Image
              src="/logo.avif"
              alt="Logo TegPro"
              width={150}
              height={50}
              priority
            />
            <p className="text-lg mt-5 font-medium">
              &copy; 2025 TegPro. Todos os direitos reservados.
            </p>
          </div>

          {/* Direita: Afiliados encostados à direita */}
          <div className="flex flex-col items-center md:justify-self-end mt-8 md:mt-0 text-center md:text-right">
            <span className="block font-semibold text-lg mb-2">Powered by</span>
            <a
              href="https://mavellium.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              title="Mavellium"
            >
              <Image
                src="/logo-Mavellium.avif"
                alt="Logo Mavellium"
                width={200}
                height={50}
                priority
              />
            </a>
          </div>
        </div>

        {/* Ícones sociais */}
        <div className="flex justify-center gap-4 mt-8">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100095204700541"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition-all duration-300 hover:[&>svg>path]:fill-[#F2D95D]"
          >
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.8337 13.5389C26.8337 6.1789 20.8603 0.205566 13.5003 0.205566C6.14033 0.205566 0.166992 6.1789 0.166992 13.5389C0.166992 19.9922 4.75366 25.3656 10.8337 26.6056V17.5389H8.16699V13.5389H10.8337V10.2056C10.8337 7.63223 12.927 5.5389 15.5003 5.5389H18.8337V9.5389H16.167C15.4337 9.5389 14.8337 10.1389 14.8337 10.8722V13.5389H18.8337V17.5389H14.8337V26.8056C21.567 26.1389 26.8337 20.4589 26.8337 13.5389Z" fill="#F0F0F0" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/agenciategbe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-all duration-300 hover:[&>svg>path]:fill-[#F2D95D]"
          >
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.90033 0.205566H19.1003C23.367 0.205566 26.8337 3.67223 26.8337 7.9389V19.1389C26.8337 21.1899 26.0189 23.1569 24.5686 24.6072C23.1183 26.0575 21.1513 26.8722 19.1003 26.8722H7.90033C3.63366 26.8722 0.166992 23.4056 0.166992 19.1389V7.9389C0.166992 5.88789 0.981752 3.92089 2.43203 2.47061C3.88231 1.02033 5.84932 0.205566 7.90033 0.205566ZM7.63366 2.87223C6.36062 2.87223 5.13972 3.37795 4.23955 4.27812C3.33937 5.1783 2.83366 6.39919 2.83366 7.67223V19.4056C2.83366 22.0589 4.98033 24.2056 7.63366 24.2056H19.367C20.64 24.2056 21.8609 23.6999 22.7611 22.7997C23.6613 21.8995 24.167 20.6786 24.167 19.4056V7.67223C24.167 5.0189 22.0203 2.87223 19.367 2.87223H7.63366ZM20.5003 4.87223C20.9424 4.87223 21.3663 5.04783 21.6788 5.36039C21.9914 5.67295 22.167 6.09687 22.167 6.5389C22.167 6.98093 21.9914 7.40485 21.6788 7.71741C21.3663 8.02997 20.9424 8.20557 20.5003 8.20557C20.0583 8.20557 19.6344 8.02997 19.3218 7.71741C19.0093 7.40485 18.8337 6.98093 18.8337 6.5389C18.8337 6.09687 19.0093 5.67295 19.3218 5.36039C19.6344 5.04783 20.0583 4.87223 20.5003 4.87223ZM13.5003 6.87223C15.2684 6.87223 16.9641 7.57461 18.2144 8.82485C19.4646 10.0751 20.167 11.7708 20.167 13.5389C20.167 15.307 19.4646 17.0027 18.2144 18.2529C16.9641 19.5032 15.2684 20.2056 13.5003 20.2056C11.7322 20.2056 10.0365 19.5032 8.78628 18.2529C7.53604 17.0027 6.83366 15.307 6.83366 13.5389C6.83366 11.7708 7.53604 10.0751 8.78628 8.82485C10.0365 7.57461 11.7322 6.87223 13.5003 6.87223ZM13.5003 9.5389C12.4395 9.5389 11.422 9.96033 10.6719 10.7105C9.92175 11.4606 9.50033 12.478 9.50033 13.5389C9.50033 14.5998 9.92175 15.6172 10.6719 16.3673C11.422 17.1175 12.4395 17.5389 13.5003 17.5389C14.5612 17.5389 15.5786 17.1175 16.3288 16.3673C17.0789 15.6172 17.5003 14.5998 17.5003 13.5389C17.5003 12.478 17.0789 11.4606 16.3288 10.7105C15.5786 9.96033 14.5612 9.5389 13.5003 9.5389Z" fill="#F0F0F0" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
