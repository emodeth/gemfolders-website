import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <span className="text-4xl font-bold tracking-tight text-foreground">
        gemfolders
      </span>
    </Link>
  );
};

export default Logo;
