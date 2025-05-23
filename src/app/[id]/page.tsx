import { vrCard } from "../component/data/card"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = vrCard.find((item) => item.id === params.id)

  if (!product) return <div className="text-center p-10">Product not found</div>

  return (
    <div className="p-10 text-center">
          <h1 className="text-3xl font-bold mb-4">{product.heading}</h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.img} alt={product.heading} className="mx-auto w-64 mb-4" />
      <p>{product.description}</p>
    </div>
  )
}