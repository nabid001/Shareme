import { client } from "../lib/client";

export const createUser = async ({
  username: userName,
  id,
  imageUrl,
  email,
}) => {
  try {
    await client.createIfNotExists({
      _type: "user",
      _id: id,
      userName,
      email,
      id,
      imageUrl,
    });
  } catch (error) {
    console.log(error.message);
  }
};
