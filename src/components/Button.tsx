// "use client";

// import { ButtonHTMLAttributes } from "react";

// interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant: "primary-solid" | "secondary-outline";
//   size: "sm" | "md" | "lg" | "xl" | "xxl";
// }

// const variants = {
//   "primary-solid":
//     "bg-primary text-white hover:bg-[#015364] focus:bg-[#026E78] focus:shadow-md focus:shadow-[#94F3DA] disabled:bg-[#D0D5DD]",
//   "secondary-outline":
//     "border border-primary text-primary hover:border-[#003C51] hover:text-[#003C51] focus:shadow-md focus:shadow-[#94F3DA] disabled:text-[#D0D5DD] disabled:border-[#D0D5DD]",
// };

// const sizes = {
//   sm: "h-8",
//   md: "h-10",
//   lg: "h-11",
//   xl: "h-12",
//   xxl: "h-14",
// };

// const Button: React.FC<IProps> = (props) => {
//   const { children, variant, size } = props;
//   return (
//     <button
//       {...props}
//       className={`flex items-center px-4 py-2 rounded-full ${variants[variant]} ${sizes[size]}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva("flex items-center px-4 py-2 rounded-full", {
  variants: {
    variant: {
      "primary-solid":
        "bg-primary text-white hover:bg-[#015364] focus:bg-[#026E78] focus:shadow-md focus:shadow-[#94F3DA] disabled:bg-[#D0D5DD]",
      "secondary-outline":
        "border border-primary text-primary hover:border-[#003C51] hover:text-[#003C51] focus:shadow-md focus:shadow-[#94F3DA] disabled:text-[#D0D5DD] disabled:border-[#D0D5DD]",
    },
  },
  defaultVariants: {
    variant: "primary-solid",
  },
});

const Button = (props: IProps) => {
  const { children, variant, ...rest } = props;
  return (
    <button {...rest} className={`${buttonVariants({ variant })}`}>
      {children}
    </button>
  );
};

export default Button;
