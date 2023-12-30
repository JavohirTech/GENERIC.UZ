// CardComponent.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CardComponent = ({ data }) => {
  const { id } = useParams();
  const selectedItem = data.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Element topilmadi</div>;
  }

  return (
    <section className="card-wrapper mt-8">
      <div className="card-container max-w-2xl mx-auto">
        <div className="card-info bg-cyan-800 rounded-lg p-8">
          <h2 className='text-white text-2xl font-bold mb-4'>{selectedItem.title}</h2>
          <img className='w-full h-auto mb-4' src={selectedItem.image} alt={selectedItem.title} />
          <div className='text-white text-sm font-bold'>
            <p>Series: {selectedItem.series}</p>
            <p>Video: {selectedItem.video}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
