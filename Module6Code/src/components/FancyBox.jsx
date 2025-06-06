function FancyBox(props) {
  return (
    <div className={"FancyBox FancyBox-" + props.color}>
      {props.children} {/* Content inside <FancyBox> ... </FancyBox> */}
    </div>
  );
}

export default FancyBox;