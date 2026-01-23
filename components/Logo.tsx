import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className="flex items-center">
      <span className={`font-bold tracking-tight text-foreground ${className}`}>
        gemfolders
      </span>
    </Link>
  );
};

export default Logo;
