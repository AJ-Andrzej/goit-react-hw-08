import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from 'react'
import * as Yup from 'yup'
import css from './ContactForm.module.css'
import { useDispatch } from 'react-redux'
import {addContact} from '../../redux/contactsOps'

const phoneSchema = "[0-9]{3}-[0-9]{2}-[0-9]{2}"
const contactsSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(30, "Too long. Max 30 symbols").required("This field is required"),
        number: Yup.string().matches(phoneSchema, 'Phone number is not valid').required("This field is required"),
})

export default function ContactForm() {
    const dispatch = useDispatch()
    const fieldId = useId()
    const handleSubmit = (values, actions) => {
        dispatch(addContact(
            {
            name: values.name,
            number: values.number,
        }
        ))
        actions.resetForm()
    }

    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
            }   
            }
            onSubmit={handleSubmit}
            validationSchema={contactsSchema}
        >
            <Form className={css.wrapper}>
                <div className={css.fileld}>
                    <label className={css.label} htmlFor={`${fieldId}-name`}>Name</label>
                    <Field type="text" name="name" placeholder="Your name" id={`${fieldId}-name`}></Field>
                    <ErrorMessage className={css.error} name="name"component="span"/>
                </div>
                <div className={css.fileld}>
                    <label className={css.label} htmlFor={`${fieldId}-number`}>Number</label>
                    <Field type="tel" name="number" placeholder="xxx-xx-xx" id={`${fieldId}-number`}></Field>
                     <ErrorMessage className={css.error} name="number"component="span"/>
                </div>
                <button className={css.btn} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}