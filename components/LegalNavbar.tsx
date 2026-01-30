import Link from 'next/link';
import Logo from './Logo';

const LegalNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex flex-col min-[425px]:flex-row h-auto min-[425px]:h-16 items-center justify-between px-6 py-4 min-[425px]:py-0 max-w-5xl gap-4 min-[425px]:gap-0">
        <div className="flex items-center gap-8">
          <Logo className="text-xl text-black" />
        </div>

        <div className="flex items-center gap-6 min-[425px]:gap-8 text-xs min-[425px]:text-sm font-medium text-gray-600">
          <Link href="/legal/privacy" className="hover:text-black transition-colors whitespace-nowrap">
            Privacy Policy
          </Link>
          <Link href="/legal/terms" className="hover:text-black transition-colors whitespace-nowrap">
            Terms of Service
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LegalNavbar;
