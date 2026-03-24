import Link from "next/link";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center   gap-1 px-4 py-1${className}`}>
      <span className="font-bold tracking-tight text-foreground text-[16px]">
        gemfolders
      </span>
    </Link>
  );
};

export default Logo;
