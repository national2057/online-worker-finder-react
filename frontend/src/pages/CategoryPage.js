import React from 'react';
import { useParams } from 'react-router-dom';
import ProblemDesc from '../PostForms/ProblemDesc';
import { categoryImages } from '../dummy/CategoryImages';


const CategoryPage = () => {
  const { topic } = useParams();

  // Normalize the topic to match the keys in categoryImages
  const normalizedTopic = topic.toLowerCase().replace(/\s+/g, '-');
  const imagePath = categoryImages[normalizedTopic];

  console.log(`Category: ${topic}`);
  console.log(`Normalized Category: ${normalizedTopic}`);
  console.log(`Image Path: ${imagePath}`);

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold my-10 capitalize'>{topic}</h1>
      <div className='flex flex-row w-full justify-between'>
        <div className='w-1/2 flex justify-center'>
          {imagePath ? (
            <img src={imagePath} alt={topic} className='w-[500px] h-[500px] object-cover m-2' />
          ) : (
            <p className='text-red-500'>No image available for this category.</p>
          )}
        </div>
        <div className='w-1/2'>
          <ProblemDesc />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

