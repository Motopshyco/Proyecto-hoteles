class HotelsCard extends React.Component{
    render() {
        return (
          <div className='col-s5'>
            <div className='card'>
              <div>
                <img className='card-img-top' src={this.props.photo} />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{this.props.name}</h5>
                <p>{this.props.description}</p> <br />
                <p>Pais : {this.props.country}</p>
                <p>Precio : {this.props.price}</p>
                <p>Tamaño : {this.props.rooms}</p>
                <a className='btn btn-primary'>Reservar</a>
              </div>
            </div>
          </div>
        );
      }
    }

export default HotelsCard;