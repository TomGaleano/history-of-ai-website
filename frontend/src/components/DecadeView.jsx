import React from 'react';

const DecadeView = ({ decade }) => {
  if (!decade) {
    return <div>Select a decade to see the details.</div>;
  }

  return (
    <div>
      <h2>{decade.title}</h2>
      <h3>Milestone Models & Algorithms</h3>
      <p>{decade.milestoneModels}</p>
      <h3>Coding Focus</h3>
      <p>{decade.codingFocus}</p>
      <h3>Interactive Tool Showcase</h3>
      <p>{decade.interactiveToolShowcase}</p>
    </div>
  );
};

export default DecadeView;
