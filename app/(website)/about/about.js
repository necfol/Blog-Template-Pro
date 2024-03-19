import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">I am a passionate developer.</p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
        <div />
        {authors.slice(0, 1).map(author => {
        // {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author.slug}`}>
                <Image
                  src={imageProps.src}
                  alt={author.name || " "}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              </Link>
            </div>
          );
        })}
        <div />
      </div>

      <div className="mx-auto prose text-center dark:prose-invert mt-14">
        <p>
        Throughout my career, I have successfully completed numerous Full-Stack development, 
        Front-End development, Node.js development, React Native development, Nginx deployment, 
        ranging from small customizations to full-scale implementations.With a robust professional background spanning six years at Alibaba,
         I bring a wealth of technical expertise and skills into the project.
        </p>
        <p>
        I have a solid foundation in front-end technologies such as HTML, CSS, Chrome extension, 
        Puppeteer and JavaScript, as well as expertise in popular frameworks like React and Vue. 
        On the back-end, I am experienced in working with languages like Node.js, along with frameworks like Koa & express & Next.js.
        </p>
        <p>
          My full-stack development skills allow me to create end-to-end solutions, 
          ensuring seamless integration between the front-end and back-end components. 
          I am experienced in developing robust APIs, implementing responsive and user-friendly interfaces, 
          and handling complex data structures.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
