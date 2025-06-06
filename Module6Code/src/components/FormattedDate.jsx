function FormattedDate({ date }) {
  return <div className="Comment-date">{date.toLocaleString()}</div>;
}

export default FormattedDate;
