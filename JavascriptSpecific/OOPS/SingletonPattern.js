class Database {
  constructor(connectionSetting) {
    if (Database.instance) {
      return Database.instance;
    }
    this.connectionSetting = connectionSetting;
    Database.instance = this;
  }
  connect() {
    console.log(
      `Coonection to the dtabase is established with -${this.connectionSetting}`
    );
  }
  static getInstance(connectionSetting) {
    if (!Database.instance) {
      new Database(connectionSetting);
    }
    return Database.instance;
  }
}

const db1 = Database.getInstance("Server=1;Database=Main;");
db1.connect(); // Connecting to the database with settings: Server=1;Database=Main;

const db2 = Database.getInstance("Server=2;Database=Test;");
db2.connect(); // Connecting to the database with settings: Server=1;Database=Main;

console.log(db1 === db2); // true
