function initialize(user) {
  console.log(user);
  readUserDataFromFirebase(user.uid);
}