import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = () => {
      const fetchedImages = [];
      for (let i = 0; i < 6; i++) {
        const imageUrl = `https://picsum.photos/200/300?random=${i + 1}`;
        const name = `Image ${i + 1}`;
        const price = (Math.random() * 100).toFixed(2);
        fetchedImages.push({ imageUrl, name, price });
      }
      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  return (
    <div className='w-full py-16 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {images.map((image, index) => (
          <div key={index} className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-full h-48 object-cover' src={image.imageUrl} alt={`Random ${index + 1}`} />
            <h2 className='text-2xl font-bold text-center py-8'>{image.name}</h2>
            <p className='text-center text-4xl font-bold'>${image.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

