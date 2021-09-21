import request from 'supertest';
import app from '../app.test';

describe('Payment:',()=>{
    it('Should return a message saying that the payment went ok', async()=>{
        
        const response = await request(app)
                                .post('/payment')
                                .send({
                                    "user" : "anything"
                                });


        expect(response.statusCode).toEqual(200);
        expect(response.body.message).toEqual("Estadia paga com sucesso!");
    });
});