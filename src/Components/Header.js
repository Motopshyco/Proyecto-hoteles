class Header extends React.Component{
    render(){
      return(
        <header>
        <div> 
          <h1> Reservación de hoteles </h1>
          <p> 
            <h3> Desde el {this.props.fechaInicio}hasta el {this.props.fechaFin} 2019</h3>
          </p>
        </div>
      </header>
      )
    }
  }

export default Header;