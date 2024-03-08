const loremWords: string[] = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua",
    "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi",
    "aliquip", "ex", "ea", "commodo", "consequat", "Duis", "aute", "irure", "dolor", "in", "reprehenderit",
    "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur", "Excepteur",
    "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "in", "culpa", "qui", "officia", "deserunt",
    "mollit", "anim", "id", "est", "laborum"
];

/**
 * Lorem Ipsum 文本生成器。
 *
 * @param {number} [paragraphs=5] - 生成的段落数。
 * @param {number[]} [sentencesPerParagraph=[3, 8]] - 每个段落的句子数量范围。
 * @param {number[]} [wordsPerSentence=[8, 15]] - 每个句子的单词数量范围。
 * @param {boolean} [startWithLorem=true] - 文本是否以 "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 开头。
 * @param {boolean} [asHtml=true] - 是否以 HTML 格式生成文本。
 * @returns {string} 生成的 Lorem Ipsum 文本。
 */
function loremIpsumGenerator(
    paragraphs: number = 1,
    sentencesPerParagraph: number[] = [3, 8],
    wordsPerSentence: number[] = [8, 15],
    startWithLorem: boolean = true,
    asHtml: boolean = false): string {

    let result = `${startWithLorem ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit." : ""}`

    for (let i = 0; i < paragraphs - 1; i++) {
        const sentencesPerParagraphLength = getRandomNumberLR(sentencesPerParagraph[0], sentencesPerParagraph[1])
        let paragraph = ""
        for (let j = 0; j < sentencesPerParagraphLength; j++) {
            const wordsPerSentenceLength = getRandomNumberLR(wordsPerSentence[0], wordsPerSentence[1])
            let sentence = ""
            for (let k = 0; k < wordsPerSentenceLength; k++) {
                sentence += `${loremWords[getRandomNumberLR(0, loremWords.length - 1)]}${k !== wordsPerSentenceLength - 1 ? " " : "."}`
            }
            paragraph += `${sentence}${j !== sentencesPerParagraphLength - 1 ? " " : ""}`
        }

        result += `\n\n${paragraph}`
    }

    if (asHtml) {
        result = result
            .split("\n\n")
            .map((paragraph) => `<p>${paragraph}</p>`)
            .join("\n\n");
    }

    return result
}

/**
 * 生成[min,max]的随机整数
 * @param min 最小值
 * @param max 最大值
 * @return {number} 整数
 */
function getRandomNumberLR(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export {
    loremIpsumGenerator
}
