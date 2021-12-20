import React from "react";

const Card = (props) => {
  const renderPeople = (arr) => {
    return arr.map((person) => {
      const { name, birthday, favoriteFoods } = person;
      return (
        <p>{`${name} ${birthday} ${favoriteFoods.meats.join(
          ", "
        )} ${favoriteFoods.fish.join(", ")}`}</p>
      );
    });
  };

  return <>{props.seniors && renderPeople(props.seniors)}</>;
};

export default Card;
