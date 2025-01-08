const baseUrl = "http://localhost:8000";

export const fetchProjects = async () => {
  try {
    const response = await fetch(baseUrl + "/api/projects-list");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Error fetching projects");
  }
};
