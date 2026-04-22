export default function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>

      <div className="card">
        <p>Email: example@email.com</p>
        <p>Phone: +92 300 1234567</p>
      </div>

      <div className="card">
        <h2>Send a Message</h2>

        <form>
          <input
            type="text"
            placeholder="Your Name"
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <textarea
            placeholder="Your Message"
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          ></textarea>

          <button className="btn">Send</button>
        </form>
      </div>
    </div>
  );
}