type Props = {
  label: string;
  onChange: (label: string) => void;
  isDisable: boolean;
};

const CheckboxItem = ({ label, onChange, isDisable }: Props) => {
  return (
    <li>
      <div className="form-control p-0">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="checkbox mr-3"
            onChange={() => onChange(label)}
            disabled={isDisable}
          />
          <span className="label-text">{label}</span>
        </label>
      </div>
    </li>
  );
};

export default CheckboxItem;
