import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function ModalNoir() {
    return (
        <div className="modal fade" id="noir" tabIndex="-1" role="dialog" aria-labelledby="TheNoir" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Détails sur le thé noir</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Row>
                            <div className="col-12">
                                <p>Le thé noir est l'un des plus consommés, c'est principalement parce que le Royaume-Uni l'a diffusé à travers ses colonies lorsqu'il a commencé à s'intéresser au commerce de ce produit. De plus, contrairement au thé vert qui ne conserve sa saveur que depuis quelques années, le thé noir le conserve beaucoup plus longtemps, ce qui facilite son commerce sur la route du thé entre les pays asiatiques.</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-12">
                                <p>Les thés noirs portent généralement le nom de la région où ils sont produits. Les noms les plus connus et prestigieux sont Lapsang Souchong, Keemun, Diang Hong, Ying de Hong pour la Chine; Assam, Ceylan, Darjeeling, Nigiri pour l'Inde et Sry Lanka. En outre, il existe d'autres régions productrices (Vietnam, Népal et Turquie) qui produisent également du thé intéressant.</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-12">
                                <p>En règle générale, les thés d'Inde et de Ceylan sont traités par de fortes quantités de pesticides, donc avant de consommer un thé de cette origine, il est conseillé de s'assurer qu'il s'agit d'un thé Bio et de producteurs renommés.</p>
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
                                        <td>90°C</td>
                                        <td>4 - 5 min</td>
                                        <td>6g</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Inde - Darjeeling (Printemps)</th>
                                        <td>85°C</td>
                                        <td>3'30 - 3'45 min</td>
                                        <td>6 - 8g</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Inde – Darjeeling Grands Crus</th>
                                        <td>85°C</td>
                                        <td>3'45 - 4 min</td>
                                        <td>6 - 8g</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Inde – Darjeeling Autres périodes</th>
                                        <td>90°C</td>
                                        <td>4 - 5 min</td>
                                        <td>6 - 8g</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Inde – Assam</th>
                                        <td>90°C</td>
                                        <td>3 - 4 min</td>
                                        <td>6g</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Sri Lanka et autres origines</th>
                                        <td>90°C</td>
                                        <td>3 - 5 min</td>
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