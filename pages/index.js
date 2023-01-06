import { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Layout from '../components/Layout';
import FileLoader from '../components/FileLoader';



const Home = () => {

  useEffect(() => {
    console.log('useEffect index.js');
  }, []);

  return (
    <Layout title="Inicio">
      <h1>Selecciona tu archivo</h1>
      <FileLoader />
    </Layout>
  );
}

export default Home;
