import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';
const INITIALFORM = {
    Time: new Date(Date.now()),
    Email: '',
    Name: '',
    PhoneNumber: '',
    Focus: '',
};

const ApptForm = () => {
    const [form, setForm] = useState({ ...INITIALFORM });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };
    const handleSubmit = () => {
        Axios.post('/api/appointment/create', { ...form })
            .then((result) => {
                console.log(result.data);
                setForm(INITIALFORM);
            })
            .catch((err) => console.log('Blah', err));
    };
    return (
        <Form>
            <FormGroup>
                <Label for='Name'>Name</Label>
                <Input
                    onChange={handleChange}
                    value={form.Name}
                    type='text'
                    name=''
                    id='Name'
                    placeholder='Name'
                />
            </FormGroup>

            <FormGroup>
                <Label for='Email'>Email</Label>
                <Input
                    onChange={handleChange}
                    value={form.Email}
                    type='email'
                    name=''
                    id='Email'
                    placeholder='Email'
                />
            </FormGroup>

            <FormGroup>
                <Label for='PhoneNumber'>PhoneNumber</Label>
                <Input
                    onChange={handleChange}
                    value={form.PhoneNumber}
                    type='tel'
                    name=''
                    id='PhoneNumber'
                    placeholder='Phone Number'
                />
            </FormGroup>

            <FormGroup>
                <Label for='Focus'>Focus</Label>
                <Input
                    onChange={handleChange}
                    value={form.Focus}
                    type='text'
                    name=''
                    id='Focus'
                    placeholder='Focus'
                />
            </FormGroup>
            <Button onClick={handleSubmit}>Submit</Button>
        </Form>
    );
};

export default ApptForm;
