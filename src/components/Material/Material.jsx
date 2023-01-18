import { Component } from 'react';

const EditMaterialModal = ({ toggleModal, onEdit }) => {
  return (
    <div>
      <h2>Modal</h2>
      <button
        type="button"
        onClick={() => {
          onEdit();
          toggleModal();
        }}
      >
        Really Edit
      </button>
      <button onClick={() => toggleModal()}>Close</button>
    </div>
  );
};
// ({ item, onDelete, onUpdate })
export class Material extends Component {
  state = {
    modal: false,
  };
  toggleModal = () => {
    this.setState(prevstate => ({
      modal: !prevstate.modal,
    }));
  };
  render() {
    const { item, onDelete, onUpdate } = this.props;
    return (
      <div>
        <p>
          <b>Title:</b> {item.title}
        </p>
        <p>
          <b>Link:</b> {item.link}
        </p>
        <hr />
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
        <button type="button">Edit</button>
        {this.state.modal ? (
          <EditMaterialModal
            toggleModal={this.toggleModal}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
          />
        ) : (
          <button type="button" onClick={this.toggleModal}>
            Open
          </button>
        )}
      </div>
    );
  }
}
