const {MongoClient} = require('mongodb');

/*

Data Types
user =
{
  _id : 6441a64ce205a7fb0a040469
  username : "oshouse"
  password : "password"
  firstName : "firstName"
  lastName : "lastName"

}

contact =
{
  _id : aakldsjfasdjkf
  userID : "12345"
  address : "9 Timbergate ct Bloomington IL"
  name : "Angie Shouse"
  phoneNumber : "309-287-2754"
  notes : ""
}


*/
async function connect(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */

    const { v4: uuidv4 } = require('uuid')

    const newID = uuidv4();

    const uri = "mongodb+srv://webdev2:LmaKFe4VEJYQDet2@addressbook.bbhjuaq.mongodb.net/test";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect()

        // const newUser = {
        //   _id : 12345,
        //   username : "kaelyn4",
        //   password : "password",
        //   firstName : "firstName",
        //   lastName : "lastName",
        // }

        contact1 =
        {
          _id : 1,
          userID : "12345",
          address : "9 Timbergate ct Bloomington IL",
          name : "Angie Shouse",
          phoneNumber : "309-287-2754",
          notes : ""
        }

        contact2 =
        {
          _id : 3,
          userID : "12345",
          address : "9 Timbergate ct Bloomington IL",
          name : "Mark Shouse",
          phoneNumber : "309-287-2754",
          notes : ""
        }

        contact3 =
        {
          _id : 2,
          userID : "12345",
          address : "9 Timbergate ct Bloomington IL",
          name : "Cody Shouse",
          phoneNumber : "309-287-2754",
          notes : ""
        }


        // const data = await addUser(client, newUser)
        // const user = await findUser(client, "kaelyn4")
        // console.log(user);

        // const contacts = await findContactsForUser(client._id, user)
        // console.log(contacts)
        // await addContact(client, contact1)
        // await addContact(client, contact2)
        // await addContact(client, contact3)

        // const userMusic = { userID: newID, FavoriteArtist: "Boston", FavoriteGenre: "Rock", FavoriteSong: "Ventura Highway"}
        // const userSpotify = { Username: "SladeLong", Hash: "SecretSecretHash", userID: newID};
        // await insertNewUser(client, newUser, userSpotify, userMusic)

        // await findOneListingByUserName(client, "Slade");

        await client.close()

        return client

    } catch (e) {
        console.error(e);
    }
}

async function disconnect(client){
    await client.close()
}

async function addUser(client, user){
  const result = await client.db("address_book").collection("User").findOne({username: user.username});
  if(result){
    return "Username Taken"
  }else{
    try{
    await client.db("address_book").collection("User").insertOne(user);
    return "success"
    }catch (error){
      return error
    }
  }
}

async function addContact(client, user){
  try{
    await client.db("address_book").collection("Contact").insertOne(user);
    return "success"
  }catch(error){
    return error
  }
}

async function findUser(client, user){
  const result = await client.db("address_book").collection("User").findOne({username: user});

  if (result) {
      return result;
  } else {
      return `No listings found with the name '${user}'`;
  }
}


//sends user object not username
async function findContactsForUser(clientID, user){
  const result = await client.db("address_book").collection("Contact").find({userID : `${clientID}`}).toArray()
  if(result){
    return result;
  }else{
    return `No contacts found under user '${user.username}'`
  }
}

const client = connect().catch(console.error)
//  disconnect(client)
