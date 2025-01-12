const baseUrl = "http://localhost:8000/";

export const fetchProjects = async () => {
  try {
    const response = await fetch(baseUrl + "api/projects-list");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Error fetching projects");
  }
};
export const fetchProjectById = async (id: string) => {
  try {
    console.log("gajshgdsakdhljaslfjlsajfkl");
    const response = await fetch(baseUrl + "api/project-list/" + id);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Error fetching projects");
  }
};


export const fetchTeams = async () => {
  try {
    const response = await fetch(baseUrl + "api/teams-list");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Error fetching projects");
  }
};

export default baseUrl;
