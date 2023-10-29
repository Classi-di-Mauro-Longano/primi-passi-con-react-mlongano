export function Lingua() {
  return (
    <section className="selezione_lingua">
      <label>Seleziona la lingua</label>
      <div className="select">
        <ul>
          {LANGUAGES.map((language) => (
            <li key={language.value} value={language.value}>
              {language.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabo", value: "ar" },
  { label: "Francese", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Inglese", value: "en" },
  { label: "Giapponese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Spanish", value: "es" },
];

