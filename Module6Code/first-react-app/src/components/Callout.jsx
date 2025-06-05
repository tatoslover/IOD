import FancyBox from './FancyBox';

function Callout(props) {
  return (
    <FancyBox color="blue">
      <h1 className="Callout-title">{props.title}</h1>
      <p className="Callout-message">{props.message}</p>
      {props.children} {/* Content inside <Callout> ... </Callout> */}
    </FancyBox>
  );
}

export default Callout;
