import Anilist from "../assets/anilist.png";
import { ProjectItem } from "../components";

function Projects() {
  return (
    <div className="flex h-full w-full flex-col p-8 md:flex md:items-start md:justify-center lg:items-center">
      <h1 className="custom-gradient-blue h-16 text-5xl font-bold">Projects</h1>
      <p className="font-montserrat text-gray-500">Swipe for more</p>
      <div className="mt-12">
        <ProjectItem
          image={Anilist}
          title="Torakka"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa
        iusto blanditiis minus laudantium consequatur cumque voluptas?
        Praesentium, molestiae voluptatum! Debitis voluptates totam libero
        officia? Dolor molestiae placeat consectetur praesentium!"
          tech={["React", "Firebase", "Kitsu API", "SASS"]}
        />
      </div>
    </div>
  );
}

export default Projects;
