import { orbitron, poppins } from "./fonts";


const Testimonial = ({ author, text, rating }:{author: string, text: string, rating: number}) => {
  // Create an array of 5 stars
  const stars = Array(5).fill(0);
  
  return (
    <div className="  p-4 rounded-lg border border-purple-500  bg-opacity-30 flex flex-col justify-between">
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-white font-bold mb-2 text-2xl" style={orbitron.style}>{author}</h3>
        <p className="text-gray-300 font-light text-sm mb-3 " style={poppins.style}>{text}</p>
      </div>
      <div className="flex text-yellow-400 mt-1 self-center">
        {stars.map((_, index) => (
          <svg 
            key={index} 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      author: "Ceri Davies",
      text: "Fantastic lots of games in this website, no ads thats really amazing, a any good quality of VR game doesn't seem required.",
      rating: 5
    },
    {
      id: 2,
      author: "James Tompkin",
      text: "the vr gam play are highly intuitive, sooth ant adapting well to VR's unique capabilities and the futures is all on the spot.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center  p-4"   style={{ background: 'radial-gradient(ellipse at center, #000000, #1f2937, #6b21a8)' }} >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">What they say</h2>
      
      <div className="flex flex-col md:flex-row gap-6 max-w-4xl">
        {testimonials.map(testimonial => (
          <Testimonial 
            key={testimonial.id}
            author={testimonial.author}
            text={testimonial.text}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </div>
  );
}