import { Orbitron, Poppins, Podkova } from "next/font/google";

const orbitron = Orbitron(
    {
      weight: ['400','500']
    }
)
  
const poppins = Poppins(
    {
        weight: ['400', '500','200','300']
    }
)
  

const podkova = Podkova(
    {
        weight: ['400', '500',]
    }
)

export {orbitron,poppins, podkova}