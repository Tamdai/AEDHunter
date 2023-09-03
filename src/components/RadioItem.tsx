type Props = {
  label: string;
  name: string;
  value: string | number;
  update: string | number;
  onChange: (value: string | number) => void;
};

const RadioItem = ({ label, name, value, update, onChange }: Props) => {
  return (
    <li>
      <div className="form-control p-0">
        <label className="label cursor-pointer">
          <input
            type="radio"
            name={name}
            className="radio checked:bg-green-400  mr-3"
            value={value}
            checked={value === update ? true : false}
            onChange={() => onChange(value)}
          />
          <span className="label-text">{label}</span>
        </label>
      </div>
    </li>
  );
};

export default RadioItem;
