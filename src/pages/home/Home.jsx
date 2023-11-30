import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { createData, deleteData, getData, updateData } from '../../store/users/userActions';


function Home() {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch()
  const { products } = useSelector( store => store.user )

  useEffect(() => {
    dispatch(getData());
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name,
      price
    };
    dispatch(createData(product));
  }

  const handleEdit = (item) => {
    setName(item.name);
    setPrice(item.price);
    setId(item.id);
  }

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const product = {
      id,
      name,
      price
    };
    dispatch(updateData(product));
  }

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  }

  return (
    <div>
      <h1>CRUD Productos</h1>
      <form >
        <input type="text" readOnly hidden value={id}/>
        <div>
          <label htmlFor="">Nombre de producto</label>
          <input type="text" name="name" value={name} placeholder='Ingrese el nombre de producto' onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Precio de producto</label>
          <input type="number" name="price" value={price} placeholder='Ingrese el precio de producto' onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <button type='button' onClick={(e) => handleSubmit(e)}>Enviar producto</button>
        <button type='button' onClick={(e) => handleSubmitEdit(e)}>Editar</button>

      </form>
      {products.map(item => (<div key={item.id}>Producto: {item.nombre || item.name} - Precio:{item.precio || item.price} <button type='button' onClick={() => handleEdit(item)}>Editar</button> <button type='button' onClick={() => handleDelete(item.id)}>Eliminar</button></div>))}
    </div>
  )
}

export default Home