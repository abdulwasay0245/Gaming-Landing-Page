import Image from "next/image"
import { vrCard } from "../component/data/card"
import Button from "../component/Button"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = vrCard.find((item) => item.id === params.id)

  if (!product) return <div className="text-center p-10">Product not found</div>

  return (
    <div className="pt-20 flex items-center justify-center">
          
      <Image
      src={product.img}
        height={200}
        width={200}
        alt={product.heading}
      className="w-3xl h-96 object-cover object-top aspect-auto"></Image>
      <div>

        <h1 className="text-3xl font-bold mb-4">{product.heading}</h1>
        <p>{product.description}</p>
        <Button text="Get Started" />
      </div>
    </div>
  )
}