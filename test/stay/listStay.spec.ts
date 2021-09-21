import request from 'supertest';
import app from '../app.test';
import faker from 'faker';

let fakeUser = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
};

let fakeStay = {
    licensePlate : "1234ABC",
    user: "",
    id: null
}

describe('List Stay:',()=>{
    it('Should create an user', async()=>{
        const dto = fakeUser;

        const response = await request(app)
                                .post('/user')
                                .send(dto);
        fakeStay.user = response.body._id;
        expect(response.statusCode).toEqual(201);
    });

    it('Should create an stay',async()=>{
        const dto = fakeStay;

        const response = await request(app)
                                .post('/stay')
                                .send(dto);
        fakeStay.id = response.body._id;
        expect(response.statusCode).toEqual(201);
    });

    it('Should return a list containing the created stay',async()=>{
        const dto = fakeStay;

        const response = await request(app)
                                .get('/stay/'+dto.user);
        expect(response.statusCode).toEqual(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('Should return an error when trying to list stays from an invalid user',async()=>{ 
        const response = await request(app)
                                .get('/stay/fakeaaaaaaa5555555a5aa5a5');
        expect(response.statusCode).toEqual(500);
        expect(response.body.message).toEqual('Houve um erro ao buscar a estadia');
    });

});