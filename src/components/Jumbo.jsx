import { Container } from "@mantine/core";

const Jumbo = () => {
  return (
    <section>
      <Container size="lg" className="bg-gray-100 ">
        <div className="grid grid-cols-2">
          <div className="text-center">
            <h1 className=" pt-3">Hello there, I'm a Software Engineer!</h1>
            <p>
              <h4 className="text-2xl font-semibold">My name is Dennis K.</h4>
            </p>
          </div>
          <div className="text-center  py-3">Hello</div>
        </div>
      </Container>
    </section>
  );
};

export default Jumbo;
