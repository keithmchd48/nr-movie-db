import SampleList from "./SampleList";

const SecondaryContainer = ({ content }) => {
  return (
    <div>
      <div className="layout-padding xs:-mt-8 s:-mt-9 m:-mt-10 l:-mt-16 sm:-mt-8 md:-mt-24 lg:-mt-24 xl:-mt-52 relative z-20">
        {content.map((section) => {
          return <SampleList sectionData={section} key={section.id} />;
        })}
      </div>
    </div>
  );
};

export default SecondaryContainer;
