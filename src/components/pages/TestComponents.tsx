import Table, { GridTable } from "../../teststation/components/tables/Table";

const TestComponents = () => {
  const tableData = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Doe", age: 40 },
  ];

  return (
    <div>
      <h2>Tabelle</h2>
      <div>
        <Table data={tableData} />
        <GridTable data={tableData} />
      </div>
    </div>
  );
};

export default TestComponents;
