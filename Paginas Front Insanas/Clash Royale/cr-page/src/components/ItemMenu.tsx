type Props = {
  name: string;
};

export function ItemMenu({ name }: Props) {
  return (
    <button className="flex items-center">
      <span className="text-white font-bold">{name}</span>
    </button>
  );
}
