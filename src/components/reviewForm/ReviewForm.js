import React from 'react'
import {Form, Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap'

function reviewForm({handleSubmit, revText, labelText, defaultValue}) {
  return (
    <Form>
        <FormGroup className='b-3' controlId='exampleForm.controlTextarea1'>
            <FormLabel> {labelText}</FormLabel>
            <FormControl ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
        </FormGroup>
        <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default reviewForm