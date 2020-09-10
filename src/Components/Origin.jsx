import React from 'react';

export default function Origin() {
    return (
        <section id="principale">
            <div id="acces">
                <form method="get" action="/montrer">
                    <button type="submit" id="idBouton" className="btn">
                        <i className="fa fa-leaf img_feuille_bouton"></i>
                        <strong className="text_feuille_bouton">
                            <p>Últimas</p>
                            <p>Llegadas</p>
                        </strong>
                    </button>
                </form>
            </div>
        </section>
    );
}