module.exports = {
    rules: {
        // Тело коммита должно начинаться с пустой строки
        "body-leading-blank": [2, "always"],

        // Нижний колонтитул коммита должен начинаться с пустой строки
        "footer-leading-blank": [2, "always"],

        // Максимальная длина заголовка 72 символа
        "header-max-length": [2, "always", 72],

        // Область всегда только в нижнем регистре
        "scope-case": [2, "always", "lower-case"],

        // Тип всегда только в нижнем регистре
        "type-case": [2, "always", "lower-case"],

        // Тип не может быть пустым
        "type-empty": [2, "never"],

        // Перечислим все возможные варианты коммитов
        "type-enum": [
            2,
            "always",
            [
                "feature",
                "fix",
                "perf",
                "refactor",
                "revert",
                "style",
                "test"
            ]
        ]
    }
};