export default function PageContainer(props: { children?: React.ReactNode }) {
  return (
    <section className="relative flex-1 text-center overflow-hidden">
      {props.children}
    </section>
  );
}
