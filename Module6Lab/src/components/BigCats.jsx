import React from 'react';
import SingleCat from './SingleCat';

const BigCats = () => {
  const cats = [
    {
      id: 1,
      name: 'Cheetah',
      latinName: 'Acinonyx jubatus',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwosKfc1kX-XMKJ1JuH4Hgmm9Vdnr5LMvdQ&s'
    },
    {
      id: 2,
      name: 'Cougar',
      latinName: 'Puma concolor',
      image: 'https://thumbs.dreamstime.com/b/funny-face-cougar-showing-tongue-puma-concolor-funny-face-cougar-showing-tongue-puma-concolor-also-known-as-mountain-lion-300861903.jpg'
    },
    {
      id: 3,
      name: 'Jaguar',
      latinName: 'Panthera onca',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Panthera_onca_at_the_Toronto_Zoo_2.jpg'
    },
    {
      id: 4,
      name: 'Leopard',
      latinName: 'Panthera pardus',
      image: 'https://www.mediastorehouse.com/p/466/african-leopard-panthera-pardus-pardus-adult-5842266.jpg.webp'
    },
    {
      id: 5,
      name: 'Lion',
      latinName: 'Panthera leo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcJ3Fu5vXkH4g-dzVFEU1cDx0_H6XUkutEA&s'
    },
    {
      id: 6,
      name: 'Snow leopard',
      latinName: 'Panthera uncia',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Snow_Leopard_Making_Funny_Face_%2818025594408%29.jpg/2560px-Snow_Leopard_Making_Funny_Face_%2818025594408%29.jpg'
    },
    {
      id: 7,
      name: 'Tiger',
      latinName: 'Panthera tigris',
      image: 'https://i.pinimg.com/736x/4f/6a/02/4f6a024033aae73f80ea5f53c694aa22.jpg'
    }
  ];

  return (
    <div className="big-cats-container">
      <div className="cats-grid">
        {cats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default BigCats;
