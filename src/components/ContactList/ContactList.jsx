import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import {selectVisibleContacts} from '../../redux/contactsSlice'



export default function ContactList() {
    const contacts = useSelector(selectVisibleContacts)
    
    return (
    <ul className={css.list}>
        {contacts.map((contact) => (
        <li className={css.card} key={contact.id}>
                <Contact contact={contact}/>
        </li>
        ))}
    </ul>
    )
}