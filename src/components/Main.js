import React, { Components, Component } from 'react';

class Main extends Component {
  render() {
    return(
      <section>
        <div className="main-hero wrapper">
          <h1>Rosten<span className="rosten-notes">Notes</span></h1>
          <p>Laborum ipsum duis amet laborum nisi sunt ut laboris. Consequat dolor fugiat ullamco consequat proident tempor elit deserunt mollit anim. Officia officia nisi magna duis incididunt laboris enim ullamco velit sunt ut consectetur.</p>
          <button>Ver notas</button>
        </div>        
        <div className="yellow-bg"></div>
      </section>
    );
  }
}

export default Main;