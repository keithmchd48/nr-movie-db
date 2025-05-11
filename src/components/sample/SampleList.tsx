import SampleCard from "components/sample/SampleCard";
import { TPartialCommonMedia, TContentIterator } from "hooks/types";

const SampleList = ({ sectionData }: {sectionData: TContentIterator}) => {
  const title: string = sectionData.title;
  const samples: TPartialCommonMedia[] = sectionData.samples;
  const sampleType: string = sectionData.sampleType;

  return (
    <div className="mb-11 last:mb-0">
      <h1 className="text-white text-2xl mb-3">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex gap-3">
          {samples &&
            samples.map((sample: TPartialCommonMedia) => {
              return (
                <SampleCard
                  sampleType={sampleType}
                  sample={sample}
                  key={sample.id + sampleType}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SampleList;
