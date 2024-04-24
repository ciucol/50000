import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

// describe("Testing Adoptme", () => {
//   describe("Test de mascotas", () => {
//     it("El endpoint POST api/pets debe crear una mascota correctamente", async () => {
//       const petMock = {
//         name: "Marmolita",
//         specie: "Gato",
//         birthDate: "12-12-2021",
//       };
//       const { statusCode, ok, _body } = await requester
//         .post("/api/pets")
//         .send(petMock);
//       console.log(statusCode, ok, _body);
//       expect(_body.payload).to.have.property("adopted").to.be.false;
//     });
//   });
// });

// describe("Testing Adoptme", () => {
//   describe("Test de mascotas", () => {
//     it("El endpoint POST api/pets debe crear una mascota correctamente", async () => {
//       const petMock = {
//         specie: "Gato",
//         birthDate: "12-12-2021",
//       };
//       const { statusCode, ok, _body } = await requester
//         .post("/api/pets")
//         .send(petMock);
//       console.log(statusCode, ok, _body);
//     });
//   });
// });

// describe("Testing Adoptme", () => {
//   describe("Test de mascotas", () => {
//     it("El endpoint GET api/pets debe retornar todas las mascotas", async () => {
//       const response = await requester.get("/api/pets");
//       expect(response.body).to.have.property("payload");
//       expect(response.body).to.have.property("status");
//       expect(response.body.payload).to.be.an("array");

//       console.log(response.body.payload, response.body.status);
//     });
//   });
// });

// describe("Testing Adoptme", () => {
//   describe("Test de mascotas", () => {
//     it("El metodo PUT de api/pets/:id va a actualizar la mascota", async () => {
//       const existingPet = {
//         name: "Marmolita",
//         specie: "Gato",
//         birthDate: "12-12-2021",
//         _id: "66206715f129f793e0966af7",
//       };
//       const updatedData = {
//         name: "Duko",
//         specie: "Gato",
//         birthDate: "01-01-2021",
//       };

//       const response = await requester
//         .put(`/api/pets/${existingPet._id}`)
//         .send(updatedData);

//       //Verificar que la solicitud PUT es exitosa
//       expect(response.status).to.equal(200);

//       expect(response.body).to.have.property("status");

//       const updatedPet = await requester.get(`/api/pets/${existingPet._id}`);

//       expect(updatedPet.name).to.equal(updatedData.name);
//       expect(updatedPet.specie).to.equal(updatedData.specie);
//       expect(updatedPet.birthDate).to.equal(updatedData.birthDate);

//       console.log(response.body);
//       console.log(updatedPet.body);
//     });
//   });
// });

// describe("Testing Adoptme", () => {
//   describe("Eliminar la ultima mascota agregada con el metodo DELETE", () => {
//     it("El endpoint DELETE api/pets/:id debe eliminar la mascota", async () => {
//       const newPetData = {
//         name: "Gorda",
//         specie: "Gato",
//         birthDate: "12-12-2021",
//       };

//       const postResponse = await requester.post("/api/pets").send(newPetData);
//       //Obtener el ID de la ultima mascota
//       const petId = postResponse.body.payload._id;

//       //Eliminar la mascota
//       const deleteResponse = await requester.delete(`/api/pets/${petId}`);

//       expect(deleteResponse.status).to.equal(200);

//       const getResponse = await requester.get(`/api/pets/${petId}`);
//       expect(getResponse.status).to.equal(404);
//     });
//   });
// });

// describe("Test avanzado", () => {
//   let cookie;
//   it("Debe registrar correctamente a un usuario", async function () {
//     const mockUser = {
//       first_name: "Karen",
//       last_name: "Lettieri",
//       email: "correokaren@gmail.com",
//       password: "123",
//     };
//     const { _body } = await requester
//       .post("/api/sessions/register")
//       .send(mockUser);
//     expect(_body.payload).to.be.ok;
//   });
//   it("Debe loguear correctamente a un usuario y DEVOLVER UNA COOKIE", async function () {
//     //Login
//     const mockUser = {
//       email: "correokaren@gmail.com",
//       password: "123",
//     };
//     //Obtener de los supertest los headers de la respuesta y vamos a extraer el set cookie
//     const response = await requester.post("/api/sessions/login").send(mockUser);
//     const cookieResult = response.headers["set-cookie"][0];
//     expect(cookieResult).to.be.ok;
//     cookie = {
//       name: cookieResult.split("=")[0],
//       value: cookieResult.split("=")[1],
//     };

//     expect(cookie.name).to.be.ok.and.eql("coderCookie");
//     expect(cookie.value).to.be.ok;
//   });
//   it("Debe enviar la cookie que contiene el usuario y desestructurar este correctamente", async function () {
//     //Enviar la cookie que guardamos arriba
//     const { _body } = await requester
//       .get("/api/sessions/current")
//       .set("Cookie", [`${cookie.name}=${cookie.value}`]);
//     //Despues, el metodo current debe devolver el correo del usuario que se guardo desde el login
//     expect(_body.payload.email).to.be.equal("correokaren@gmail.com");
//   });
// });

describe("Test upload", () => {
  it("Debe poder crearse una mascota con la ruta de la imagen", async () => {
    const petMock = {
      name: "Duko",
      specie: "Gato",
      birthDate: "01-01-2021",
      image: "./test/coderDog.jpg",
    };
    const response = await requester
      .post("/api/pets/withimage")
      .field("name", petMock.name)
      .field("specie", petMock.specie)
      .field("birthDate", petMock.birthDate)
      .attach("image", "./test/coderDog.jpg");

    expect(response.status).to.be.eql(200);
    expect(response._body.payload).to.have.property("_id");
    expect(response._body.payload.image).to.be.ok;
  });
});
