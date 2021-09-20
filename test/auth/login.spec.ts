import request from 'supertest';
import app from '../app.test';
import faker from 'faker';

const fakeUser = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}

describe('Login:',()=>{

    it('Should return a created user', async()=>{
        const dto = fakeUser;

        const response = await request(app)
                                .post('/user')
                                .send(dto);


        expect(response.statusCode).toEqual(201);
    });

    it('Shoul successfully login the created user',async()=>{
        const dto = {
            email: fakeUser.email,
            password: fakeUser.password
        }
        const response = await request(app)
                                .post('/auth')
                                .send(dto);
        
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual('Logado com sucesso!');
    });

    it('Shoul return an error when trying to login without an email',async()=>{
        const dto = {
            password: fakeUser.password
        }
        const response = await request(app)
                                .post('/auth')
                                .send(dto);
        
        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual('E-mail necessário para realizar o login');
    });

    it('Shoul return an error when trying to login without an password',async()=>{
        const dto = {
            email: fakeUser.email
        }
        const response = await request(app)
                                .post('/auth')
                                .send(dto);
        
        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual('Senha necessária para realizar o login');
    });

    it('Shoul return an error when trying to login with invalid credentials',async()=>{
        const dto = {
            email: fakeUser.email,
            password: '000'
        }
        const response = await request(app)
                                .post('/auth')
                                .send(dto);
        
        expect(response.statusCode).toEqual(401);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual('Credenciais inválidas');
    });

});
