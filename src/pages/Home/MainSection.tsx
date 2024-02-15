import { memo } from "react";
import Card from "./../../components/Card";
type ResponseData = {
  title: string;
  playlist: {
    title: string;
    img: string;
    subTitle: string;
  }[];
};

type Props = {
  data: ResponseData[];
};

export default function MainSection({ data }: Props) {
  return (
    <div className="bg-[linear-gradient(var(--bg-elevated-base),var(--bg-base))] px-4 py-2 w-full">
      {data.map((data) => {
        return <Section data={data} key={data.title} />;
      })}
    </div>
  );
}

const Section = memo(({ data }: { data: ResponseData }) => {
  return (
    <div className="mt-2">
      <div className=" flex flex-grow justify-between mb-2">
        <div className="font-semibold text-xl text-white">{data.title}</div>
        <div className="text-gray-300 font-medium">View All</div>
      </div>

      <div className="flex flex-grow flex-wrap w-full gap-4">
        {data.playlist.map((data) => {
          return (
            <Card key={data.title} className=" flex flex-col flex-grow items-center min-w-[150px] overflow-auto max-w-[180px] p-4 bg-[var(--bg-base)] hover:bg-[var(--bg-elevated-base)]  shadow-2xl">
              
                <img src={data.img} className="overflow-hidden w-[90%] rounded-xl" />
                <div className="flex flex-col">
                <span className="text-white font-semibold my-1">{data.title}</span>
                <span className="text-white/60 font-normal">{data.subTitle}</span>
                </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
});
