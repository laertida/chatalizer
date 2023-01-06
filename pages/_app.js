import '../styles/globals.css';
import { useContext } from "react";
import AppContext from '../context/AppContext.js';


export default function App({ Component, pageProps }) {

  const { data } = useContext(AppContext);

  return (

    <AppContext.Provider value={data}>
      <Component {...pageProps} />
    </AppContext.Provider >
  );
}
