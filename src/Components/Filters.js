class Filters extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        country: pais,
        price: valor,
        rooms: tamano,
      }
  }

  componentDidMount(){
    this.state.country
    this.state.price
    this.state.rooms
  }

  handlerCaptura = e => {
    epreventdefault();
    const filter = {
      country: this.country.current.value, 
      price: this.price.current.value,
      rooms: this.rooms.current.value,
    }}

    render(){
      return(
        <div>
          <section className='filter'>
            <div className='row p-2 m-0'> 
              <div className='form-group col-md-2 offset-md-1'>
                <div className='input-group'>
                  <span className='input-group-addon fas fa-sign-in-alt'></span>
                  <input className='form-control' type='date' value={this.props.fechaInicio} name='' />  
                </div>
              </div>
              <div className='form-group col-md-2'>
                <div className='input-group'>
                  <span className='input-group-addon fas fa-sign-out-alt'></span>
                  <input className='form-control' type='date' value={this.props.fechaFin} name='' />  
                </div>
              </div>
              <div className='form-group col-md-2'>
                <div className='input-group'>
                  <span className='input-group-addon fas fa-globe'></span>
                  <select className='form-control' value={this.state.country}>
                    <option>País de destino</option>
                    <option value='Argentina'>Argentina</option>
                    <option value='Brasil'>Brasil</option>
                    <option value='Chile'>Chile</option>
                    <option value='Uruguay'>Uruguay</option>
                  </select>
                </div>
              </div>
              <div className='form-group col-md-2'>
                <div className='input-group'>
                  <span className='input-group-addon fas fa-dollar-sign'></span>
                  <select className='form-control' value={this.state.price} >
                    <option>Valor</option>
                    <option value='1'>$</option>
                    <option value='2'>$$</option>
                    <option value='3'>$$$</option>
                    <option value='4'>$$$$</option>
                  </select>
                </div>
              </div>
              <div className='form-group col-md-2'>
                <div className='input-group'>
                  <span className='input-group-addon fas fa-bed'></span>
                  <select className='form-control' value={this.state.rooms} >
                    <option>Tamaño</option>
                    <option value='Small'>Pequeño</option>
                    <option value='Medium'>Mediano</option>
                    <option value='Big'>Grande</option>
                  </select>
                </div>
              </div>      
            </div> 
          </section>
        </div>
      )
    }
  }

  export default Filters;