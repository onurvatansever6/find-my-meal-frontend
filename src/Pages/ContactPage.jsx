import '../Style/ContactPage.css';

function ContactPage () {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactPage;