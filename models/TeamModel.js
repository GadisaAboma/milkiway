// models/TeamMemberModel.js

class TeamMemberModel {
  constructor(data) {
    this.id = data.id || null;
    this.fullName = data.full_name || "";
    this.title = data.title || "";
    this.position = data.position || "";
    this.image = data.image || "";
    this.createdAt = data.created_at ? new Date(data.created_at) : null;
    this.updatedAt = data.updated_at ? new Date(data.updated_at) : null;
  }

  // Static method to create an instance from API data
  static fromApi(data) {
    return new TeamMemberModel(data);
  }

  // Method to get the full image URL
  static getImageUrl(image) {
    // Modify base URL as needed for your setup
    console.log(`http://localhost:8000/storage/${image}`);
    return `http://localhost:8000/storage/${image}`;
  }

  // Static method to create a list of instances from an array of API data
  static fromApiList(dataArray) {
    return dataArray.map((data) => new TeamMemberModel(data));
  }
}

export default TeamMemberModel;
