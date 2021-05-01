import React, { Component } from 'react';

import './style.css';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  
  render() {
  return (
    <div className="category-tabs">
      <section className="projects-grid">
        {this.toggleCategories}
      </section>
    </div>
    )
  }
}

export default Projects;
