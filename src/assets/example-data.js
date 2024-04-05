import uniqid from "uniqid";

const exapleData = {
  personalInfo: {
    fullName: "Jpsephine Meyers",
    email: "josephine.meyers@mail.co.uk",
    phoneNumber: "+44 3245 5521 5521",
    address: "London, UK",
  },
  sections: {
    educations: {
        id: uniqid(),
        degree: "Bachelors in Economics",
        schoolName: "London City University",
        location: "New York City, US",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
      },
    experiences: {
        id: uniqid(),
        companyName: "Umbrella Inc.",
        positionTitle: "UX & UI Designer",
        location: "New York City, US",
        description:
          "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
      }
  }
}

export default exapleData;