import ozonewalk from '../../../assets/logos/ozonewalk.png';
import microsoft from '../../../assets/logos/microsoft.png';
import SectionWrapper from '../../SectionWrapper';

const logos = [
  {
    src: ozonewalk,
    alt: 'Ozonewalk',
    link: 'https://www.ozonewalk.com/',
  },
];

const handleClick = (link) => {
  window.open(link, '_blank');
};

const LogoGrid = () => (
  <SectionWrapper>
    <div className="custom-screen py-10 flex flex-row justify-around w-full gap-4">
      <div>
        <h2 className="text-center text-sm font-semibold text-gray-800">
          Funded by the
        </h2>
        <div className="mt-2 flex justify-center">
          <ul className="flex items-center justify-center">
            <li>
              <img src={microsoft} alt={'Microsoft'} style={{ height: 60 }} />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-center text-sm font-semibold text-gray-800">
          Trusted by the
        </h2>
        <div className="mt-2 flex justify-center">
          <ul className="flex items-center justify-center">
            {logos.map((item, idx) => (
              <li
                key={idx}
                onClick={() => handleClick(item.link)}
                className="cursor-pointer hover:opacity-75"
              >
                <img src={item.src} alt={item.alt} style={{ height: 60 }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default LogoGrid;
