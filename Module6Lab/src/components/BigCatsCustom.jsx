import React, { useState } from 'react';
import SingleCatCustom from './SingleCatCustom';
import AddCatForm from './AddCatForm';

const BigCatsCustom = () => {
  const initialCats = [
    {
      id: 1,
      name: 'Cheetah',
      latinName: 'Acinonyx jubatus',
      image: 'https://twpark.com/wp-content/uploads/2023/05/2023MAY02_BABY_CHEETAH_CUBS_KAZI_ZURI_ANDIALEXANDER_0_DSC06575-Enhanced-NR-1-scaled.jpg'
    },
    {
      id: 2,
      name: 'Cougar',
      latinName: 'Puma concolor',
      image: 'https://www.shutterstock.com/image-photo/young-cougar-cub-playing-on-600nw-1807736962.jpg'
    },
    {
      id: 3,
      name: 'Jaguar',
      latinName: 'Panthera onca',
      image: 'https://littlebuddythecat.com/wp-content/uploads/2025/02/jaguar-cub.jpg'
    },
    {
      id: 4,
      name: 'Leopard',
      latinName: 'Panthera pardus',
      image: 'https://africafreak.com/wp-content/uploads/2019/10/baby-leopard-900x600.jpg'
    },
    {
      id: 5,
      name: 'Lion',
      latinName: 'Panthera leo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9ycBMCeQW15ot48zGp-GUygy1M2wLyjMpw&s'
    },
    {
      id: 6,
      name: 'Snow leopard',
      latinName: 'Panthera uncia',
      image: 'https://d.newsweek.com/en/full/2084433/snow-leopards-zurich-zoo-wajra.jpg?w=1600&h=1200&q=88&f=56e3bf0c5ca206d1ff7e7ad8e70c2db9'
    },
    {
      id: 7,
      name: 'Tiger',
      latinName: 'Panthera tigris',
      image: 'https://www.zooborns.com/.a/6a010535647bf3970b02c8d39f9d73200c-800wi'
    }
  ];

  const [allCats, setAllCats] = useState(initialCats);
  const [displayedCats, setDisplayedCats] = useState(initialCats);
  const [nextId, setNextId] = useState(8);
  const [isReversed, setIsReversed] = useState(false);

  const sortAlphabetically = () => {
    const sorted = [...displayedCats].sort((a, b) => a.name.localeCompare(b.name));
    setDisplayedCats(sorted);
    setIsReversed(false);
  };

  const reverseList = () => {
    const reversed = [...displayedCats].reverse();
    setDisplayedCats(reversed);
    setIsReversed(!isReversed);
  };

  const filterPanthera = () => {
    const pantheraFamily = allCats.filter(cat => cat.latinName.includes('Panthera'));
    setDisplayedCats(pantheraFamily);
    setIsReversed(false);
  };

  const resetList = () => {
    setAllCats(initialCats);
    setDisplayedCats(initialCats);
    setNextId(8);
    setIsReversed(false);
  };

  const addCat = (catData) => {
    const newCat = {
      id: nextId,
      name: catData.name,
      latinName: catData.latinName,
      image: catData.image
    };
    
    const updatedCats = [...allCats, newCat];
    setAllCats(updatedCats);
    setDisplayedCats(updatedCats);
    setNextId(nextId + 1);
    setIsReversed(false);
  };

  const deleteCat = (catId) => {
    const updatedCats = allCats.filter(cat => cat.id !== catId);
    setAllCats(updatedCats);
    setDisplayedCats(updatedCats.filter(cat => 
      displayedCats.some(displayedCat => displayedCat.id === cat.id)
    ));
  };

  return (
    <div className="big-cats-container">
      <AddCatForm onAddCat={addCat} />
      
      <div className="control-buttons">
        <button className="control-btn" onClick={sortAlphabetically}>
          Sort A-Z
        </button>
        <button className="control-btn" onClick={reverseList}>
          Reverse Order
        </button>
        <button className="control-btn" onClick={filterPanthera}>
          Panthera Family
        </button>
        <button className="control-btn reset-btn" onClick={resetList}>
          Reset List
        </button>
      </div>
      <div className="cats-info">
        <p>Showing {displayedCats.length} of {allCats.length} cats</p>
      </div>
      <div className="cats-grid">
        {displayedCats.map((cat) => (
          <SingleCatCustom key={cat.id} cat={cat} onDelete={deleteCat} />
        ))}
      </div>
    </div>
  );
};

export default BigCatsCustom;
