import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function ModalBlanc() {
    return (
        <div className="modal fade" id="blanc" tabIndex="-1" role="dialog" aria-labelledby="TheBlanc" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Détails sur le thé blanc</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Row>
                            <div className="col-12">
                                <p>Le thé blanc est apprécié pour sa finesse et sa douceur. Il provient de bourgeons délicats et de jeunes feuilles de la plante qui ne sont pas oxydés comme pour la production d'autres thés. Il est produit principalement en Chine puisqu'il s'agissait d'un thé réservé aux événements importants. Les thés blancs les plus appréciés et de meilleure qualité sont ceux de la province du Fujian en Chine.</p>
                            </div>
                        </Row>
                        <Row>
                            <table className="table table-striped col-12">
                                <thead>
                                    <tr>
                                        <th scope="col">#Théière#</th>
                                        <th scope="col">Température</th>
                                        <th scope="col">Temps d'infusion</th>
                                        <th scope="col">Dose pour 10 cl</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Chine</th>
                                        <td>70°C - 75°C</td>
                                        <td>5 - 10 min</td>
                                        <td>6g</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Autres origines</th>
                                        <td>70°C - 75°C</td>
                                        <td>4 - 8 min</td>
                                        <td>6g</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Row>
                    </div>
                    <div className="modal-footer">
                        <Button type="button" className="btn-secondary" data-dismiss="modal">Fermer</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}