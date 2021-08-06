import React from 'react';

import *  as Yup from 'yup';
import { useFormik } from 'formik';

import LabeledInput from '../../molecules/LabeledInput';
import Button from '../../atoms/Button';

const formSchema = Yup.object().shape(
  {
    name:  Yup.string()
      .trim()
      .min(3, 'Mínimo de 3 caracteres')
      .max(100, 'Máximo de 100 caracteres')
      .required('Campo obrigatório'),
    description:  Yup.string()
      .trim()
      .min(10, 'Mínimo de 10 caracteres')
      .max(200, 'Máximo de 200 caracteres')
      .required('Campo obrigatório')
  }
);

const ProjectFrom = ({
  handleCreateNewProject,
  isLoading,
  }) => {

  const { handleSubmit, handleChange, handleBlur, setFieldValue, setFieldTouched, values, errors, touched } = useFormik(
    {
      initialValues: { name: '', description: '' },
      onSubmit: async values => {
        await handleCreateNewProject(values);

        setFieldValue('name', '');
        setFieldValue('description', '');
        setFieldTouched('name', false);
        setFieldTouched('description', false);

      },
      validationSchema: formSchema,
    }
  )

  // console.log(errors);

  return (
    <form onSubmit={handleSubmit}>
      <LabeledInput
        columnSize= {12}
        controlId="ProjectForm"
        label= "Project Name"
        type= "text"
        name = "name"
        value={values.name}
        onchange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
        touched={touched.name}
        className="label-input"
      />
      <LabeledInput
        columnSize= {12}
        controlId="ProjectFormDescription"
        label= "Project description"
        type= "text"
        name = "description"
        value={values.description}
        onchange={handleChange}
        onBlur={handleBlur}
        error={errors.description}
        touched={touched.description}
        className="label-input"
      />

      <Button
        variant="primary"
        type="submit"
        isLoading={isLoading}
        className="button-submit"
      >
        Enviar
      </Button>

    </form>
  )
};

export default ProjectFrom;