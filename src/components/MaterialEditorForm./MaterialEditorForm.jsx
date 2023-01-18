import { Formik, Form, Field } from 'formik';
export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Description <Field name="title" type="text" />
          </label>
          <br />
          <label>
            Link <Field name="link" type="text" />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            ADD MATERIAL
          </button>
        </Form>
      )}
    </Formik>
  );
};
