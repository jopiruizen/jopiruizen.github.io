module.exports={
    globals: {
        "ts-jest": {
        isolatedModules: true
        }
    },
    roots: [
        "<rootDir>/src"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testMatch": [
        "**/*.(test|spec).(ts|tsx)"
    ],

    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/src/__mocks__/styleMock.js",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "<rootDir>/src/__mocks__/fileMock.js"
    },

    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ],

    transformIgnorePatterns: [
        "/node_modules/", 
        "\\.js\\.[^\\/]+$",
        "<rootDir>/src/utils/",
    ]
};