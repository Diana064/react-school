import { Formik, Form, Field } from 'formik';
export const MaterialEditorForm = () => {
  return (
    <Formik
      initialValues={{ title: '', link: '' }}
      //   onSubmit={(values, action) => }
    >
      <Form>
        <label>
          Description <Field name="title" type="text" />
        </label>
        <br />
        <label>
          Link <Field name="link" type="url" />
        </label>
        <br />
        <button type="submit">ADD MATERIAL</button>
      </Form>
    </Formik>
  );
};
