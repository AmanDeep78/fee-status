import React, { useEffect, useState } from 'react';
import './DataTable.css';
const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

   

  return (
    
    <table>
      <thead>
        <tr>
          <th>Enrollment No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Postal Code</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.enrollment_number}</td>
            <td>{row.full_name}</td>
            <td>{row.email_address}</td>
            <td>{row.mobile}</td>
            <td>{row.address}</td>
            <td>{row.postal_code}</td>
            <td>{row.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
