import React, { Component } from "react";
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";
import "./directory.style.scss";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selector";

class Directory extends Component {
  render() {
    return (
      <div className="directory-menu">
        {this.props.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            title={title}
            imageUrl={imageUrl}
            key={id}
            size={size}
            url={linkUrl}
          />
        ))}
      </div>
    );
  }
}

// const mapStateToProps = ({ directory: { sections } }) => ({
//   sections: sections,
// });

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
