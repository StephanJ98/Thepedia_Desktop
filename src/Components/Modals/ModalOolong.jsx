import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function ModalOolong() {
    return (
        <div className="modal fade" id="oolong" tabIndex="-1" role="dialog" aria-labelledby="TheOolong" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Détails sur le thé Wulong</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Row>
                            <p className="col-12">Wulong a plus le goût du thé vert que du noir: il n'a pas l'arôme doux et rosé du thé noir ni les fortes notes herbacées qui caractérisent le thé vert.</p>
                        </Row>
                        <Row>
                            <p className="col-12">Les feuilles de thé Wulong sont traitées de deux manières différentes. Certaines variétés sont enroulées en longues feuilles incurvées, tandis que d'autres sont pressées en forme de boule.</p>
                        </Row>
                        <Row>
                            <p className="col-12">Les wulong les plus prestigieux proviennent des provinces chinoises du Fujian et du Guangdong, de Taiwan et du Népal.</p>
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
                                        <th scope="row">Thés Wulong</th>
                                        <td>95°C</td>
                                        <td>5 - 7 min</td>
                                        <td>8 - 10g</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Préparation avec Gong Fu Cha</th>
                                        <td>95°C</td>
                                        <td>Pour des passages de 20 sec - 1 min</td>
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