import DotBackground from "@/components/dot-background";

export default function PageTitle(props: { title: string; subtitle?: string }) {
  return (
    <section className="relative flex justify-center items-center py-20 px-4 bg-gradient-to-b from-cherry/30 to-cream overflow-hidden">
      <DotBackground dotSize={10} size={60} />
      <div className="z-10">
        <h1 className="z-10 text-5xl font-playfair md:text-7xl font-black text-gray-800 mt-2 mb-4">
          {props.title}
        </h1>
        {props.subtitle ? <p>{props.subtitle}</p> : null}
      </div>
    </section>
  );
}
