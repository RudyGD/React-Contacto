import React from 'react';
import { CONECTION } from '../../models/state.enum';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

//Componente en el cual creamos un uevo Contacto con datos

const ContactListComponent = () => {

    const defaultContact = new Contact ("Pepe", "Gigi", "pepe@gmail.es", CONECTION.CONECT);

    return (
        <div>
            <div>
                <h1>User:</h1>
                <ContactComponent contact={defaultContact}></ContactComponent>
            </div>
        </div>
    );
};

export default ContactListComponent;
