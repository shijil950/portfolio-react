import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <h1>Contact Me</h1>
      <p>Get In Touch</p>

      <form>

        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <input type="text" placeholder="Subject" />

        <textarea rows="7" placeholder="Message"></textarea>

        <button
  onClick={() =>
    window.open(
      "https://wa.me/7558028950?text=Hello i want to know more about your services",
      "_blank"
    )
  }
>
  CONTACT ME
</button>

      </form>

    </section>
  );
}

export default Contact;