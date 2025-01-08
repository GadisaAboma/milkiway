import Link from "next/link";
import React from "react";
import Image from "next/image";
import baseUrl from "@/utils/api"; // Ensure baseUrl is correctly imported and valid

export default function Project({ id, project }) {
  const truncatedDescription = project.description
    ? project.description.slice(0, 100)
    : "No description available"; // Fallback if no description

  const imageUrl = project.banner
    ? baseUrl + "storage/" + project.banner
    : "/default-image.jpg"; // Fallback image

  console.log(imageUrl);

  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="single-case-studies-box">
        <Link
          href={`/portfolio/portfolio-details?id=${project.id}`}
          className="d-block image"
        >
          <Image
            src={imageUrl}
            width={200}
            height={100}
            alt="case-studies-image"
            unoptimized={true}
          />
        </Link>
        <div className="content">
          <h3>
            <Link href={`/portfolio/portfolio-details?id=${project.id}`}>
              {project.title}
            </Link>
          </h3>
          <div
            className="project-description"
            dangerouslySetInnerHTML={{ __html: truncatedDescription }}
          />
          <Link
            href={`/portfolio/portfolio-details?id=${project.id}`}
            className="link-btn"
          >
            Detail<i className="bx bx-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
