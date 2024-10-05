import SectionWrapper from '../../SectionWrapper';

const faqsList = [
  {
    q: 'How does web app performance impact my business?',
    a: 'Web app performance directly influences user engagement and retention, affecting your overall success.',
  },
  {
    q: 'What are the benefits of working with Sanset Technologies?',
    a: 'We offer tailored web app development solutions to meet your unique business needs, ensuring a high-quality product that drives engagement.',
  },
  {
    q: 'What types of features can I add to my web app?',
    a: 'We provide a range of features, including user authentication, database integration, and responsive design to enhance user experience.',
  },
  {
    q: 'How can I attract users to my web app?',
    a: 'Utilizing targeted social media marketing, SEO strategies, and engaging content can significantly increase your app’s visibility.',
  },
  {
    q: 'How can Sanset Technologies enhance my web app?',
    a: 'Our expert team provides personalized support and strategies to help you create a user-friendly web app that drives growth and engagement.',
  },
  {
    q: 'What sets Sanset Technologies apart from other web app developers?',
    a: 'As a newly established company, we focus on delivering innovative and high-quality web apps tailored specifically to your business goals.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'We provide dedicated customer support to assist you with any questions or issues during the web app development process.',
  },
];

const FAQs = () => (
  <SectionWrapper id="faqs">
    <div className="custom-screen text-gray-600 py-8 md:py-4">
      <div className="max-w-xl xl:mx-auto xl:text-center">
        <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3">
          Get all the answers you need about our services. If you still have
          questions, don’t hesitate to reach out!{' '}
          <a
            className="text-blue-600 hover:text-blue-400 duration-150 font-semibold whitespace-nowrap"
            href="mailto:example@domain.com"
          >
            contact us
          </a>
          .
        </p>
      </div>
      <div className="mt-12">
        <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
          {faqsList.map((item, idx) => (
            <li key={idx} className="space-y-3">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {item.q}
              </summary>
              <p
                dangerouslySetInnerHTML={{ __html: item.a }}
                className="leading-relaxed"
              ></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default FAQs;

