import Social from "./../components/Social";

const About = () => {
  return (
    <div className="flex items-center justify-center bg-gray-800 text-white p-5">
      <div className="bg-gray-700/10 rounded-xl p-8 flex flex-col items-center space-y-6 shadow-2xl w-full lg:w-2/3">
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-8">
            Crafting Digital Solutions that <br />
            Transcend Expectations.
          </h1>
          <p className="text-lg leading-loose  text-gray-200">
            Welcome to my digital space! I'm Syed Farrukh Gilani, a dedicated
            software engineer on a mission to bring innovative ideas to life
            through code. Armed with a Bachelor's degree in Computer Science
            from Air University, I have honed my skills to create seamless and
            impactful digital experiences.
          </p>
          <p className="text-lg leading-loose  text-gray-200">
            My journey in software engineering has been a dynamic exploration,
            delving into various back-end frameworks like Node.js, Express, and
            NestJS, Ruby on Rails and .NET. As a full-stack developer, I thrive
            on crafting solutions that seamlessly blend form and function.
          </p>
          <p className="text-lg leading-loose  text-gray-200">
            In the ever-evolving tech landscape, I've made AWS server-less
            technologies my playground, leveraging their power to build robust
            and scalable systems. My expertise spans both SQL and NoSQL
            databases, from traditional choices like Postgresql and MySQL to
            cutting-edge solutions like MongoDB, DynamoDB, and CosmosDB. Working
            with ORMs such as Prisma, Sequelize, and Mongoose has added finesse
            to my database interactions.
          </p>
          <p className="text-lg leading-loose  text-gray-200">
            A certified Microsoft Technology Associate (MTA), I'm committed to
            staying ahead of the curve in technology trends. Challenges fuel my
            passion, and I relish the opportunity to explore new horizons within
            the vast realm of software engineering. Join me on this exciting
            journey through the digital landscape, where we turn concepts into
            reality, creating solutions that transcend expectations. Let's
            connect, collaborate, and turn your vision into a digital
            masterpiece!
          </p>
        </div>
        <Social />
      </div>
    </div>
  );
};

export default About;
