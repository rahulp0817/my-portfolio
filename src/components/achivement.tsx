import React from "react";

const achivement = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center sm:text-left mb-6">
        Achivements
      </h1>
      <ul className="list-inside list-disc text-md text-center sm:text-left text-gray-400 font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">
          Achieved{"  "}
          <a
            className="text-white hover:text-orange-400"
            href="https://drive.google.com/drive/u/0/folders/1ePX01LUaPXLTurs8BP8nz1Ti6ivACi1d"
          >
            Letter of Recommendation and Appreciation
          </a>{" "}
          from My Captain (Educational Provider) in Python Programming
        </li>
        <li className="mb-2">
          Achieved{" "}
          <a
            className="text-white hover:text-orange-400"
            href="https://www.salesforce.com/trailblazer/rahulpradhan17"
          >
            50+ batches and 4 SuperBadges
          </a>{" "}
          on Journey to Salesforce Developer for developing applications,
          managing CRM, and creating an AI-powered Agent ChatBot.
        </li>
        <li className="mb-2">
          Achieved Certification from Oracle cloud Associate, Oracle AI
          Associate, AWS Cloud Quest, Postman API Student Expert, Career
          Essentials in Generative AI from Microsoft and RabbitMQ
        </li>
      </ul>
    </div>
  );
};

export default achivement;
