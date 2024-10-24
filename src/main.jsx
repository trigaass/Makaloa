import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Headder } from './components/header';
import { Banner } from './components/banner';
import { Empreendimento } from './components/empreendimentos';
import { Apartamentos } from './components/apartamentos';
import { Localização } from './components/localização';
document.body.style.margin ="0";
document.body.style.overflowX = "hidden";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Headder />
    <Banner />
    <Empreendimento />
    <Apartamentos />
    <Localização />
  </StrictMode>,
)
