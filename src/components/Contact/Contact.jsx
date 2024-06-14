import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";


export default function Contact({ contact: { id, name, number } }) {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteContact(id))
    };
    return (
        <>
            <div className={css.infoWrapper}>
                <div className={css.info}>
                    <FaUserLarge />
                    <p>{name}</p>
                </div>
                <div className={css.info}>
                    <FaPhoneAlt />
                    <p>{number}</p>
                </div>
            </div>
            <button
                className={css.btn}
                type="button"
                onClick={handleDelete}>Delete</button>
        </>
        
        
    )

}