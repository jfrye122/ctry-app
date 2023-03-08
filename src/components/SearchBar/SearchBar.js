import { Checkbox, Input, Col, Row, Divider, Card } from "antd";

const CheckboxGroup = Checkbox.Group;

export default function SearchBar({
  filterText,
  onFilterTextChange,
  selectedIds,
  onHandleToggle,
  continents,
}) {

  return (
    <>
      <label>
        <h3>Search for:</h3>
        <Input
          type="text"
          value={filterText}
          placeholder="Country Name"
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </label>
      <Divider />
      <Card title={<h3>Continents Display Filter</h3>}>
        <CheckboxGroup>
          <Row gutter={[8, 2]} justify="space-evenly" align="middle">
            {continents.map((continent) => (
              <Col key={continent.code} span={8}>
                <Checkbox
                  value={continent.code}
                  checked={selectedIds.has(continent.code)}
                  onChange={() => {
                    onHandleToggle(continent.code);
                  }}
                >
                  {continent.name}
                </Checkbox>
              </Col>
            ))}
          </Row>
        </CheckboxGroup>
      </Card>
    </>
  );
}
