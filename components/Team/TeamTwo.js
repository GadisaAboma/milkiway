import Image from "next/image";
import React, { useState, useEffect } from "react";
import TeamMemberModel from "../../models/TeamModel.js";
import { getTeams } from "../../api/teamApi";

const TeamTwo = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        console.log("fetching");
        const response = await getTeams(); // Fetch data from the API
        console.log("Fetched data:", response);

        let dataArray = [];
        if (Array.isArray(response)) {
          dataArray = response.flat();
        } else if (Array.isArray(response.data)) {
          dataArray = response.data.flat();
        } else {
          throw new Error("Unexpected API response structure.");
        }

        console.log("Flattened data:", dataArray);
        const teamMembersData = TeamMemberModel.fromApiList(dataArray);
        setTeamMembers(teamMembersData);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  if (teamMembers.length === 0) return <p>Loading...</p>;

  return (
    <div className="team-area pb-75">
      <div className="container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index % 2 === 0 ? "0" : "100"}
              key={member.id || index}
            >
              <div className={`single-team-member bg${(index % 8) + 1}`}>
                {/* Render the member's image */}
                <Image
                  src={TeamMemberModel.getImageUrl(member.image)}
                  alt={member.full_name}
                  width={300}
                  height={300}
                />
                <div className="content">
                  <h3>{member.full_name}</h3>
                  <ul className="social">
                    <li>
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="flaticon-facebook-app-symbol"></i>
                      </a>
                    </li>

                    <li>
                      <a href={member.twitter} target="_blank" rel="noreferrer">
                        <i className="flaticon-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="flaticon-linkedin"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="flaticon-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamTwo;

// import Image from "next/image";

// import teamImg7 from "@/public/images/team/team7.jpg";
// import teamImg8 from "@/public/images/team/team8.jpg";
// import teamImg9 from "@/public/images/team/team9.jpg";
// import teamImg10 from "@/public/images/team/team10.jpg";
// import teamImg11 from "@/public/images/team/team11.jpg";
// import teamImg12 from "@/public/images/team/team12.jpg";
// import teamImg13 from "@/public/images/team/team13.jpg";
// import teamImg14 from "@/public/images/team/team14.jpg";
// import React, { useState, useEffect } from "react";
// import TeamMemberModel from "../../models/TeamModel.js";
// import { getTeams } from "../../api/teamApi";

// const TeamTwo = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   console.log("TeamTwo");
//   useEffect(() => {
//     // Fetch the list of team members from your API
//     const fetchTeamMembers = async () => {
//       try {
//         console.log("fetching");
//         const response = await getTeams(); // Adjust API endpoint

//         console.log("Fetched data:", response);

//         let dataArray = [];
//         if (Array.isArray(response)) {
//           // If response itself is an array of arrays
//           dataArray = response.flat(); // Flatten nested arrays
//         } else if (Array.isArray(response)) {
//           // If data is an array of arrays within an object
//           dataArray = response.data.flat();
//         } else {
//           throw new Error("Unexpected API response structure.");
//         }

//         console.log("Flattened data:", dataArray);
//         const teamMembersData = TeamMemberModel.fromApiList(dataArray);
//         setTeamMembers(teamMembersData);

//       } catch (error) {
//         console.error("Error fetching team members:", error);
//       }
//     };

//     fetchTeamMembers();
//   }, []);
//   if (teamMembers.length === 0) return <p>Loading...</p>;
//   return (
//     <div className="team-area pb-75">
//       <div className="container">
//         <div className="row">
//           <div
//             className="col-lg-3 col-md-6 col-sm-6"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//           >
//             <div className="single-team-member bg1">
//               <Image src={teamImg7} alt="member-image" />
//               <div className="content">
//                 <h3>Franco Gino</h3>
//                 <ul className="social">
//                   <li>
//                     <a
//                       href="https://www.facebook.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-facebook-app-symbol"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.twitter.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.linkedin.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-linkedin"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.instagram.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-instagram"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-lg-3 col-md-6 col-sm-6"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//             data-aos-delay="100"
//           >
//             <div className="single-team-member bg2">
//               <Image src={teamImg8} alt="member-image" />
//               <div className="content">
//                 <h3>Emila Lucy</h3>
//                 <ul className="social">
//                   <li>
//                     <a
//                       href="https://www.facebook.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-facebook-app-symbol"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.twitter.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.linkedin.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-linkedin"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.instagram.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-instagram"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-lg-3 col-md-6 col-sm-6"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//           >
//             <div className="single-team-member bg3">
//               <Image src={teamImg9} alt="member-image" />
//               <div className="content">
//                 <h3>Alina Smith</h3>
//                 <ul className="social">
//                   <li>
//                     <a
//                       href="https://www.facebook.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-facebook-app-symbol"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.twitter.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.linkedin.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-linkedin"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.instagram.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-instagram"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-lg-3 col-md-6 col-sm-6"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//             data-aos-delay="100"
//           >
//             <div className="single-team-member bg4">
//               <Image src={teamImg10} alt="member-image" />
//               <div className="content">
//                 <h3>Andrea Romeo</h3>
//                 <ul className="social">
//                   <li>
//                     <a
//                       href="https://www.facebook.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-facebook-app-symbol"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.twitter.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.linkedin.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-linkedin"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.instagram.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-instagram"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-lg-3 col-md-6 col-sm-6"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//           >
//             <div className="single-team-member bg5">
//               <Image src={teamImg11} alt="member-image" />
//               <div className="content">
//                 <h3>Amy Jones</h3>
//                 <ul className="social">
//                   <li>
//                     <a
//                       href="https://www.facebook.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-facebook-app-symbol"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.twitter.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.linkedin.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-linkedin"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.instagram.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-instagram"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-lg-3 col-md-6 col-sm-6"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//             data-aos-delay="100"
//           >
//             <div className="single-team-member bg6">
//               <Image src={teamImg12} alt="member-image" />
//               <div className="content">
//                 <h3>David Warner</h3>
//                 <ul className="social">
//                   <li>
//                     <a
//                       href="https://www.facebook.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-facebook-app-symbol"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.twitter.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.linkedin.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-linkedin"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.instagram.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-instagram"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-lg-3 col-md-6 col-sm-6"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//           >
//             <div className="single-team-member bg7">
//               <Image src={teamImg13} alt="member-image" />
//               <div className="content">
//                 <h3>James Andy</h3>
//                 <ul className="social">
//                   <li>
//                     <a
//                       href="https://www.facebook.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-facebook-app-symbol"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.twitter.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.linkedin.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-linkedin"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.instagram.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-instagram"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-lg-3 col-md-6 col-sm-6"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//             data-aos-delay="100"
//           >
//             <div className="single-team-member bg8">
//               <Image src={teamImg14} alt="member-image" />
//               <div className="content">
//                 <h3>Sarah Taylor</h3>
//                 <ul className="social">
//                   <li>
//                     <a
//                       href="https://www.facebook.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-facebook-app-symbol"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.twitter.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.linkedin.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-linkedin"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.instagram.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="flaticon-instagram"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamTwo;
