// 定义一个范围项，包含一个数字范围的二维数组
interface RangeItem {
    range: number[][]
}

// 创建一个映射，将字符串类型映射到范围项
const rangeMap: Map<string, RangeItem> = new Map([
    ["Armenian", {range: [[0x530, 0x58f]]}],
    ["Armenian Ligatures", {range: [[0xfb13, 0xfb17]]}],
    ["Carian", {range: [[0x102a0, 0x102df]]}],
    ["Caucasian Albanian", {range: [[0x10530, 0x1056f]]}],
    ["Cypriot Syllabary", {range: [[0x10800, 0x1083f]]}],
    ["Cyrillic", {range: [[0x400, 0x4ff]]}],
    ["Cyrillic Supplement", {range: [[0x500, 0x52f]]}],
    ["Cyrillic Extended-A", {range: [[0x2de0, 0x2dff]]}],
    ["Cyrillic Extended-B", {range: [[0xa640, 0xa69f]]}],
    ["Cyrillic Extended-C", {range: [[0x1c80, 0x1c8f]]}],
    ["Elbasan", {range: [[0x10500, 0x1052f]]}],
    ["Georgian", {range: [[0x10a0, 0x10ff]]}],
    ["Georgian Extended", {range: [[0x1c90, 0x1cbf]]}],
    ["Georgian Supplement", {range: [[0x2d00, 0x2d2f]]}],
    ["Glagolitic", {range: [[0x2c00, 0x2c5f]]}],
    ["Glagolitic Supplement", {range: [[0x1e000, 0x1e02f]]}],
    ["Gothic", {range: [[0x10330, 0x1034f]]}],
    ["Greek", {range: [[0x370, 0x3ff]]}],
    ["Greek Extended", {range: [[0x1f00, 0x1fff]]}],
    ["Ancient Greek Numbers", {range: [[0x10140, 0x1018f]]}],
    ["Latin", {range: [[0x0, 0x7f]]}],
    ["Basic Latin (ASCII)", {range: [[0x0, 0x7f]]}],
    ["Latin-1 Supplement", {range: [[0x80, 0xff]]}],
    ["Latin Extended-A", {range: [[0x100, 0x17f]]}],
    ["Latin Extended-B", {range: [[0x180, 0x24f]]}],
    ["Latin Extended-C", {range: [[0x2c60, 0x2c7f]]}],
    ["Latin Extended-D", {range: [[0xa720, 0xa7ff]]}],
    ["Latin Extended-E", {range: [[0xab30, 0xab6f]]}],
    ["Latin Extended Additional", {range: [[0x1e00, 0x1eff]]}],
    ["Latin Ligatures", {range: [[0xfb00, 0xfb06]]}],
    ["Fullwidth Latin Letters", {range: [[0xff00, 0xff5e]]}],
    ["IPA Extensions", {range: [[0x250, 0x2af]]}],
    ["Phonetic Extensions", {range: [[0x1d00, 0x1d7f]]}],
    ["Phonetic Extensions Supplement", {range: [[0x1d80, 0x1dbf]]}],
    ["Linear A", {range: [[0x10600, 0x1077f]]}],
    ["Linear B Syllabary", {range: [[0x10000, 0x1007f]]}],
    ["Linear B Ideograms", {range: [[0x10080, 0x100ff]]}],
    ["Aegean Numbers", {range: [[0x10100, 0x1013f]]}],
    ["Lycian", {range: [[0x10280, 0x1029f]]}],
    ["Lydian", {range: [[0x10920, 0x1093f]]}],
    ["Ogham", {range: [[0x1680, 0x169f]]}],
    ["Old Hungarian", {range: [[0x10c80, 0x10cff]]}],
    ["Old Italic", {range: [[0x10300, 0x1032f]]}],
    ["Old Permic", {range: [[0x10350, 0x1037f]]}],
    ["Phaistos Disc", {range: [[0x101d0, 0x101ff]]}],
    ["Runic", {range: [[0x16a0, 0x16ff]]}],
    ["Shavian", {range: [[0x10450, 0x1047f]]}],
    ["Modifier Tone Letters", {range: [[0xa700, 0xa71f]]}],
    ["Spacing Modifier Letters", {range: [[0x2b0, 0x2ff]]}],
    ["Superscripts and Subscripts", {range: [[0x2070, 0x209f]]}],
    ["Combining Diacritical Marks", {range: [[0x300, 0x36f]]}],
    ["Combining Diacritical Marks Extended", {range: [[0x1ab0, 0x1aff]]}],
    ["Combining Diacritical Marks Supplement", {range: [[0x1dc0, 0x1dff]]}],
    ["Combining Diacritical Marks for Symbols", {range: [[0x20d0, 0x20ff]]}],
    ["Combining Half Marks", {range: [[0xfe20, 0xfe2f]]}],
    ["Alphabetic Presentation Forms", {range: [[0xfb00, 0xfb4f]]}],
    ["ASCII Characters", {range: [[0x0, 0x7f]]}],
    ["Halfwidth and Fullwidth Forms", {range: [[0xff00, 0xffef]]}],
    ["Adlam", {range: [[0x1e900, 0x1e95f]]}],
    ["Bamum", {range: [[0xa6a0, 0xa6ff]]}],
    ["Bamum Supplement", {range: [[0x16800, 0x16a3f]]}],
    ["Bassa Vah", {range: [[0x16ad0, 0x16aff]]}],
    ["Coptic", {range: [[0x2c80, 0x2cff]]}],
    ["Coptic in Greek block", {range: [[0x3e2, 0x3ef]]}],
    ["Coptic Epact Numbers", {range: [[0x102e0, 0x102ff]]}],
    ["Egyptian Hieroglyphs", {range: [[0x13000, 0x1342f]]}],
    ["Egyptian Hieroglyph Format Controls", {range: [[0x13430, 0x1345f]]}],
    ["Ethiopic", {range: [[0x1200, 0x137f]]}],
    ["Ethiopic Supplement", {range: [[0x1380, 0x139f]]}],
    ["Ethiopic Extended", {range: [[0x2d80, 0x2ddf]]}],
    ["Ethiopic Extended-A", {range: [[0xab00, 0xab2f]]}],
    ["Medefaidrin", {range: [[0x16e40, 0x16e9f]]}],
    ["Mende Kikakui", {range: [[0x1e800, 0x1e8df]]}],
    ["Meroitic Cursive", {range: [[0x109a0, 0x109ff]]}],
    ["Meroitic Hieroglyphs", {range: [[0x10980, 0x1099f]]}],
    ["N'Ko", {range: [[0x7c0, 0x7ff]]}],
    ["Osmanya", {range: [[0x10480, 0x104af]]}],
    ["Tifinagh", {range: [[0x2d30, 0x2d7f]]}],
    ["Vai", {range: [[0xa500, 0xa63f]]}],
    ["Anatolian Hieroglyphs", {range: [[0x14400, 0x1467f]]}],
    ["Arabic", {range: [[0x600, 0x6ff]]}],
    ["Arabic Supplement", {range: [[0x750, 0x77f]]}],
    ["Arabic Extended-A", {range: [[0x8a0, 0x8ff]]}],
    ["Arabic Presentation Forms-A", {range: [[0xfb50, 0xfdff]]}],
    ["Arabic Presentation Forms-B", {range: [[0xfe70, 0xfeff]]}],
    ["Aramaic, Imperial", {range: [[0x10840, 0x1085f]]}],
    ["Avestan", {range: [[0x10b00, 0x10b3f]]}],
    ["Cuneiform", {range: [[0x12000, 0x123ff]]}],
    ["Cuneiform Numbers and Punctuation", {range: [[0x12400, 0x1247f]]}],
    ["Early Dynastic Cuneiform", {range: [[0x12480, 0x1254f]]}],
    ["Old Persian", {range: [[0x103a0, 0x103df]]}],
    ["Ugaritic", {range: [[0x10380, 0x1039f]]}],
    ["Elymaic", {range: [[0x10fe0, 0x10fff]]}],
    ["Hatran", {range: [[0x108e0, 0x108ff]]}],
    ["Hebrew", {range: [[0x590, 0x5ff]]}],
    ["Hebrew Presentation Forms", {range: [[0xfb1d, 0xfb4f]]}],
    ["Mandaic", {range: [[0x840, 0x85f]]}],
    ["Nabataean", {range: [[0x10880, 0x108af]]}],
    ["Old North Arabian", {range: [[0x10a80, 0x10a9f]]}],
    ["Old South Arabian", {range: [[0x10a60, 0x10a7f]]}],
    ["Pahlavi, Inscriptional", {range: [[0x10b60, 0x10b7f]]}],
    ["Pahlavi, Psalter", {range: [[0x10b80, 0x10baf]]}],
    ["Palmyrene", {range: [[0x10860, 0x1087f]]}],
    ["Parthian, Inscriptional", {range: [[0x10b40, 0x10b5f]]}],
    ["Phoenician", {range: [[0x10900, 0x1091f]]}],
    ["Samaritan", {range: [[0x800, 0x83f]]}],
    ["Syriac", {range: [[0x700, 0x74f]]}],
    ["Manichaean", {range: [[0x10ac0, 0x10aff]]}],
    ["Marchen", {range: [[0x11c70, 0x11cbf]]}],
    ["Mongolian", {range: [[0x1800, 0x18af]]}],
    ["Mongolian Supplement", {range: [[0x11660, 0x1167f]]}],
    ["Old Sogdian", {range: [[0x10f00, 0x10f2f]]}],
    ["Old Turkic", {range: [[0x10c00, 0x10c4f]]}],
    ["Phags-Pa", {range: [[0xa840, 0xa87f]]}],
    ["Sogdian", {range: [[0x10f30, 0x10f6f]]}],
    ["Tibetan", {range: [[0xf00, 0xfff]]}],
    ["Ahom", {range: [[0x11700, 0x1174f]]}],
    ["Bengali and Assamese", {range: [[0x980, 0x9ff]]}],
    ["Bhaiksuki", {range: [[0x11c00, 0x11c6f]]}],
    ["Brahmi", {range: [[0x11000, 0x1107f]]}],
    ["Chakma", {range: [[0x11100, 0x1114f]]}],
    ["Devanagari", {range: [[0x900, 0x97f]]}],
    ["Devanagari Extended", {range: [[0xa8e0, 0xa8ff]]}],
    ["Dogra", {range: [[0x11800, 0x1184f]]}],
    ["Grantha", {range: [[0x11300, 0x1137f]]}],
    ["Gujarati", {range: [[0xa80, 0xaff]]}],
    ["Gunjala Gondi", {range: [[0x11d60, 0x11daf]]}],
    ["Gurmukhi", {range: [[0xa00, 0xa7f]]}],
    ["Kaithi", {range: [[0x11080, 0x110cf]]}],
    ["Kannada", {range: [[0xc80, 0xcff]]}],
    ["Kharoshthi", {range: [[0x10a00, 0x10a5f]]}],
    ["Khojki", {range: [[0x11200, 0x1124f]]}],
    ["Khudawadi", {range: [[0x112b0, 0x112ff]]}],
    ["Lepcha", {range: [[0x1c00, 0x1c4f]]}],
    ["Limbu", {range: [[0x1900, 0x194f]]}],
    ["Mahajani", {range: [[0x11150, 0x1117f]]}],
    ["Malayalam", {range: [[0xd00, 0xd7f]]}],
    ["Meetei Mayek", {range: [[0xabc0, 0xabff]]}],
    ["Meetei Mayek Extensions", {range: [[0xaae0, 0xaaff]]}],
    ["Modi", {range: [[0x11600, 0x1165f]]}],
    ["Mro", {range: [[0x16a40, 0x16a6f]]}],
    ["Multani", {range: [[0x11280, 0x112af]]}],
    ["Nandinagari", {range: [[0x119a0, 0x119ff]]}],
    ["Newa", {range: [[0x11400, 0x1147f]]}],
    ["Ol Chiki", {range: [[0x1c50, 0x1c7f]]}],
    ["Oriya (Odia)", {range: [[0xb00, 0xb7f]]}],
    ["Saurashtra", {range: [[0xa880, 0xa8df]]}],
    ["Sharada", {range: [[0x11180, 0x111df]]}],
    ["Siddham", {range: [[0x11580, 0x115ff]]}],
    ["Sinhala", {range: [[0xd80, 0xdff]]}],
    ["Sinhala Archaic Numbers", {range: [[0x111e0, 0x111ff]]}],
    ["Sora Sompeng", {range: [[0x110d0, 0x110ff]]}],
    ["Syloti Nagri", {range: [[0xa800, 0xa82f]]}],
    ["Takri", {range: [[0x11680, 0x116cf]]}],
    ["Tamil", {range: [[0xb80, 0xbff]]}],
    ["Tamil Supplement", {range: [[0x11fc0, 0x11fff]]}],
    ["Telugu", {range: [[0xc00, 0xc7f]]}],
    ["Thaana", {range: [[0x780, 0x7bf]]}],
    ["Tirhuta", {range: [[0x11480, 0x114df]]}],
    ["Vedic Extensions", {range: [[0x1cd0, 0x1cff]]}],
    ["Wancho", {range: [[0x1e2c0, 0x1e2ff]]}],
    ["Warang Citi", {range: [[0x118a0, 0x118ff]]}],
    ["Cham", {range: [[0xaa00, 0xaa5f]]}],
    ["Hanifi Rohingya", {range: [[0x10d00, 0x10d3f]]}],
    ["Kayah Li", {range: [[0xa900, 0xa92f]]}],
    ["Khmer", {range: [[0x1780, 0x17ff]]}],
    ["Khmer Symbols", {range: [[0x19e0, 0x19ff]]}],
    ["Lao", {range: [[0xe80, 0xeff]]}],
    ["Myanmar", {range: [[0x1000, 0x109f]]}],
    ["Myanmar Extended-A", {range: [[0xaa60, 0xaa7f]]}],
    ["Myanmar Extended-B", {range: [[0xa9e0, 0xa9ff]]}],
    ["New Tai Lue", {range: [[0x1980, 0x19df]]}],
    ["Nyiakeng Puachue Hmong", {range: [[0x1e100, 0x1e14f]]}],
    ["Pahawh Hmong", {range: [[0x16b00, 0x16b8f]]}],
    ["Pau Cin Hau", {range: [[0x11ac0, 0x11aff]]}],
    ["Tai Le", {range: [[0x1950, 0x197f]]}],
    ["Tai Tham", {range: [[0x1a20, 0x1aaf]]}],
    ["Tai Viet", {range: [[0xaa80, 0xaadf]]}],
    ["Thai", {range: [[0xe00, 0xe7f]]}],
    ["Balinese", {range: [[0x1b00, 0x1b7f]]}],
    ["Batak", {range: [[0x1bc0, 0x1bff]]}],
    ["Buginese", {range: [[0x1a00, 0x1a1f]]}],
    ["Buhid", {range: [[0x1740, 0x175f]]}],
    ["Hanunoo", {range: [[0x1720, 0x173f]]}],
    ["Javanese", {range: [[0xa980, 0xa9df]]}],
    ["Makasar", {range: [[0x11ee0, 0x11eff]]}],
    ["Rejang", {range: [[0xa930, 0xa95f]]}],
    ["Sundanese", {range: [[0x1b80, 0x1bbf]]}],
    ["Sundanese Supplement", {range: [[0x1cc0, 0x1ccf]]}],
    ["Tagalog", {range: [[0x1700, 0x171f]]}],
    ["Tagbanwa", {range: [[0x1760, 0x177f]]}],
    ["Bopomofo", {range: [[0x3100, 0x312f]]}],
    ["Bopomofo Extended", {range: [[0x31a0, 0x31bf]]}],
    ["CJK Unified Ideographs (Han)", {range: [[0x4e00, 0x9fff]]}],
    ["CJK  Extension A", {range: [[0x3400, 0x4dbf]]}],
    ["CJK Extension B", {range: [[0x20000, 0x2a6df]]}],
    ["CJK Extension C", {range: [[0x2a700, 0x2b73f]]}],
    ["CJK Extension D", {range: [[0x2b740, 0x2b81f]]}],
    ["CJK Extension E", {range: [[0x2b820, 0x2ceaf]]}],
    ["CJK Compatibility Ideographs", {range: [[0xf900, 0xfaff]]}],
    ["CJK Compatibility Ideographs Supplement", {range: [[0x2f800, 0x2fa1f]]}],
    ["CJK Radicals / Kangxi Radicals", {range: [[0x2f00, 0x2fdf]]}],
    ["CJK Radicals Supplement", {range: [[0x2e80, 0x2eff]]}],
    ["CJK Strokes", {range: [[0x31c0, 0x31ef]]}],
    ["Ideographic Description Characters", {range: [[0x2ff0, 0x2fff]]}],
    ["Hangul Jamo", {range: [[0x1100, 0x11ff]]}],
    ["Hangul Jamo Extended-A", {range: [[0xa960, 0xa97f]]}],
    ["Hangul Jamo Extended-B", {range: [[0xd7b0, 0xd7ff]]}],
    ["Hangul Compatibility Jamo", {range: [[0x3130, 0x318f]]}],
    ["Halfwidth Jamo", {range: [[0xffa0, 0xffdc]]}],
    ["Hangul Syllables", {range: [[0xac00, 0xd7af]]}],
    ["Hiragana", {range: [[0x3040, 0x309f]]}],
    ["Kana Supplement", {range: [[0x1b000, 0x1b0ff]]}],
    ["Small Kana Extension", {range: [[0x1b130, 0x1b16f]]}],
    ["Kanbun", {range: [[0x3190, 0x319f]]}],
    ["Katakana", {range: [[0x30a0, 0x30ff]]}],
    ["Katakana Phonetic Extensions", {range: [[0x31f0, 0x31ff]]}],
    ["Halfwidth Katakana", {range: [[0xff65, 0xff9f]]}],
    ["Lisu", {range: [[0xa4d0, 0xa4ff]]}],
    ["Miao", {range: [[0x16f00, 0x16f9f]]}],
    ["Tangut", {range: [[0x17000, 0x187ff]]}],
    ["Tangut Components", {range: [[0x18800, 0x18aff]]}],
    ["Yi Syllables", {range: [[0xa000, 0xa48f]]}],
    ["Yi Radicals", {range: [[0xa490, 0xa4cf]]}],
    ["Cherokee", {range: [[0x13a0, 0x13ff]]}],
    ["Cherokee Supplement", {range: [[0xab70, 0xabbf]]}],
    ["Deseret", {range: [[0x10400, 0x1044f]]}],
    ["Osage", {range: [[0x104b0, 0x104ff]]}],
    ["Unified Canadian Aboriginal Syllabics", {range: [[0x1400, 0x167f]]}],
    ["UCAS Extended", {range: [[0x18b0, 0x18ff]]}],
    ["Braille Patterns", {range: [[0x2800, 0x28ff]]}],
    ["Musical Symbols", {range: [[0x1d100, 0x1d1ff]]}],
    ["Ancient Greek Musical Notation", {range: [[0x1d200, 0x1d24f]]}],
    ["Byzantine Musical Symbols", {range: [[0x1d000, 0x1d0ff]]}],
    ["Duployan", {range: [[0x1bc00, 0x1bc9f]]}],
    ["Shorthand Format Controls", {range: [[0x1bca0, 0x1bcaf]]}],
    ["Sutton SignWriting", {range: [[0x1d800, 0x1daaf]]}],
    ["General Punctuation", {range: [[0x2000, 0x206f]]}],
    ["ASCII Punctuation", {range: [[0x21, 0x7f]]}],
    ["Latin-1 Punctuation", {range: [[0xa1, 0xbf]]}],
    ["Supplemental Punctuation", {range: [[0x2e00, 0x2e7f]]}],
    ["CJK Symbols and Punctuation", {range: [[0x3000, 0x303f]]}],
    ["Ideographic Symbols and Punctuation", {range: [[0x16fe0, 0x16fff]]}],
    ["CJK Compatibility Forms", {range: [[0xfe30, 0xfe4f]]}],
    ["Halfwidth and Fullwidth Forms", {range: [[0xff00, 0xffef]]}],
    ["Small Form Variants", {range: [[0xfe50, 0xfe6f]]}],
    ["Vertical Forms", {range: [[0xfe10, 0xfe1f]]}],
    ["Letterlike Symbols", {range: [[0x2100, 0x214f]]}],
    ["Roman Symbols", {range: [[0x10190, 0x101cf]]}],
    ["Mathematical Alphanumeric Symbols", {range: [[0x1d400, 0x1d7ff]]}],
    ["Arabic Mathematical Alphabetic Symbols", {range: [[0x1ee00, 0x1eeff]]}],
    ["Enclosed Alphanumerics", {range: [[0x2460, 0x24ff]]}],
    ["Enclosed Alphanumeric Supplement", {range: [[0x1f100, 0x1f1ff]]}],
    ["Enclosed CJK Letters and Months", {range: [[0x3200, 0x32ff]]}],
    ["Enclosed Ideographic Supplement", {range: [[0x1f200, 0x1f2ff]]}],
    ["CJK Compatibility", {range: [[0x3300, 0x33ff]]}],
    ["Additional Squared Symbols", {range: [[0x2100, 0x214f]]}],
    ["APL symbols", {range: [[0x2336, 0x237a]]}],
    ["Control Pictures", {range: [[0x2400, 0x243f]]}],
    ["Miscellaneous Technical", {range: [[0x2300, 0x23ff]]}],
    ["Optical Character Recognition (OCR)", {range: [[0x2440, 0x245f]]}],
    ["ASCII Digits", {range: [[0x30, 0x39]]}],
    ["Fullwidth ASCII Digits", {range: [[0xff10, 0xff19]]}],
    ["Common Indic Number Forms", {range: [[0xa830, 0xa83f]]}],
    ["Coptic Epact Numbers", {range: [[0x102e0, 0x102ff]]}],
    ["Counting Rod Numerals", {range: [[0x1d360, 0x1d37f]]}],
    ["Cuneiform Numbers and Punctuation", {range: [[0x12400, 0x1247f]]}],
    ["Indic Siyaq Numbers", {range: [[0x1ec70, 0x1ecbf]]}],
    ["Mayan Numerals", {range: [[0x1d2e0, 0x1d2ff]]}],
    ["Number Forms", {range: [[0x2150, 0x218f]]}],
    ["Ottoman Siyaq Numbers", {range: [[0x1ed00, 0x1ed4f]]}],
    ["Rumi Numeral Symbols", {range: [[0x10e60, 0x10e7f]]}],
    ["Sinhala Archaic Numbers", {range: [[0x111e0, 0x111ff]]}],
    ["Super and Subscripts", {range: [[0x2070, 0x209f]]}],
    ["Arrows", {range: [[0x2190, 0x21ff]]}],
    ["Supplemental Arrows-A", {range: [[0x27f0, 0x27ff]]}],
    ["Supplemental Arrows-B", {range: [[0x2900, 0x297f]]}],
    ["Supplemental Arrows-C", {range: [[0x1f800, 0x1f8ff]]}],
    ["Additional Arrows", {range: [[0x2b00, 0x2bff]]}],
    ["Miscellaneous Symbols and Arrows", {range: [[0x2b00, 0x2bff]]}],
    ["Mathematical Alphanumeric Symbols", {range: [[0x1d400, 0x1d7ff]]}],
    ["Arabic Mathematical Alphabetic Symbols", {range: [[0x1ee00, 0x1eeff]]}],
    ["Letterlike Symbols", {range: [[0x2100, 0x214f]]}],
    ["Mathematical Operators", {range: [[0x2200, 0x22ff]]}],
    ["Supplemental Mathematical Operators", {range: [[0x2a00, 0x2aff]]}],
    ["Miscellaneous Mathematical Symbols-A", {range: [[0x27c0, 0x27ef]]}],
    ["Miscellaneous Mathematical Symbols-B", {range: [[0x2980, 0x29ff]]}],
    ["Floors and Ceilings", {range: [[0x2308, 0x230b]]}],
    ["Invisible Operators", {range: [[0x2061, 0x2064]]}],
    ["Geometric Shapes", {range: [[0x25a0, 0x25ff]]}],
    ["Additional Shapes", {range: [[0x2b00, 0x2bff]]}],
    ["Box Drawing", {range: [[0x2500, 0x257f]]}],
    ["Block Elements", {range: [[0x2580, 0x259f]]}],
    ["Geometric Shapes Extended", {range: [[0x1f780, 0x1f7ff]]}],
    ["Dingbats", {range: [[0x2700, 0x27bf]]}],
    ["Ornamental Dingbats", {range: [[0x1f650, 0x1f67f]]}],
    ["Emoticons", {range: [[0x1f600, 0x1f64f]]}],
    ["Miscellaneous Symbols", {range: [[0x2600, 0x26ff]]}],
    ["Miscellaneous Symbols And Pictographs", {range: [[0x1f300, 0x1f5ff]]}],
    ["Supplemental Symbols and Pictographs", {range: [[0x1f900, 0x1f9ff]]}],
    ["Symbols and Pictographs Extended-A", {range: [[0x1fa70, 0x1faff]]}],
    ["Transport and Map Symbols", {range: [[0x1f680, 0x1f6ff]]}],
    ["Alchemical Symbols", {range: [[0x1f700, 0x1f77f]]}],
    ["Ancient Symbols", {range: [[0x10190, 0x101cf]]}],
    ["Currency Symbols", {range: [[0x20a0, 0x20cf]]}],
    ["Yen, Pound and Cent", {range: [[0xa2, 0xa5]]}],
    ["Chess, Checkers/Draughts", {range: [[0x2654, 0x265f]]}],
    ["Chess Symbols", {range: [[0x1fa00, 0x1fa6f]]}],
    ["Domino Tiles", {range: [[0x1f030, 0x1f09f]]}],
    ["Japanese Chess", {range: [[0x2616, 0x2617]]}],
    ["Mahjong Tiles", {range: [[0x1f000, 0x1f02f]]}],
    ["Playing Cards", {range: [[0x1f0a0, 0x1f0ff]]}],
    ["Card suits", {range: [[0x2660, 0x2667]]}],
    ["Miscellaneous Symbols and Arrows", {range: [[0x2b00, 0x2bff]]}],
    ["Yijing Mono-, Di- and Trigrams", {range: [[0x268a, 0x268f]]}],
    ["Yijing Hexagram Symbols", {range: [[0x4dc0, 0x4dff]]}],
    ["Tai Xuan Jing Symbols", {range: [[0x1d300, 0x1d35f]]}],
    ["C0", {range: [[0x0, 0x1f]]}],
    ["C1", {range: [[0x80, 0x9f]]}],
    ["Layout Controls", {range: [[0x2000, 0x206f]]}],
    ["Invisible Operators", {range: [[0x2061, 0x2064]]}],
    ["Specials", {range: [[0xfff0, 0xffff]]}],
    ["Tags", {range: [[0xe0000, 0xe007f]]}],
    ["Variation Selectors", {range: [[0xfe00, 0xfe0f]]}],
    ["Variation Selectors Supplement", {range: [[0xe0100, 0xe01ef]]}],
    ["Private Use Area", {range: [[0xe000, 0xf8ff]]}],
    ["Supplementary Private Use Area-A", {range: [[0xf0000, 0xffffd]]}],
    ["Supplementary Private Use Area-B", {range: [[0x100000, 0x10fffd]]}],
    ["High Surrogates", {range: [[0xd800, 0xdbff]]}],
    ["Low Surrogates", {range: [[0xdc00, 0xdfff]]}],
    ["Range in Arabic Presentation Forms-A", {range: [[0xfdd0, 0xfdef]]}],
    ["Range in Specials", {range: [[0xfffe, 0xffff]]}]
])

/**
 * 获取指定类型的表情符号映射列表
 *
 * @param {string} type - 表情符号类型，默认为"Cyrillic"
 * @returns {Map<string, string>} - 包含表情符号映射的 Map 对象
 */
function getTypeEmojiList(type: string = "Cyrillic"): Map<string, string> {
    const rangeItem = rangeMap.get(type);

    if (!rangeItem) {
        return new Map() as Map<string, string>
    }

    const rangeList = rangeItem.range || [];
    const result: Map<string, string> = new Map();

    for (const item of rangeList) {
        const [start, end] = item
        const map = getRangeEmojiList(start, end)
        // 融合两个map
        map.forEach((value, key) => {
            result.set(key, value);
        });
    }
    return result
}

/**
 * 获取指定范围的表情符号映射
 *
 * @param {number} start - 起始Unicode值，默认为0x00000
 * @param {number} end - 结束Unicode值，默认为0x00000
 * @returns {Map<string, string>} - 包含表情符号映射的 Map 对象
 */
function getRangeEmojiList(start: number = 0x00000, end: number = 0x00000): Map<string, string> {
    const emojiMap: Map<string, string> = new Map();

    for (let i = start; i <= end; i++) {
        emojiMap.set(String.fromCodePoint(i), `\\u${i.toString(16)}`);
    }
    return emojiMap;
}

export {
    getRangeEmojiList,
    getTypeEmojiList,
    rangeMap
}
