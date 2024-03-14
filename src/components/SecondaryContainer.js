import SampleList from "./SampleList";

const SecondaryContainer = ({content}) => {
  return (
    <div>
      <div className="lg:-mt-56 md:-mt-40 s:-mt-10 relative z-20">
        {content.map((section) => {
          return <SampleList title={section.title} samples={section.samples} key={section.id} />;
        })}
      </div>
    </div>
  );
};

export default SecondaryContainer;