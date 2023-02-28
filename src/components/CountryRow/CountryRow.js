export default function CountryRow({ name, color = 'black' }) {
  return (
    <tr>
      <td colSpan="2" style={{ color: color}}>{name}</td>
    </tr>
  );
}
