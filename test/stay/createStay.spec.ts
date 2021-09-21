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

describe('Create Stay:',()=>{
    it('Should create an user', async()=>{
        const dto = fakeUser;

        const response = await request(app)
                                .post('/user')
                                .send(dto);
        fakeStay.user = response.body._id;
        expect(response.statusCode).toEqual(201);
    });

    it('Should create an stay successfully',async()=>{
        const dto = fakeStay;

        const response = await request(app)
                                .post('/stay')
                                .send(dto);
        fakeStay.id = response.body._id;
        expect(response.statusCode).toEqual(201);
        expect(response.body).toHaveProperty('active');
        expect(response.body).toHaveProperty('user');
        expect(response.body).toHaveProperty('licensePlate');
        expect(response.body.active).toEqual(true);
        expect(response.body.user).toEqual(fakeStay.user);
        expect(response.body.licensePlate).toEqual(fakeStay.licensePlate);
    });

    it('Should return an error when trying to create an stay to an user who has already opened and not finished it yet',async()=>{
        const dto = fakeStay;

        const response = await request(app)
                                .post('/stay')
                                .send(dto);
        expect(response.statusCode).toEqual(400);
    });

    it('Should return an error when trying to create an stay with an invalid user',async()=>{
        let dto = fakeStay;
        dto.user = "BLABLABLKA21654"
        const response = await request(app)
                                .post('/stay')
                                .send(dto);


        expect(response.statusCode).toEqual(500);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual("Houve um erro ao buscar sua estadia em aberto");
    });

    it('Should return an error when trying to create an stay without a licensePlate property',async()=>{
        let dto = fakeStay;
        dto.licensePlate = "";
        const response = await request(app)
                                .post('/stay')
                                .send(dto);


        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual("Placa do veículo inválida.");
    });

    it('Should return an error when trying to create an stay without an user property',async()=>{
        let dto = fakeStay;
        dto.user = "";
        const response = await request(app)
                                .post('/stay')
                                .send(dto);


        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual("Usuário inválido.");
    });
});
