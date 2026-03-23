const dict =
{
  de: "Hallo",
  en: "Hello",
  fr: "Salut",
  it: "Ciao",
  pt: "Olá"
}

const bgImagePath = "/images/country-flags/"
const imagePaths =
{
  de: `${bgImagePath}de.svg`,
  en: `${bgImagePath}gb.svg`,
  fr: `${bgImagePath}fr.svg`,
  it: `${bgImagePath}it.svg`,
  pt: `${bgImagePath}pt.svg`
}

const buttonStyles =
{
  height: '2.25rem',
  width: '3rem',
  backgroundColor: 'transparent',
  backgroundSize: 'auto 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  margin: '1rem',
  padding: '0',
  border: '0'
}

export default function Greetings(props)
{
  const { lang, children } = props

  return (<>
    <h3>Greeting Dictionary</h3>

    {Object.entries(dict).map(([language, greeting]) => (
      <button
        key={language}
        style={{ ...buttonStyles, backgroundImage: `url(${imagePaths[language]})` }}
        onClick={() => document.querySelector('#greeting-target').innerText = greeting}
      >
      </button>
    ))}

    <h4 id="greeting-target" style={{ textDecoration: 'underline', textUnderlineOffset: '0.5rem' }}>{dict[lang]}</h4>
  </>)
}
