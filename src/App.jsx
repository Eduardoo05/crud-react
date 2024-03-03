import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter } from 'reactstrap';

class App extends Component {
  state = {
    //data: data,
    modalInsertar: false,
    form:{
      id: '',
      personaje: '',
      anime: ''
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, personaje: "Naruto", anime: "Naruto" },
        { id: 2, personaje: "Goku", anime: "Dragon Ball" },
        { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
        { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
        { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood" },
        { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
      ],
    };
  }

  handleChange=(e)=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: [e.target.value],
      }
    })
  }

  mostrarModalInsertar = () =>{
    this.setState({modalInsertar: true})
  }

  ocultarModalInsertar = () =>{
    this.setState({modalInsertar: false})
  }
  render() {
    return (
      <>
      <Container>
        <br />
        <Button color="success" onClick={()=> this.mostrarModalInsertar()}>Insertar nuevo personaje</Button>
        <br /> <br />

        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Personaje</th>
              <th>Anime</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((elemento) => (
              <tr key={elemento.id}>
                <td>{elemento.id}</td>
                <td>{elemento.personaje}</td>
                <td>{elemento.anime}</td>
                <td>
                  <Button color="primary">Editar</Button>{"  "}
                  <Button color="danger">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={this.state.modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>
            <input className='form-control' readOnly type="text" value={this.state.data.length+1} />
          </FormGroup>

          <FormGroup>
            <label>Personaje:</label>
            <input className='form-control' name='personaje' type="text" onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <label>Anime:</label>
            <input className='form-control' name='anime' type="text" />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color='primary'>Insertar</Button>
          <Button color='danger' onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
        </ModalFooter>

      </Modal>

      </>
    );
  }
}

export default App;
