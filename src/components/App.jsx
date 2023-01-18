import { Component } from 'react';
import { MaterialEditorForm } from './MaterialEditorForm./MaterialEditorForm';
import * as API from '../services/api.jsx';
import { MaterialList } from './MaterialList/MaterialList';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: null,
  };
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    }
  }
  addMaterial = async values => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  deleteMaterials = async id => {
    try {
      await API.deleteMaterials(id);
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
  };
  updateMaterials = async fields => {
    try {
      const updatedMaterial = await API.updateMaterials(fields);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
  };
  render() {
    const { isLoading, materials, error } = this.state;
    return (
      <>
        {error && <h1>Ooh... something went wrong </h1>}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterials}
            onUpdate={this.updateMaterials}
          />
        )}
      </>
    );
  }
}
