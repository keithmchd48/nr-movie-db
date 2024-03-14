import SampleList from "./SampleList";

const SecondaryContainer = ({content}) => {
  return (
    <div>
      <div className="xs:-mt-20 sm:mt-2 m:-mt-28 md:-mt-40 lg:-mt-56 relative z-20 lg:px-16 xs:px-8">
        {content.map((section) => {
          return <SampleList title={section.title} samples={section.samples} key={section.id} />;
        })}
      </div>
    </div>
  );
};

export default SecondaryContainer;