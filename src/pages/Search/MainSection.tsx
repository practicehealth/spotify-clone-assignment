import { memo } from "react";
type ResponseData = {
  bgColor: string;
  title: string;
  img: string;
};

type Props = {
  data: ResponseData[];
};

export default function MainSection({ data }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
      {data.map((data) => {
        return <Card data={data} key={data.title} />;
      })}
    </div>
  );
}

const Card = memo(({ data }: { data: ResponseData }) => {
  return (
    <div
      key={data.title}
      className="  overflow-hidden h-[200px] p-4 hover:opacity-80 shadow-xl relative rounded-lg"
      style={{ backgroundColor: data.bgColor }}
    >
      <span className="text-white font-semibold my-1">{data.title}</span>
      <img src={data.img} className="w-[55%] max-w-[150px] rotate-[25deg] absolute right-0 bottom-0 translate-x-4" />
    </div>
  );
});
