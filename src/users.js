import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((res) => {
      res.json().then((result) => {
        console.table(result);
        setData(result);
      });
    });
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
