import React, { useEffect, useState } from "react";
import fire from './Firebase'
import './App.css'

const useData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fire
      .firestore()
      .collection("taugor")
      .onSnapshot(snapshot => {
        const list = snapshot.docs.map(doc => ( {
          id: doc.id,
        ...doc.data(),
        }))
        setData(list)
      })       
}, [])
  return data;
};

const deleteItem = id => {
  fire
    .firestore()
    .collection("taugor")
    .doc(id)
    .delete();
};

const ListItem = () => {
  const itemList = useData();
  return (
    <div>
      <table className="lista">
      <tbody>
        <tr>
          <td>Titulo</td>
          <td>Descrição</td>
          <td>Responsavel</td>
          <td>Status</td>
        </tr>
      </tbody>
      {itemList.map(item => (
        <tbody key={item.id}> 
          <tr>
            <td>{item.titulo}</td>
            <td>{item.descricao}</td>
            <td>{item.usuario}</td>
            <td>{item.status}</td>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </tr>
        </tbody>
      ))}
      </table>
    </div>
  )
}
export default ListItem;
