import React, { useState } from 'react';
import { Header } from '../assets/components/Header';

export const Landingpage = () => {
  const [data, setData] = useState([]);

  const handleSaveUser = (user) => {
    setData([...data, user]);
  };

  return (
    <div>
      <Header onAddUser={handleSaveUser} />
      <table style={{border: '1px solid black', margin: 'auto'}}>
        <thead>
        </thead>
        <tbody>
          {data.map((item) => (
        <tr key={item.name}>
        <td colSpan="2">{item.name},<br></br> {item.address}</td>
        <td>{item.hobby}</td>
        </tr>
        ))}
        </tbody>
      </table>
      </div>
      );
      };
