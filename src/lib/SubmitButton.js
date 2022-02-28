import classNames from 'classnames';

function SubmitButton(props) {
  const errorClasses = () => classNames(
    "float-right", "italic", "text-red-400", {"hidden": !props.error});

  const inputClasses = () => classNames(
    "float-right",
    "w-40",
    "px-4",
    "py-2",
    "font-bold",
    "bg-black",
    "text-white",
    "rounded");

  const subtextClasses = () => classNames(
    "text-right",
    "italic",
    "text-xs");

  return (
    <div className="w-96 m-auto grid grid-cols-1">
      <div>
        <input type="submit" value={props.value} className={inputClasses()} />
      </div>
      <div>
        <p className={subtextClasses()}>{props.subtext}</p>
      </div>
      <div>
        <p className={errorClasses()}>{props.error}</p>
      </div>
    </div>
  );
}

export default SubmitButton;
