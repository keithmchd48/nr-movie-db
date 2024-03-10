import SampleList from "./SampleList";

const SecondaryContainer = ({content}) => {
  return (
    <div>
      <div className="-mt-56 relative z-20">
        {content.map((section) => {
          return <SampleList title={section.title} samples={section.samples} key={section.title} />;
        })}
      </div>
    </div>
  );
};

export default SecondaryContainer;