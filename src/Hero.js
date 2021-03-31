import React from "react";
import './App.css'
import ListItem from "./Data";
import Form from "./Form";
const Hero = ({ handleLogOut }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Bem vindo </h2>
        <button onClick={handleLogOut}>sair</button>
      </nav>
      <main className="main">
        <h1 className="cadform">Cadastro de atividades</h1>
        <Form />
        <ListItem />
      </main>
    </section>
  );
};


export default Hero;
