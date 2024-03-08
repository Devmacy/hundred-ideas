interface TextInfo {
    CharacterCount: number
    WordCount: number
    LineCount: number
    ByteSize: number
}

/**
 * 统计文本信息，包括字符数、单词数、行数和字节大小。
 *
 * @param {string} str - 要统计的文本字符串。
 * @returns {TextInfo} 包含文本信息的对象。
 */
function textStatistics(str: string = ""): TextInfo {
    const characterCount = str.length || 0
    const lineCount = str.match(/\n/g)?.length || 0;
    const wordCount = str.match(/\b\w+\b/g)?.length || 0;
    const byteSize = new TextEncoder().encode(str).byteLength || 0

    return {
        CharacterCount: characterCount,
        WordCount: wordCount,
        LineCount: lineCount + 1,
        ByteSize: byteSize,
    };
}

export {textStatistics};

