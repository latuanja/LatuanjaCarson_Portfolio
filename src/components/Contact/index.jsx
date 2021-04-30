import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact Me!</h1>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.4857106162!2d-90.38354626559983!3d38.65301691862626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2sSt.%20Louis%2C%20MO!5e0!3m2!1sen!2sus!4v1619763971960!5m2!1sen!2sus" frameBorder="0"
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>314-517-1441</p>

      <h4>Email</h4>
      <p>latuanja.c@gmail.com</p>

      <h4>Address</h4>
      <p>Saint Louis, MO</p>
    </div>
  );
};

export default About;