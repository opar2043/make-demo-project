import React, { useEffect, useState } from "react";
import ProCard from "./proCard";

const ShowCard = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  return (
    <div>
      {projects &&
        projects
          .slice(0, 4)
          .map((pro) => <ProCard key={pro.name} pro={pro}></ProCard>)}
    </div>
  );
};

export default ShowCard;
