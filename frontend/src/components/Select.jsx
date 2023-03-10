import React from 'react';
import {TextField, MenuItem} from '@mui/material';
import {useField, useFormikContext} from 'formik';

const Select = ({
  name,
  ...otherProps
}) => {

  const {setFieldValue} = useFormikContext();
  const [field, meta] = useField(name)

  const handleChange = event => {
    const {value} = event.target;
    setFieldValue(name, value);
  }


  const configSelect = {
    ...field,
    ...otherProps,
    select : true,
    variant : 'outlined',
    onChange: handleChange
  }
  
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  };

  return (
    <TextField {...configSelect}>
      <MenuItem value="informes@maimonides.edu">
        Umai
      </MenuItem>
      <MenuItem value="munizinforma@buenosaires.gob.ar">
        Muñiz
      </MenuItem>
    </TextField>
  );
};

export default Select