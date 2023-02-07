interface AboutCardProps {
    title: string;
    body: string;
}

function AboutCard({ title, body }: AboutCardProps) {
  return (
    <>
      <h1 className="custom-gradient-purple font-montserrat text-2xl font-bold">
        { title }
      </h1>
      <p className="mt-2 text-gray-300">
        {body}
      </p>
    </>
  );
}

export default AboutCard;
