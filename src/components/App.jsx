// import { Component } from 'react';
import { useState, useEffect } from 'react';

const Modal = ({ url, onClose }) => {
  return (
    <div>
      <p>Modal</p>
      <p>URL {url}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
const List = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <ListItem item={item} key={item.large} />
      ))}
    </div>
  );
};
const ListItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsModalOpen(true)}>{item.large}</div>
      {isModalOpen && (
        <Modal url={item.large} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};
export const App = () => {
  const [images, setImage] = useState([
    { src: 'preview-1', large: 'large-1' },
    { src: 'preview-2', large: 'large-2' },
    { src: 'preview-3', large: 'large-3' },
  ]);
  return (
    <div>
      <List items={images} />
    </div>
  );
};

// export const App = () => {
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState('');
//   const [items, setItems] = useState([]);
//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(e.target.elements.query.value);
//     setPage(1);
//     setQuery(e.target.elements.query.value);
//     setItems([]);
//     e.target.reset();
//   };
//   const loadMore = () => {
//     setPage(prePage => prePage + 1);
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };
//   useEffect(() => {
//     console.log(page);
//     console.log(query);
//     console.log('Fetch');
//     setItems
//   }, [page, query]);
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="query" />
//         <button type="submit">Search</button>
//       </form>
//       <button onClick={loadMore}>Loader more</button>
//     </div>
//   );
// };
// import { MaterialEditorForm } from './MaterialEditorForm./MaterialEditorForm';
// import * as API from '../services/api.jsx';
// import { MaterialList } from './MaterialList/MaterialList';

// export class App extends Component {
//   state = {
//     page: 1,
//     query: '',
//     items: [],
//   };
//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(e.target.elements.query.value);
//     this.setState({
//       page: 1,
//       query: e.target.elements.query.value,
//       items: [],
//     });
//     e.target.reset();
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.page !== prevProps.page ||
//       prevState.query !== prevProps.query
//     ) {
//       console.log('Fetch');
//     }
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" name="query" />
//           <button type="submit">Search</button>
//         </form>
//         <button onClick={this.loadMore}>Loader more</button>
//       </div>
//     );
//   }
// }

// state = {
//   materials: [],
//   isLoading: false,
//   error: null,
// };
// async componentDidMount() {
//   try {
//     this.setState({ isLoading: true });
//     const materials = await API.getMaterials();
//     this.setState({ materials, isLoading: false });
//   } catch (error) {
//     console.log(error);
//     this.setState({ error });
//   }
// }
// addMaterial = async values => {
//   try {
//     this.setState({ isLoading: true });
//     const material = await API.addMaterial(values);
//     this.setState(state => ({
//       materials: [...state.materials, material],
//       isLoading: false,
//     }));
//   } catch (error) {
//     console.log(error);
//   }
// };
// deleteMaterials = async id => {
//   try {
//     await API.deleteMaterials(id);
//     this.setState(state => ({
//       materials: state.materials.filter(material => material.id !== id),
//     }));
//   } catch (error) {
//     this.setState({ error });
//     console.log(error);
//   }
// };
// updateMaterials = async fields => {
//   try {
//     const updatedMaterial = await API.updateMaterials(fields);
//     this.setState(state => ({
//       materials: state.materials.map(material =>
//         material.id === fields.id ? updatedMaterial : material
//       ),
//     }));
//   } catch (error) {
//     this.setState({ error });
//     console.log(error);
//   }
// };
// render() {
// const { isLoading, materials, error } = this.state;
// return (
//   <></>

// <>
//   {error && <h1>Ooh... something went wrong </h1>}
//   <MaterialEditorForm onSubmit={this.addMaterial} />
//   {isLoading ? (
//     <div>Loading</div>
//   ) : (
//     <MaterialList
//       items={materials}
//       onDelete={this.deleteMaterials}
//       onUpdate={this.updateMaterials}
//     />
//   )}
// </>
//     );
//   }
// }
