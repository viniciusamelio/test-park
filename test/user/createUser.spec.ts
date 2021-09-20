import request from 'supertest';
import app from '../app.test';
import faker from 'faker';

jest.setTimeout(15000);

const fakeUser = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}

describe('Create User:' , () => {

    it('Should return a created user', async()=>{
        const dto = fakeUser;

        const response = await request(app)
                                .post('/user')
                                .send(dto);


        expect(response.statusCode).toEqual(201);
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('email');
        expect(response.body).toHaveProperty('_id');
        expect(response.body.name).toEqual(dto.name);
        expect(response.body.email).toEqual(dto.email);
    });

    it('Should return an error when trying to create an user with an existing email', async()=>{
        const dto = fakeUser;
        const response = await request(app)
                                .post('/user')
                                .send(dto);


        expect(response.statusCode).toEqual(500);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual('Houve um erro ao salvar o usuário');
    });

    it('Should return an error when trying to create an user without a name property', async()=>{
        const dto = {
            email: 'fake@email.com',
            password: '123456'
        }
        const response = await request(app)
                                .post('/user')
                                .send(dto);


        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual('Precisamos do nome com sobrenome');
    });

    it('Should return an error when trying to create an user without an email property', async()=>{
        const dto = {
            name: 'Foo Bar',
            password: '123456'
        }
        const response = await request(app)
                                .post('/user')
                                .send(dto);


        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual('E-mail inválido.');
    });

    it('Should return an error when trying to create an user without an password', async()=>{
        const dto = {
            name: 'Foo Bar',
            email: 'aaa@gmail.com'
        }
        const response = await request(app)
                                .post('/user')
                                .send(dto);


        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual('A senha precisa ter 4 caracteres no mínimo');
    });

    it('Should return an error when trying to create an user with an invalid password', async()=>{
        const dto = {
            name: 'Foo Bar',
            email: 'aaa@gmail.com',
            password: '123'
        }
        const response = await request(app)
                                .post('/user')
                                .send(dto);


        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual('A senha precisa ter 4 caracteres no mínimo');
    });
    

});