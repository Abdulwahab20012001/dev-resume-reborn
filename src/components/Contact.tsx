
const Contact = () => (
  <div className="my-16 pb-20" id="contact">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Contact</h2>
    <div className="mb-4 text-base text-muted-foreground">
      Want to discuss an opportunity, collaborate, or just say hello?
    </div>
    <a
      href="mailto:chaudhrywahab3@gmail.com"
      className="inline-block font-semibold px-8 py-3 rounded bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-all"
    >
      Email Me
    </a>
    <div className="mt-6 flex flex-wrap gap-4 text-muted-foreground justify-center text-sm">
      <a
        href="https://linkedin.com/in/abdul-wahab-159123215"
        className="hover:text-primary underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/"
        className="hover:text-primary underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a href="#" className="hover:text-primary underline">Twitter</a>
    </div>
  </div>
);

export default Contact;
