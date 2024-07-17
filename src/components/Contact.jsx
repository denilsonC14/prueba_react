import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir lógica para enviar el formulario, por ejemplo, a un servidor
    setIsSubmitted(true);
    // Limpiar el formulario después de enviar
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-100'>
      <form className='bg-white p-8 rounded-lg shadow-lg' onSubmit={handleSubmit}>
        <h2 className='text-2xl font-bold mb-6'>Contact Us</h2>
        {isSubmitted && (
          <div className='bg-green-100 text-green-700 p-4 rounded mb-4'>
            Formulario enviado exitosamente!
          </div>
        )}
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input
            className='w-full px-3 py-2 border rounded'
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='w-full px-3 py-2 border rounded'
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
            Message
          </label>
          <textarea
            className='w-full px-3 py-2 border rounded'
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          className='bg-[#00df9a] text-black w-full py-2 rounded-md font-medium'
          type='submit'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
