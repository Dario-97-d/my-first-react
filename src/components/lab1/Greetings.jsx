const dict =
{
    de: "Hallo",
    en: "Hello",
    fr: "Salut",
    it: "Ciao",
    pt: "Olá"
}

function Greetings(props)
{
    const { lang, children } = props

    return <div>{dict[lang]}, {children}</div>
}

export default Greetings