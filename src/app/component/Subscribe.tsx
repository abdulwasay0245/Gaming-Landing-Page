'use client'
import React, { useState } from 'react';
import { orbitron } from './fonts';
import Button from './Button';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log(`Subscribing email: ${email}`);
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="mt-40 w-full max-w-lg relative p-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
      <div className=" rounded-lg p-8" style={{ background: 'radial-gradient(ellipse at center, #000000, #1f2937, #6b21a8)' }} >
        <div className="flex justify-center mb-6">
          <div className="w-12 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-center  text-white text-2xl md:text-3xl font-bold mb-2" style={orbitron.style}>Subscribe to our newsletters</h2>
        <p className="text-center text-gray-300 mb-6">stay up to date with our latest news and products</p>
        
        {subscribed ? (
          <div className="text-center text-green-400 py-4">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow p-3 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button text='Subscribe' />
            
          </form>
        )}
      </div>
    </div>
  );
}