export const REACT_APP_API_URL = `${process.env.REACT_APP_API_URL}`;

export const availableOptions = ["propertyBarter", "propertyRent"];

const thisYear = new Date().getFullYear();

export const propertyYears: any = [];

for (let i = 1970; i <= thisYear; i++) {
  propertyYears.push(String(i));
}

export const propertySquare = [0, 25, 50, 75, 100, 125, 150, 200, 300, 500];

export const Messages = {
  error1: "Something went wrong!",
  error2: "Please login first!",
  error3: "Please fulfill all inputs!",
  error4: "Message is empty!",
  error5: "Only images with jpeg, jpg, png format allowed!",
};

const topPropertyRank = 50;

[
  {
    resource:
      "/Users/abdukhalim/Desktop/nestar-demo/libs/components/property/Filter.tsx",
    owner: "typescript",
    code: "2307",
    severity: 8,
    message:
      "Cannot find module '../../config' or its corresponding type declarations.",
    source: "ts",
    startLineNumber: 15,
    startColumn: 55,
    endLineNumber: 15,
    endColumn: 69,
  },
];
