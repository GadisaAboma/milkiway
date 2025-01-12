import servicesDetailsImg from "@/public/images/services-details.jpg";
import Image from "next/image";

export const services = [
  {
    id: 1,
    title: "Web Development",
    desc: (
      <div className="services-details-desc">
        <p>
          Our web development services focus on creating responsive and
          user-friendly websites tailored to your business needs. We utilize the
          latest technologies to ensure optimal performance and security.
        </p>
        <h3>What you&apos;ll get under this service</h3>
        <ul>
          <li>Custom website design and development</li>
          <li>Responsive layouts for all devices</li>
          <li>SEO-friendly structures to enhance visibility</li>
          <li>Integration with content management systems</li>
          <li>Ongoing support and maintenance</li>
        </ul>
      </div>
    ),
    image: <Image src={servicesDetailsImg} alt="services-details" />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: (
      <div className="services-details-desc">
        <p>
          We specialize in developing robust mobile applications for both iOS
          and Android platforms, ensuring a seamless user experience and
          engaging design.
        </p>
        <h3>What you&apos;ll get under this service</h3>
        <ul>
          <li>Cross-platform mobile app development</li>
          <li>User-friendly interfaces</li>
          <li>Performance optimization</li>
          <li>App store deployment assistance</li>
          <li>Post-launch support and updates</li>
        </ul>
      </div>
    ),
    image: <Image src={servicesDetailsImg} alt="services-details" />,
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: (
      <div className="services-details-desc">
        <p>
          Our UI/UX design services focus on creating intuitive and
          aesthetically pleasing interfaces that enhance user satisfaction and
          engagement.
        </p>
        <h3>What you&apos;ll get under this service</h3>
        <ul>
          <li>User research and persona development</li>
          <li>Wireframing and prototyping</li>
          <li>Visual design and branding</li>
          <li>User testing and feedback integration</li>
          <li>Responsive and adaptive design</li>
        </ul>
      </div>
    ),
    image: <Image src={servicesDetailsImg} alt="services-details" />,
  },
  {
    id: 4,
    title: "IT Consultation",
    desc: (
      <div className="services-details-desc">
        <p>
          Our IT consultation services help businesses align their technology
          strategies with their overall goals, providing insights and solutions
          tailored to your needs.
        </p>
        <h3>What you&apos;ll get under this service</h3>
        <ul>
          <li>IT strategy development</li>
          <li>Technology assessment and recommendations</li>
          <li>Risk management and compliance</li>
          <li>Cloud solutions and migration strategies</li>
          <li>Ongoing support and training</li>
        </ul>
      </div>
    ),
    image: <Image src={servicesDetailsImg} alt="services-details" />,
  },
  {
    id: 5,
    title: "App Deployment",
    desc: (
      <div className="services-details-desc">
        <p>
          We provide comprehensive app deployment services, ensuring that your
          applications are successfully launched and functioning optimally in
          their environments.
        </p>
        <h3>What you&apos;ll get under this service</h3>
        <ul>
          <li>Deployment planning and strategy</li>
          <li>Environment setup and configuration</li>
          <li>Continuous integration and delivery (CI/CD)</li>
          <li>Post-deployment monitoring and support</li>
          <li>Performance optimization</li>
        </ul>
      </div>
    ),
    image: <Image src={servicesDetailsImg} alt="services-details" />,
  },
  {
    id: 6,
    title: "Website Hosting",
    desc: (
      <div className="services-details-desc">
        <p>
          Our website hosting services provide a reliable and secure environment
          for your website, with various plans tailored to meet different needs.
        </p>
        <h3>What you&apos;ll get under this service</h3>
        <ul>
          <li>Shared, VPS, and dedicated hosting options</li>
          <li>24/7 customer support</li>
          <li>High uptime guarantees</li>
          <li>Regular backups and security monitoring</li>
          <li>Scalability options as your business grows</li>
        </ul>
      </div>
    ),
    image: <Image src={servicesDetailsImg} alt="services-details" />,
  },
  {
    id: 7,
    title: "Graphics Design",
    desc: (
      <div className="services-details-desc">
        <p>
          Our graphics design services help you create visually compelling
          designs that effectively communicate your brand's message and engage
          your audience.
        </p>
        <h3>What you&apos;ll get under this service</h3>
        <ul>
          <li>Logo and branding design</li>
          <li>Marketing materials (brochures, flyers, etc.)</li>
          <li>Social media graphics</li>
          <li>Infographics and data visualization</li>
          <li>Print and digital design solutions</li>
        </ul>
      </div>
    ),
    image: <Image src={servicesDetailsImg} alt="services-details" />,
  },
];
