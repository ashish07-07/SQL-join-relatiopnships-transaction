"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});
// async function insertUsersTable(
//   username: string,
//   password: string,
//   email: string
// ) {
//   await client.connect();
//   const result = await client.query(
//     `
//          INSERT INTO users1(username,password,email)
//          VALUES($1,$2,$3)
//        `,
//     [username, password, email]
//   );
//   console.log(result);
// }
// insertUsersTable("neo07", "123456", "klo77@gmail.com");
// async function Newtable() {
//   await client.connect();
//   const result = await client.query(`
//        CREATE TABLE Adressss(
//         id SERIAL PRIMARY KEY,
//         userid INTEGER NOT NULL,
//         city VARCHAR(50) NOT NULL,
//         street VARCHAR(50) NOT NULL,
//         pincode VARCHAR(50),
//         FOREIGN KEY(userid) REFERENCES users1(id) ON DELETE CASCADE
//        )
//       `);
//   console.log(result);
// }
// Newtable();
// async function InsertAdress(
//   id: number,
//   city: string,
//   street: string,
//   pincode: string
// ) {
//   await client.connect();
//   const result = await client.query(
//     `
//         INSERT INTO Adressss(userid,city,street,pincode)
//         VALUES($1,$2,$3,$4)
//         `,
//     [id, city, street, pincode]
//   );
//   console.log(result);
// }
// InsertAdress(1, "mangalore", "xavier residenc", "575008");
// async function Transaction(username: string, password: string, email: string) {
//   await client.connect();
//   await client.query("BEGIN");
//   const result = await client.query(
//     `
//     INSERT INTO users1(username,password,email)
//     VALUES($1,$2,$3)
//     `,
//     [username, password, email]
//   );
//   console.log(result);
//   await client.query("COMMIT");
// }
// Transaction("lin", "123469", "bk8765@gmail.com");
// joins in psql
// SELECT users1.id,users1.username,users1.password,users1.email,Adressss.city,Adressss.street,Adressss.pincode
// FROM users1
// JOIN Adressss ON users1.id=Adressss.userid
// WHERE users1.id=1;
function join2() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`

      SELECT users1.id,users1.username,users1.password,users1.email,Adressss.city,Adressss.street,Adressss.pincode
      FROM users1
      JOIN Adressss ON users1.id=Adressss.userid
      WHERE users1.id=1;
      
      `);
        console.log(result);
    });
}
join2();
