import { Orbitron, Poppins, Podkova } from "next/font/google";

const orbitron = Orbitron(
    {
      subsets: ['latin'],
      weight: ['400','500']
    }
)
  
const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: ['400', '500','200','300']
    }
)
  

const podkova = Podkova(
    {
        subsets: ['latin'],
        weight: ['400', '500',]
    }
)

export {orbitron,poppins, podkova}