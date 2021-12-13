import iconLanguage from "../../images/language-white.png";

const language = [
  {
    id: "es",
    title: "Español",
    flag: "es",
  },
  {
    id: "en",
    title: "English",
    flag: "us",
  },
];

function LanguageSwitcher() {
  return (
    <button>
      <img
        style={{ width: "30px" }}
        src={iconLanguage}
        alt="language switcher"
      />
    </button>
  );
}

export default LanguageSwitcher;
