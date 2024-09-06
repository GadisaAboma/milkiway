// src/models/UserModel.js

// Define a UserModel class to structure user data
class UserModel {
  constructor({
    id,
    name,
    email,
    age,
    address,
    phone,
    profileImage,
    createdAt,
    updatedAt,
  }) {
    this.id = id; // Unique identifier for the user
    this.name = name; // Name of the user
    this.email = email; // Email address of the user
    this.age = age || null; // Optional: Age of the user
    this.address = address || null; // Optional: Address of the user
    this.phone = phone || null; // Optional: Phone number
    this.profileImage = profileImage || null; // Optional: Profile image URL
    this.createdAt = createdAt ? new Date(createdAt) : null; // Optional: Created timestamp
    this.updatedAt = updatedAt ? new Date(updatedAt) : null; // Optional: Updated timestamp
  }

  // Static method to map raw API data to an instance of UserModel
  static fromApiData(data) {
    return new UserModel({
      id: data.id,
      name: data.name,
      email: data.email,
      age: data.age,
      address: data.address,
      phone: data.phone,
      profileImage: data.profileImage,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
  }
}

export default UserModel;
