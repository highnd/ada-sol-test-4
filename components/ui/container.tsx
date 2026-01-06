import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  const classes = ["w-full max-w-full", className].filter(Boolean).join(" ");

  return (
    <div
      className={classes}
      style={{
        paddingLeft: "clamp(1rem, 4vw + 0.5rem, 9rem)",
        paddingRight: "clamp(1rem, 4vw + 0.5rem, 9rem)",
        paddingTop: "clamp(1.5rem, 2vw + 1rem, 3rem)",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
