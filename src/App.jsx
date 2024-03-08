import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter } from 'reactstrap';

class App extends Component {
  state = {
    //data: data,
    form:{
      id: '',
      personaje: '',
      anime: '',
    },
    modalInsertar: false,
    modalEditar: false,
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

  mostrarModalEditar = (registro) =>{
    this.setState({modalEditar: true, form: registro})
  }

  ocultarModalEditar = () =>{
    this.setState({modalEditar: false})
  }

  insertar =()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista =this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalInsertar:false})
  }

  editar=(dato)=>{
    var contador = 0
    var lista = this.state.data
    lista.map((registro)=>{
      if(data.id == registro.id){
        lista[contador].personaje = dato.personaje
        lista[contador].anime = dato.anime
      }
      contador++
    })
    this.setState({data: lista})
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
                  <Button color="primary" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>
                  {"  "}
                  <Button color="danger">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={this.state.modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>
            <input className='form-control' readOnly type="text" value={this.state.form.id} />
          </FormGroup>

          <FormGroup>
            <label>Personaje:</label>
            <input className='form-control' name='personaje' type="text" onChange={()=>this.handleChange} value={this.state.form.personaje} />
          </FormGroup>

          <FormGroup>
            <label>Anime:</label>
            <input className='form-control' name='anime' type="text" onChange={()=>this.handleChange} value={this.state.form.anime} />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color='primary' >Editar</Button>
          <Button color='danger' onClick={()=>this.ocultarModalEditar()} >Cancelar</Button>
        </ModalFooter>

      </Modal>

      </>
    );
  }
}

export default App;
