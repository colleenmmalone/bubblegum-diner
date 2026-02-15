export default function CheckerboardBackground(props: {
  size?: number;
  className?: string;
  isAbsolute?: boolean;
  opacity?: number;
  color?: string;
}) {

  const size = props.size || 100;
  const opacity = props.opacity || 10;
  const color = props.color || "cherry";

  return (
    <>
      {/* checkerboard background  */}
      <div
        className={`${props.isAbsolute ? "absolute" : "relative"} inset-0 opacity-${opacity}`}
      >
        <div
          className={`w-full h-full ${props.className}`}
          style={{
            backgroundImage:
              `repeating-conic-gradient(var(--color-${color}) 0%, var(--color-${color}) 25%, transparent 0%, transparent 50%)`,
            backgroundSize: `${size}px ${size}px`,
          }}
        ></div>
      </div>
    </>
  );
}
