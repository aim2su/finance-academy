import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 bg-bg/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <img src="/logo.svg" alt="Farovon Academy" width={36} height={36} />
            <span className="font-semibold text-text">
              Академия<span className="text-accent"> </span>Фаровон
            </span>
          </div>
          <p className="text-sm text-muted max-w-sm leading-relaxed">
            Академия практических навыков в Таджикистане. Обучаем тому, что реально
            пригодится в работе и жизни.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-text mb-4">Навигация</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/courses" className="hover:text-accent transition-colors">Курсы</Link></li>
            <li><Link href="/teachers" className="hover:text-accent transition-colors">Преподаватели</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">О нас</Link></li>
            <li><Link href="/contacts" className="hover:text-accent transition-colors">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-text mb-4">Связаться</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <span>+992 00 000 00 00</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Таджикистан</span>
            </li>
            <li className="flex items-center gap-3 pt-1">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-accent transition-colors">
                <FaTelegram className="h-5 w-5" />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-accent transition-colors">
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 text-xs text-muted flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Академия Фаровон. Демо-сайт.</span>
          <span>Таджикистан</span>
        </div>
      </div>
    </footer>
  );
}







// import Link from "next/link";
// import { Phone, MapPin } from "lucide-react";
// import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";

// export function Footer() {
//   return (
//     <footer className="border-t border-border mt-24">
//       <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
//         <div className="md:col-span-2">
//           <div className="flex items-center gap-2.5 mb-4">
//             <img src="/logo.svg" alt="Farovon Academy" width={36} height={36} />
//             <span className="font-semibold text-text">
//               Академия<span className="text-accent"> </span>Фаровон
//             </span>
//           </div>
//           <p className="text-sm text-muted max-w-sm leading-relaxed">
//             Академия практических навыков в Таджикикстане. Обучаем тому, что реально
//             пригодится в работе и жизни.
//           </p>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold text-text mb-4">Навигация</h4>
//           <ul className="space-y-2 text-sm text-muted">
//             <li><Link href="/courses" className="hover:text-accent transition-colors">Курсы</Link></li>
//             <li><Link href="/teachers" className="hover:text-accent transition-colors">Преподаватели</Link></li>
//             <li><Link href="/about" className="hover:text-accent transition-colors">О нас</Link></li>
//             <li><Link href="/contacts" className="hover:text-accent transition-colors">Контакты</Link></li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold text-text mb-4">Связаться</h4>
//           <ul className="space-y-3 text-sm text-muted">
//             <li className="flex items-center gap-2">
//               <Phone className="h-4 w-4 text-accent" />
//               <span>+992 00 000 00 00</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <MapPin className="h-4 w-4 text-accent" />
//               <span>Таджикистан</span>
//             </li>
//             <li className="flex items-center gap-3 pt-1">
//               <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
//                 <FaInstagram className="h-5 w-5" />
//               </a>
//               <a href="#" aria-label="Telegram" className="hover:text-accent transition-colors">
//                 <FaTelegram className="h-5 w-5" />
//               </a>
//               <a href="#" aria-label="WhatsApp" className="hover:text-accent transition-colors">
//                 <FaWhatsapp className="h-5 w-5" />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="border-t border-border">
//         <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 text-xs text-muted flex flex-col sm:flex-row justify-between gap-2">
//           <span>© {new Date().getFullYear()} Академия Фаровон. Все права защищены.</span>
//           <span>Таджикистан</span>
//         </div>
//       </div>
//     </footer>
//   );
// }