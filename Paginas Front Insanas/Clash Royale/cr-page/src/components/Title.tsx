type Props = {
  name: string;
};

export function Title({ name }: Props) {
  return <h1 className="text-5xl font-bold uppercase">{name}</h1>;
}
