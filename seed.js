// Require model file here
const { User, Contact } = require('./models');

const main = async () => {
  // Create model instances here

  const obi = await Contact.create({
    name: "Obi",
    contactInfo: "skdlkfjs",
    whereYouMet: "kjhsdfsd",
    importance: 1,
    conversation: "slhglksjdlkjfhsildf",
    linkedinFriends: true,
  });

  const sarah = await Contact.create({
    name: "Sarah",
    contactInfo: "skdlkfjs",
    whereYouMet: "kjhsdfsd",
    importance: 1,
    conversation: "slhglksjdlkjfhsildf",
    linkedinFriends: true,
  });

  const bye = await User.create({
    userEmail: "bye",
    passwordDigest: "$2b$12$AEJGtOPTR0RgHYwT7xGW4.7JmilErRyQjPZOH9jmU2Y7U0PRixB5m"
  });

  await bye.addContact(obi);
  await bye.addContact(sarah);

  process.exit();
}

main();