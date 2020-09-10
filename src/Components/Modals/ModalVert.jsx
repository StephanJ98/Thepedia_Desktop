import React from 'react';
import { useTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function ModalVert() {
    const { t, i18n } = useTranslation();
    return (
        <div className="modal fade" id="vert" tabIndex="-1" role="dialog" aria-labelledby="TheVert" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{t('Détails sur le thé vert')}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Row className="modal-body">
                        <div className="col-6">
                            <Row><h4 className="col-12">{t('Origine Japon')}</h4></Row>
                            <Row>
                                <h6 className="col-6">{t('Température')}</h6>
                                <p className="col-6">50 à 75°C</p>
                            </Row>
                            <Row>
                                <h6 className="col-6">{t('Temps d\'infusion')}</h6>
                                <p className="col-6">1 - 2 min</p>
                            </Row>
                            <Row>
                                <h6 className="col-6">{t('Dose pour 10 cl')}</h6>
                                <p className="col-6">6g</p>
                            </Row>
                            <Row>
                                <p className="col">{t('Les thés de cette origine vert japon')}</p>
                            </Row>
                        </div>
                        <div className="col-6">
                            <Row><h4 className="col-12">{t('Origine Chine')}</h4></Row>
                            <Row>
                                <h6 className="col-6">{t('Température')}</h6>
                                <p className="col-6">75°C</p>
                            </Row>
                            <Row>
                                <h6 className="col-6">{t('Temps d\'infusion')}</h6>
                                <p className="col-6">2 - 4 min</p>
                            </Row>
                            <Row>
                                <h6 className="col-6">{t('Dose pour 10 cl')}</h6>
                                <p className="col-6">6g</p>
                            </Row>
                            <Row>
                                <p className="col">{t('Ce nest pas une origine vert chine')}</p>
                            </Row>
                        </div>
                    </Row>
                    <div className="modal-footer">
                        <Button type="button" className="btn-secondary" data-dismiss="modal">{t('Fermer')}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}