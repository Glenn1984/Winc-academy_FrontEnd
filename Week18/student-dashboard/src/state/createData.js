import personData from "./Winc Eindopdracht – Studenten Mock data – Frontend Cursus Opdrachten";


//* Generate random id, phone number, mail address and age.

const generateId = (() => Math.floor(Math.random() * Math.floor(Math.random() * Date.now())));

const generatePhoneNumber = () => {
    const maxRoundsToLoop = [2, 7];
    let arrayOfPhoneNumbers = [0, "-", ];

    for (let index = 0; index < maxRoundsToLoop[0]; index++) {
        arrayOfPhoneNumbers.splice(1, 0, Math.floor(Math.random() * 9) + 1);
    };
    for (let index = 0; index < maxRoundsToLoop[1]; index++) {
        arrayOfPhoneNumbers.splice(4, 0, Math.floor(Math.random() * 9));
    };

    return arrayOfPhoneNumbers.join().replace(/,/g, "");
};

const generateMobileNumber = () => {
    const maxRoundsToLoop = 8;
    let arrayOfMobileNumbers = [0, 6, "-", ];

    for (let index = 0; index < maxRoundsToLoop; index++) {
        arrayOfMobileNumbers.splice(3, 0, Math.floor(Math.random() * 9));
    };

    return arrayOfMobileNumbers.join().replace(/,/g, "");
};

const getPhoneNumber = () => {
    const phoneNumber = [generatePhoneNumber(), generateMobileNumber()];
    const result = phoneNumber[Math.floor(Math.random() * phoneNumber.length)];

    return result;
};


const mailProvider = [
    "gmail.com",
    "hotmail.com",
    "icloud.com",
    "outlook.com",
    "live.com",
    "aol.com",
    "zoho.com",
    "mail.com",
    "protonmail.com"
];

const generateMailProvider = (mailProvider => mailProvider[Math.floor(Math.random() * mailProvider.length)]);

const lowerCaseWithoutWhitespace = (name => name.toLowerCase().replace(/ /g, ""));

const generateMailAddress = (firstName, lastName) => {
    const mailAddress = `${lowerCaseWithoutWhitespace(firstName)}${lowerCaseWithoutWhitespace(lastName)}@` + generateMailProvider(mailProvider);

    return mailAddress;
};

const generateAge = (minAge, maxAge) => {
    minAge = Math.ceil(minAge);
    maxAge = Math.floor(maxAge);

    return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
};

const generateStudentInfo = (student) => {
    const studentInfo = {
        id: generateId(),
        phone: getPhoneNumber(),
        mail: generateMailAddress(student.firstName, student.lastName),
        age: generateAge(18, 60),
    };

    return studentInfo;
};

const arrayOfStudentInfo = personData.map(student => {
    const updatedStudentInfo = { ...student, ...generateStudentInfo(student) };
    
    return updatedStudentInfo;
});

export default arrayOfStudentInfo;