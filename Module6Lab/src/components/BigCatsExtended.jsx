import React, { useState } from "react";
import SingleCatExtended from "./SingleCatExtended";

const BigCatsExtended = () => {
  const cats = [
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image:
        "https://i.pinimg.com/736x/3b/61/99/3b6199b2d2ee961169cb4f506d88cdf8.jpg",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeeTYzCiWbmbJMrbAQcYyMRhDKc-L0B37Xow&s",
    },
    {
      id: 3,
      name: "Jaguar",
      latinName: "Panthera onca",
      image: "https://media.craiyon.com/2025-04-19/1_fflqtkRByZzz8xuBgB8g.webp",
    },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image: "https://media.craiyon.com/2025-04-03/8DvV89zXR-K0vA4vdzBJwQ.webp",
    },
    {
      id: 5,
      name: "Lion",
      latinName: "Panthera leo",
      image:
        "https://masterpiecer-images.s3.yandex.net/a7f075b43ddf11ee8ecf3a7ca4cc1bdc:upscaled",
    },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsvRfHXfr-_quSdnZ4MdJEjON1jIt7JAdlg&s",
    },
    {
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQeBX8oLD8i4MaiYv-WEddHkEr07yuL-xZg&s",
    },
  ];

  const [displayedCats, setDisplayedCats] = useState(cats);
  const [isReversed, setIsReversed] = useState(false);

  const sortAlphabetically = () => {
    const sorted = [...displayedCats].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    setDisplayedCats(sorted);
    setIsReversed(false);
  };

  const reverseList = () => {
    const reversed = [...displayedCats].reverse();
    setDisplayedCats(reversed);
    setIsReversed(!isReversed);
  };

  const filterPanthera = () => {
    const pantheraFamily = cats.filter((cat) =>
      cat.latinName.includes("Panthera"),
    );
    setDisplayedCats(pantheraFamily);
    setIsReversed(false);
  };

  const resetList = () => {
    setDisplayedCats(cats);
    setIsReversed(false);
  };

  return (
    <div className="big-cats-container">
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
        <p>
          Showing {displayedCats.length} of {cats.length} cats
        </p>
      </div>
      <div className="cats-grid">
        {displayedCats.map((cat) => (
          <SingleCatExtended key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default BigCatsExtended;
