import gitgubLangColors from "./gitgubLangColors"

const LANGUAGES_COLORS = {
  ...gitgubLangColors,
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
