import React from 'react'
import {FormContainer, TextFieldElement} from 'react-hook-form-mui'
export default function Forms() {
  return (
    <FormContainer
            defaultValues={{name: ''}}
            onSuccess={data => console.log(data)}
        >
            <TextFieldElement name="name" label="TeacherName" required/>
   </FormContainer>
  )
}
