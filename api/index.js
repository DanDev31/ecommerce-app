const app = require("./src/server");
const { db, loadData } = require("./src/db");

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
  db.sync({ force: true })
    .then(() => {
      console.log("Synchronized Models");
    })
    .then(async () => {
      await loadData();
    });
});
