import React from "react";
import PropTypes from "prop-types";

const ProjectList = (props) => {
  return (
    <div className="list">
      {props.projects.map((item, index) => (
        <div key={index} className="image">
          <img src={item.img} alt={item.img}/>
        </div>
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
};

export default ProjectList;
