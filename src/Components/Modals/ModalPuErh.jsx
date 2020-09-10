import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function ModalPuErh() {
    return (
        <div className="modal fade" id="puerh" tabIndex="-1" role="dialog" aria-labelledby="Thepuerh" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Détails sur le thé Pu Erh</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body row">
                        <div className="col-12">
                            <Row>
                                <h6 className="col-6">Température</h6>
                                <p className="col-6">95°C</p>
                            </Row>
                            <Row>
                                <h6 className="col-6">Temps d'infusion</h6>
                                <p className="col-6">4 - 5 min</p>
                            </Row>
                            <Row>
                                <h6 className="col-6">Dose pour 10 cl</h6>
                                <p className="col-6">6g</p>
                            </Row>
                            <Row>
                                <p className="col-12">Les thés Pu Erh sont un type spécial de thé, car ils peuvent être oxydés ou non, mais tous subissent une fermentation qui fait apparaître leur saveur caractéristique et leur donne une valeur élevée.</p>
                            </Row>
                            <Row>
                                <p className="col-12">Traditionnellement, seul le Pu Erh (Sheng) brut était produit, c'est-à-dire que le thé était comprimé en gâteaux et laissé à fermenter naturellement et mettait environ 10 ans pour arriver à maturité.</p>
                            </Row>
                            <Row>
                                <p className="col-12">Mais depuis le siècle dernier, des Pu Erh (Shu) cuits ont également été produits, qui avant d'être compressés en gâteaux, sont arrosés avec de l'eau et mis à fermenter, afin d'essayer d'imiter le processus de fermentation naturel, cela ne s'est pas produit, mais ils ont découvert que le Le thé ainsi préparé avait un très bon goût.</p>
                            </Row>
                            <Row>
                                <p className="col-12">Les meilleurs Pu Erh viennent du sud-ouest de la Chine et des régions frontalières avec le Tibet, la Birmanie, le Vietnam et le Laos. Les initiatives de production de Pu Erh en Afrique sont également à noter.</p>
                            </Row>
                            <Row>
                                <div className="col-6">
                                    <h4>En feuilles</h4>
                                    <p>Type Pu Erh adapté à la consommation quotidienne. Il est généralement composé des restes de feuilles qui n'ont pas été compressées en cookies.</p>
                                </div>
                                <div className="col-6">
                                    <h4>En feuilles compressées</h4>
                                    <p>Type de Pu Erh adapté à une maturation de plusieurs années et uniquement pour les occasions les plus spéciales. C'est vous qui avez parcouru la grande route du thé qui a traversé toute la Chine. Il est typique du Yunnan et de la province du Fujian.</p>
                                </div>
                            </Row>
                            <hr />
                            <Row>
                                <div className="col-6">
                                    <h4>Pu Erh Shu</h4>
                                    <p>Pu Erh compressé "Cuit". Fabriqué avec une technique des années 70 qui était destinée à imiter le résultat d'un Pu Erh Sheng avec 10 ans de maturation. A sa place, un nouveau type de Pu Erh est né, plus crémeux qu'un traditionnel.</p>
                                </div>
                                <div className="col-6">
                                    <h4>Pu Erh Sheng</h4>
                                    <p>Pu erh comprimé "Brut". C'est le traditionnel, affiné pendant au moins 10 ans pour atteindre son niveau gustatif maximum.</p>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}