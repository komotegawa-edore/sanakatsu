export interface RSSSource {
  name: string;
  url: string;
  category: string;
}

export const RSS_SOURCES: RSSSource[] = [
  // 政治全般
  {
    name: "Yahoo!ニュース 政治",
    url: "https://news.yahoo.co.jp/rss/topics/politics.xml",
    category: "politics",
  },
  {
    name: "Google News 日本の政治",
    url: "https://news.google.com/rss/search?q=%E6%97%A5%E6%9C%AC+%E6%94%BF%E6%B2%BB&hl=ja&gl=JP&ceid=JP:ja",
    category: "politics",
  },
  // 国会・選挙
  {
    name: "Google News 国会",
    url: "https://news.google.com/rss/search?q=%E5%9B%BD%E4%BC%9A&hl=ja&gl=JP&ceid=JP:ja",
    category: "parliament",
  },
  {
    name: "Google News 選挙",
    url: "https://news.google.com/rss/search?q=%E9%81%B8%E6%8C%99&hl=ja&gl=JP&ceid=JP:ja",
    category: "election",
  },
  // 経済政策
  {
    name: "Google News 経済政策",
    url: "https://news.google.com/rss/search?q=%E7%B5%8C%E6%B8%88%E6%94%BF%E7%AD%96+%E6%97%A5%E6%9C%AC&hl=ja&gl=JP&ceid=JP:ja",
    category: "economy",
  },
  // 高市早苗（引き続き含める）
  {
    name: "Google News 高市早苗",
    url: "https://news.google.com/rss/search?q=%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97&hl=ja&gl=JP&ceid=JP:ja",
    category: "sanae",
  },
];

export const SEARCH_KEYWORDS = [
  "日本 政治",
  "国会",
  "選挙",
  "経済政策",
  "高市早苗",
  "総理大臣",
  "与党 野党",
];
