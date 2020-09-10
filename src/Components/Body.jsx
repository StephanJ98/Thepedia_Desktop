import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.searchAll = this.searchAll.bind(this)
        this.searchTipe = this.searchTipe.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    componentDidMount() {
        this.searchAll()
    };
    searchAll() {
        fetch("https://thepedia-api.herokuapp.com/thes")
            .then(res => res.json())
            .then((data) => {
                this.setState({ data: data })
            })
            .catch(console.log)
    }
    async searchTipe(event) {
        if (event.target.value === 'Tout') {
            this.searchAll()
        } else {
            fetch(`https://thepedia-api.herokuapp.com/tipe/${event.target.value}`)
                .then(res => res.json())
                .then((data) => {
                    this.setState({ data: data })
                })
                .catch(console.log)
        }
    }
    handleSubmit(id) {
        /*fetch(`http://localhost:8000/api/v1/the/like/id?${id}`)
            .then(res => res.json())
            .then(() => console.log("Ok"))
        fetch("http://localhost:8000/api/v1/the")
            .then(res => res.json())
            .then((result) => {
                this.setState({ data: result.data });
            })*/
    }

    render() {
        const items = []
        if (this.state.data.thepedia) {
            if (this.state.data.thepedia.length === 0) {
                items.push(
                    <section key="0" className="offset-5 col-3">
                        <Button type="button" className="nodat" disabled="disabled">
                            <strong>Il n'y a pas de thés disponibles</strong>
                        </Button>
                    </section>
                )
            }
            else {
                for (const [index, value] of this.state.data.thepedia.entries()) {
                    items.push(
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                            <Card className={`carte ${value.tipe}`}>
                                <Card.Body>
                                    <Card.Title>
                                        <textarea className={`col-12 ${value.tipe}t`} readOnly="readonly" rows="2" value={value.nom}></textarea>
                                    </Card.Title>
                                    <Card.Text className="row">
                                        <textarea className={`col-12 ${value.tipe}t`} readOnly="readonly" rows="4" value={value.description}></textarea>
                                    </Card.Text>
                                    <div className='center'>
                                        <Button disabled="disabled" id={`timerbtn${value._id}`} type="button" className="btn-primary" data-toggle="modal" data-target={`#id${value._id}chrono`}>
                                            <i className="fa fa-clock-o img_m"></i>
                                        </Button>
                                        <Button type="button" className="btn-primary" data-toggle="modal" data-target={`#id${value._id}`}>
                                            <i className="fa fa-search img_m"></i>
                                        </Button>
                                        <Button disabled="disabled" onClick={() => this.handleSubmit(value._id)} type="submit" className="btn-primary">
                                            <i className="fa fa-heart img_m"></i>
                                        </Button>
                                    </div>
                                </Card.Body>
                                <div className="modal fade mod" id={`id${value._id}`} tabIndex="-1" role="dialog" aria-labelledby="Detalles" aria-hidden="true">
                                    <div className="modal-dialog modal-lg" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Détails {value.nom} </h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body row" id={`printThis${value._id}`}>
                                                <div className="col-12">
                                                    <Row>
                                                        <h6 className="col-2"><strong>Nom</strong></h6>
                                                        <p className="col-4">{value.nom}</p>
                                                        <h6 className="col-2"><strong>Origine</strong></h6>
                                                        <p className="col-4">{value.origine}</p>
                                                    </Row>
                                                    <hr />
                                                    <Row>
                                                        <h6 className="col-2"><strong>Type</strong></h6>
                                                        <p className="col-4">{value.tipe}</p>
                                                        <h6 className="col-4"><strong>Température</strong></h6>
                                                        <p className="col-2">{value.temperature} °C</p>
                                                    </Row>
                                                    <hr />
                                                    <Row>
                                                        <h6 className="col-4"><strong>Dose (Théière) 10 cl</strong></h6>
                                                        <p className="col-2">{value.doseT}</p>
                                                        <h6 className="col-4"><strong>Dose (Gaiwan) 10 cl</strong></h6>
                                                        <p className="col-2">{value.doseG}</p>
                                                    </Row>
                                                    <hr />
                                                    <Row>
                                                        <h6 className="col-3"><strong>Temps (Théière)</strong></h6>
                                                        <p className="col-3">{value.infusionT}</p>
                                                        <h6 className="col-3"><strong>Temps (Gaiwan)</strong></h6>
                                                        <p className="col-3">{value.infusionG}</p>
                                                    </Row>
                                                    <hr />
                                                    <Row>
                                                        <h6 className="col-3"><strong>Description</strong></h6>
                                                        <p className="col">{value.description}</p>
                                                    </Row>
                                                    <hr />
                                                    <Row>
                                                        <h6 className="col-3"><strong>Nombre de j'aime</strong></h6>
                                                        <p className="col">{value.likes} j'aime</p>
                                                    </Row>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                                <button disabled type="button" id="Print{{ data.identificateur }}" className="btn btn-primary">Imprimer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card >
                        </div >
                    )
                }
            }
        }
        return (
            <section>
                <div className='center'>
                    <select className='classeur' onChange={this.searchTipe}>
                        <option defaultValue value="Tout" className='tipeOption'>Voir tous les thés</option>
                        <option value="Noir" className='tipeOption'>Noir</option>
                        <option value="Vert" className='tipeOption'>Vert</option>
                        <option value="PuErh" className='tipeOption'>PuErh</option>
                        <option value="Oolong" className='tipeOption'>Oolong</option>
                        <option value="Blanc" className='tipeOption'>Blanc</option>
                    </select>
                </div>
                <Row>
                    {items}
                </Row>
            </section>
        );
    };
}
