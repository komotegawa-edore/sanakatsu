export interface RSSSource {
  name: string;
  url: string;
  category: string;
}

export const RSS_SOURCES: RSSSource[] = [
  {
    name: "Google News",
    url: "https://news.google.com/rss/search?q=%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97&hl=ja&gl=JP&ceid=JP:ja",
    category: "general",
  },
  {
    name: "Yahoo!ニュース",
    url: "https://news.yahoo.co.jp/rss/topics/politics.xml",
    category: "politics",
  },
];

export const SEARCH_KEYWORDS = [
  "高市早苗",
  "高市早苗 政策",
  "高市早苗 発言",
  "高市早苗 国会",
];
