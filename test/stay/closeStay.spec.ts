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

describe('Close Stay:',()=>{
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

    it('Should close an stay successfully',async()=>{
        const dto = fakeStay;

        const response = await request(app)
                                .put('/stay/close')
                                .send(dto);
        expect(response.statusCode).toEqual(200);
        expect(response.body.active).toEqual(false);
        expect(response.body.user).toEqual(dto.user);
    });

    it('Should return an error when trying to close an stay, but there is not any one active',async()=>{
        const dto = fakeStay;

        const response = await request(app)
                                .put('/stay/close')
                                .send(dto);
        expect(response.statusCode).toEqual(404);
        expect(response.body.message).toEqual("Estadia em aberto não encontrada");
    });
});