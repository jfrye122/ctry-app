export default function ContinentFilter({ code, name, onToggle, isSelected }) {
  return (
    <li className={isSelected ? "selected" : ""}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(code);
          }}
        />
        {name}
      </label>
    </li>
  );
}
