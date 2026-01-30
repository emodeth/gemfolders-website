import Link from "next/link";
import Image from "next/image";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-8 w-8 shrink-0 overflow-hidden hidden min-[425px]:block">
        <Image
          src="/images/logo.png"
          alt="Gemfolders Logo"
          fill
          className="object-cover"
        />
      </div>
      <span className="font-bold tracking-tight text-foreground text-[16px] min-[425px]:text-xl">
        Gemfolders
      </span>
    </Link>
  );
};

export default Logo;
