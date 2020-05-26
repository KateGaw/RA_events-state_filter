import React, { Component } from "react";
import projects from "./data";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

const types = {
  all: "All",
  websites: "Websites",
  flayers: "Flayers",
  business_cards: "Business Cards",
};

class Portfolio extends Component {
  state = {
    active: types.all,
  };

  onSelectFilter = (filter) => {
    this.setState({ active: filter });
  };

  render() {
    const filterProjects =
      this.state.active === types.all
        ? projects
        : projects.filter (
            (project) => project.category === this.state.active
          );

    return (
      <div>
        <Toolbar
          filters={Object.values(types)}
          selected={this.state.active}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={filterProjects} />
      </div>
    );
  }
}

export default Portfolio;
