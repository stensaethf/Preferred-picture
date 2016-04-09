use admin

db.createUser(
  {
    user: "preferredpictureadmin",
    pwd: "preferredpicture1!",
    roles: [ "root" ]
  }
)

use preferredpicture

db.createUser(
  {
    user: "preferredpictureprod",
    pwd: "preferredpicture1!",
    roles: [ { role: "readWrite", db: "preferredpicture" } ]
  }
)

db.createUser(
  {
    user: "preferredpicturereader",
    pwd: "i read you, preferredpicture!",
    roles: [ { role: "read", db: "preferredpicture" } ]
  }
)