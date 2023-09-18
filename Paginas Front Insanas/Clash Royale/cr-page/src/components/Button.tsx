type Props = {
  name: string;
};

export function Button({ name }: Props) {
  return (
    <button className="bg-primary-blue rounded-lg  px-6 py-3">
    <span className="text-1xl text-white uppercase font-semibold">{name}</span>
  </button>
  )
    
}
