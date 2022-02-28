function Form(props) {
  return (
    <div className={props.className}>
      <form className="grid grid-cols-1 gap-6" onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </div>
  );
}

export default Form;
