interface DictionaryEntry {
  helloIAm: string;
  whoAmI: string;
  writeMe: string;
  myCV: string;
  currentProject: string;
  currentDescription: string;
  technologies: string;
  technologiesDescription: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    helloIAm: "Hey! My name is Aleksey Pecheritsa 👋",
    whoAmI:
      "I am full-stack web developer, running my own blog about IT, do mentoring",
    writeMe: "Write me",
    myCV: "My CV",
    currentProject: "Current project",
    currentDescription:
      "I`m working on PMS and Channel Manager system to help hotel buisneses manage their stuff",
    technologies: "Technologies",
    technologiesDescription:
      "Using a range of technologies from frontend to devops",
  },
  ru: {
    helloIAm: "Привет! Меня зовут Алексей Печерица 👋",
    whoAmI:
      "Я фуллстек веб-разработчик, веду свой блог про IT, занимаюсь менторством",
    writeMe: "Написать мне",
    myCV: "Мое резюме",
    currentProject: "Текущий проект",
    currentDescription:
      "Я работаю над PMS системой и Channel Manager, чтобы помочь гостиничному бизнесу управлять своими делами",
    technologies: "Технологии",
    technologiesDescription:
      "Использую различные технологии для разработки - от фронтенда до развертывания",
  },
};
