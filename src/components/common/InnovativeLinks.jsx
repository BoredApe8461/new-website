import React from "react";

const InnovativeLinks = ({ data }) => {
  return (
    <a
      onClick={(e) => onPress(e)}
      href={`#${data.id}`}
      className="innovative-text"
    >
      <div className="lg:pl-[20px]" data-to-scrollspy-id={data.id}>
        {data.title}
      </div>
    </a>
  );
};

export default InnovativeLinks;
