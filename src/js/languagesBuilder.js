import language from "../icons/Language"

const LANGUAGES_COLORS = {
  Ruby: "#701516",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  C: "#555555",
  TypeScript: "#2b7489",
  HTML: "#e34c26",
  SCSS: "#a7b0d1",
  Other: "#cccccc"
}

const build = (languages) => {
  const MIN_AMOUNT = 0.08

  const sortedLanguages = Object.entries(languages)
                            .sort(([,a],[,b]) => b-a)
                            .filter(language => language[1] > MIN_AMOUNT)
                            .map(language => (
                              {
                                name: language[0],
                                amount: language[1],
                                color: LANGUAGES_COLORS[language[0]] || "#cccccc"
                              })
                            )
  const totalAmount = sortedLanguages.reduce((total, language) => total + language.amount, 0)
  sortedLanguages.push(
    {
      name: "Other",
      amount: 1 - totalAmount,
      color: LANGUAGES_COLORS["Other"]
    }
  )

  return sortedLanguages
}


export const languagesBuilder = (languages) => (build(languages) || []);
