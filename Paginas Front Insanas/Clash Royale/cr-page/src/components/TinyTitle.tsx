type Props = {
  name: string;
};

export function TinyTitle({ name }: Props) {
  return <h1 className="text-2xl font-medium uppercase">{name}</h1>;
}
