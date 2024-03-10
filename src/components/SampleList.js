import SampleCard from "./SampleCard";

const SampleList = ({title, samples}) => {
  return (
    <div className="px-16 mb-11 last:mb-0">
      <h1 className="text-white text-2xl mb-3">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex w-100">
            {
              samples && (samples.map((sample) => {
                return <SampleCard sample={sample} key={sample.id} />;
              }))
            }
          </div>
      </div>
    </div>
  );
};

export default SampleList;