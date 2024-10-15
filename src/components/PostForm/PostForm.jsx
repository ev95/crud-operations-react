import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as  Yup from 'yup';

import './PostForm.css'

function PostForm({ addToPosts }) {
    const validationSchema = Yup.object().shape({
        title: Yup.string().min(6, "Title must be at least 6 characters").required('Please enter title'),
        body: Yup.string().min(10, "Description must be at least 10 characters").required('Please enter description')
    });

    function createPost(values) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                ...values,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((json) => addToPosts(json));
    }

    return (
        <Formik
            initialValues={{
                title: '',
                body: ''
            }}
            onSubmit={(values) => createPost(values)}
            validationSchema={validationSchema}
        >
            <Form className='post-form'>
                <div className='wrapper'>
                    <Field name='title' placeholder="Title" />
                    <span className='error'><ErrorMessage name='title' /></span>
                </div>

                <div className='wrapper desc'>
                    <Field name='body' placeholder="Description" />
                    <span className='error'><ErrorMessage name='body' /></span>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default PostForm