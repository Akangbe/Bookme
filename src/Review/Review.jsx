import React from 'react';

function Review() {
  return (
  
    <div className="testimonials py-12 bg-gray-100 text-gray-800 Review" id='Review'>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-8 text-[#4c2882]">Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
        <p className="text-lg italic mb-4">
          “Book Me has transformed the way I manage my appointments. It’s so easy to use, and I love the real-time booking feature!”
        </p>
        <p className="text-right font-semibold">– Sarah J., User</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
        <p className="text-lg italic mb-4">
          “As a business owner, Book Me has helped me reach new clients and streamline my operations. It’s a game-changer!”
        </p>
        <p className="text-right font-semibold">– Michael R., Business Owner</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
        <p className="text-lg italic mb-4">
          “The personalized recommendations on Book Me have introduced me to amazing services I wouldn’t have found otherwise.”
        </p>
        <p className="text-right font-semibold">– Emily S., User</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
        <p className="text-lg italic mb-4">
          “The secure payment options on Book Me give me peace of mind. It’s the best platform for booking services!”
        </p>
        <p className="text-right font-semibold">– John D., User</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
        <p className="text-lg italic mb-4">
          “Managing my schedule has never been easier. Book Me’s scheduling tools are intuitive and save me so much time.”
        </p>
        <p className="text-right font-semibold">– Laura K., Business Owner</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
        <p className="text-lg italic mb-4">
          “Thanks to Book Me, my business has grown significantly. The marketing support is incredible!”
        </p>
        <p className="text-right font-semibold">– David P., Business Owner</p>
      </div>
      
    </div>
  </div>
</div>

  );
}

export default Review;
