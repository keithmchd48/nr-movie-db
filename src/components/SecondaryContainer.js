import SampleList from "./SampleList";

const SecondaryContainer = ({content}) => {
  return (
    <div>
      <div className="xs:-mt-8 s:-mt-9 m:-mt-10 l:-mt-16 sm:-mt-11 md:-mt-24 lg:-mt-24 xl:-mt-52 relative z-20 lg:px-16 xs:px-8">
        {content.map((section) => {
          return <SampleList title={section.title} samples={section.samples} key={section.id} />;
        })}
      </div>
    </div>
  );
};

export default SecondaryContainer;