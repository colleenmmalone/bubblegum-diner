export default function DotBackground(props: { size?: number; dotSize?: number, opacity?: number; }) {
  const size = props.size || 32;
  const dotSize = props.dotSize || 2;
  const opacity = props.opacity || 30;

  return (
    <>
      {/* dot background  */}
      <div className={`absolute z-5 inset-0 opacity-${opacity}`}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              `radial-gradient(circle, white ${dotSize}px, transparent ${dotSize}px)`,
            backgroundSize: `${size}px ${size}px`,
          }}
        />
      </div>
    </>
  );
}
