import "./CountryRow.css"

export default function CountryRow({ name, isHighlighted = false }) {
  return (
    <tr>
      <td colSpan="2" className={
        isHighlighted ? 'highlighted' : ''
      }
      >{name}</td>
    </tr>
  );
}
