import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "default" | "outline";
type ButtonSize = "default" | "sm" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted hover:border-muted-foreground/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-5 py-2",
  sm: "px-4 py-1.5 text-sm",
  lg: "px-8 py-3",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "default", size = "default", className = "", ...props }, ref) => {
    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (props.as === "a") {
      const { as: _as, ...anchorProps } = props;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={combinedClassName}
          {...anchorProps}
        />
      );
    }

    const { as: _as, ...buttonProps } = props as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...buttonProps}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
