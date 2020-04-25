import React, { Component } from "react";

import "./List.css";
import PropTypes from "prop-types";

class List extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };

  state = {
    filterText: "",
  };

  onChangeFilterText = (e) => {
      this.setState({
          filterText: e.target.value
      });
  }

  render() {

    const filteredContacts = this.props.contacts.filter(
        contact => {
            return contact.name.toLowerCase().indexOf(
                this.state.filterText.toLowerCase()
            ) !== -1
        }
    )

    return (
      <div className={"listArea"}>
        <h3>Search Contact</h3>
        <input
          value={this.state.filterText}
          onChange={this.onChangeFilterText}
          type="text"
          name="filter"
          id="filter"
          placeholder={"Filter by name or phone"}
        />
        <h4>Contact List</h4>
        <ul className={"list"}>
          {filteredContacts.map((contact) => (
            <li key={contact.phone}>
              <span className={"name"}>{contact.name}</span>
              <span className={"phone"}>{contact.phone}</span>
              <span className={"clearfix"}></span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
