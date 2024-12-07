import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import '../index.css'; // Importa los estilos desde index.css

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data));
  }, [id]);

  if (!dentist) return <div>Loading...</div>;

  return (
    <div className={state.theme}>
      <h1>Detail Dentist id {id}</h1>
      <table className="dentist-details">
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Detail;