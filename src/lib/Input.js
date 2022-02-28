import classNames from 'classnames';

function Input(props) {
    const errorClasses = () => classNames(
      "float-right", "italic", "text-red-400", {"hidden": !props.error});

    const inputClasses = () => classNames(
      "rounded-md", "block", "w-full", "mt-1", "focus:ring",
      "focus:ring-black", "focus:ring-opacity-50",
      {"border-red-700 border-2": props.error});

  return (
    <label className="block">
      <div>
        <span className="float-left pl-1">{props.label}</span>
        <span className={errorClasses()}>
          * {props.error}
        </span>
      </div>
      <input
          type={props.type}
          name={props.name}
          autoComplete={props.autoComplete}
          onChange={props.onChange}
          className={inputClasses()}
          id={props.id}
      />
    </label>
  )
}

export default Input;
