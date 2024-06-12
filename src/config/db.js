import nedb from "nedb-promises";

const cartDb = new nedb({ filename: "cart.db", autoload: true });
const orderDb = new nedb({ filename: "orders.db", autoload: true });
const userDb = new nedb({ filename: "users.db", autoload: true });
const menuDb = new nedb({ filename: "menu.db", autoload: true });
const adminDb = new nedb({ filename: "admin.db", autoload: true });

export { cartDb, orderDb, userDb, menuDb, adminDb };
